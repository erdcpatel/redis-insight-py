// Background Web Worker for high-performance keyspace filtering,
// namespace tokenization, and key hygiene linting on large datasets (100k+ keys).

self.onmessage = function (e) {
  const { type, payload, id } = e.data;

  try {
    switch (type) {
      case 'ANALYZE_NAMESPACES_AND_HYGIENE': {
        const { keys, delimiters } = payload;
        const start = performance.now();
        const analysis = analyzeNamespacesAndHygiene(keys, delimiters || [":", "/", "."]);
        const durationMs = performance.now() - start;
        self.postMessage({
          id,
          type: 'ANALYZE_RESULT',
          success: true,
          data: {
            ...analysis,
            durationMs
          }
        });
        break;
      }

      default:
        self.postMessage({ id, success: false, error: `Unknown worker action: ${type}` });
    }
  } catch (err) {
    self.postMessage({ id, success: false, error: err.message || String(err) });
  }
};

function analyzeNamespacesAndHygiene(keys, delimiters) {
  const sortedDelims = [...delimiters].sort((a, b) => b.length - a.length);
  const namespaceMap = new Map();
  const anomalies = [];

  let totalKeyLength = 0;

  for (let i = 0; i < keys.length; i++) {
    const item = keys[i];
    const key = item.key || "";
    totalKeyLength += key.length;

    // 1. Namespace extraction
    let matchedPrefix = null;
    for (const d of sortedDelims) {
      const idx = key.indexOf(d);
      if (idx !== -1) {
        matchedPrefix = key.slice(0, idx + d.length);
        break;
      }
    }
    const ns = matchedPrefix || "(root)";
    if (!namespaceMap.has(ns)) {
      namespaceMap.set(ns, {
        prefix: ns,
        count: 0,
        types: new Set(),
        sampleKeys: [],
        memoryEstimate: 0
      });
    }
    const nsObj = namespaceMap.get(ns);
    nsObj.count++;
    if (item.type) nsObj.types.add(item.type);
    if (nsObj.sampleKeys.length < 3) nsObj.sampleKeys.push(key);
    if (item.memory) nsObj.memoryEstimate += item.memory;

    // 2. Hygiene & Linting checks
    // Check spaces
    if (/\s/.test(key)) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Whitespace in Key",
        severity: "warning",
        desc: "Key contains space or control whitespace which complicates CLI scripting"
      });
    }
    // Check trailing delimiter
    for (const d of sortedDelims) {
      if (key.endsWith(d)) {
        anomalies.push({
          key,
          type: item.type,
          issue: "Trailing Delimiter",
          severity: "warning",
          desc: `Key ends with delimiter '${d}' leaving an empty leaf token`
        });
        break;
      }
    }
    // Check double delimiter (e.g. :: when : is delimiter)
    if (key.includes("::") || key.includes("//")) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Double Delimiter",
        severity: "info",
        desc: "Key has repeated delimiters ('::' or '//') which may cause empty hierarchy nodes"
      });
    }
    // Check non-ASCII / non-printable
    if (/[^\x20-\x7E]/.test(key)) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Non-ASCII Characters",
        severity: "warning",
        desc: "Key contains binary or non-printable ASCII characters"
      });
    }
    // Check overly long keys (> 128 chars)
    if (key.length > 128) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Long Key (>128 chars)",
        severity: "info",
        desc: `Key length is ${key.length} characters; long keys consume extra Redis RAM in dictionary hash tables`
      });
    }
    // Check unnamespaced root keys
    if (!matchedPrefix && keys.length > 20) {
      anomalies.push({
        key,
        type: item.type,
        issue: "Missing Namespace",
        severity: "info",
        desc: "Key has no delimiter prefix and sits directly in the global root namespace"
      });
    }
  }

  // Format namespaces array sorted descending by count
  const namespaces = Array.from(namespaceMap.values()).map(n => ({
    prefix: n.prefix,
    count: n.count,
    percentage: keys.length > 0 ? ((n.count / keys.length) * 100).toFixed(1) : 0,
    types: Array.from(n.types),
    sampleKeys: n.sampleKeys,
    memoryEstimate: n.memoryEstimate
  })).sort((a, b) => b.count - a.count);

  return {
    totalAnalyzed: keys.length,
    avgKeyLength: keys.length > 0 ? (totalKeyLength / keys.length).toFixed(1) : 0,
    distinctNamespacesCount: namespaces.length,
    topNamespace: namespaces[0] || null,
    namespaces,
    anomalies: anomalies.slice(0, 100), // Limit top 100 anomalies
    totalAnomaliesCount: anomalies.length
  };
}
