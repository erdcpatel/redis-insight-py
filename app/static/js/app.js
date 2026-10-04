// Client side logic for Redis Insight Py

document.addEventListener('DOMContentLoaded', () => {
    initIcons();
    setupEventListeners();
});

function initIcons() {
    if (window.lucide) {
        window.lucide.createIcons();
    }
}

// Re-run lucide icons on HTMX swap
document.addEventListener('htmx:afterSwap', () => {
    initIcons();
});

function openModal(modalId = 'connectionModal') {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add('active');
        const firstInput = modal.querySelector('input');
        if (firstInput) firstInput.focus();
    }
}

function closeModal(modalId = 'connectionModal') {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove('active');
        // Reset form & test box
        const form = modal.querySelector('form');
        if (form) form.reset();
        const testResult = document.getElementById('testResultBox');
        if (testResult) {
            testResult.className = 'test-result-box';
            testResult.innerHTML = '';
        }
    }
}

async function testConnectionFromModal() {
    const testBtn = document.getElementById('btnTestConnection');
    const resultBox = document.getElementById('testResultBox');
    if (!testBtn || !resultBox) return;

    const host = document.getElementById('connHost').value.trim() || 'localhost';
    const port = parseInt(document.getElementById('connPort').value, 10) || 6379;
    const db = parseInt(document.getElementById('connDb').value, 10) || 0;
    const username = document.getElementById('connUsername').value.trim() || null;
    const password = document.getElementById('connPassword').value || null;
    const use_tls = document.getElementById('connTls').checked;

    testBtn.disabled = true;
    testBtn.innerHTML = `<i data-lucide="loader-2" class="spin"></i> Testing...`;
    initIcons();

    resultBox.className = 'test-result-box';
    resultBox.innerHTML = '';

    try {
        const response = await fetch('/api/connections/test', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ host, port, db, username, password, use_tls })
        });
        const data = await response.json();

        if (data.success) {
            resultBox.className = 'test-result-box success';
            resultBox.innerHTML = `
                <i data-lucide="check-circle-2"></i>
                <span>Connected! Latency: <strong>${data.latency_ms} ms</strong> (Redis v${data.redis_version || 'unknown'})</span>
            `;
        } else {
            resultBox.className = 'test-result-box error';
            resultBox.innerHTML = `
                <i data-lucide="alert-circle"></i>
                <span>Failed: ${data.error || 'Connection refused'}</span>
            `;
        }
    } catch (err) {
        resultBox.className = 'test-result-box error';
        resultBox.innerHTML = `
            <i data-lucide="alert-circle"></i>
            <span>Network error: ${err.message}</span>
        `;
    } finally {
        testBtn.disabled = false;
        testBtn.innerHTML = `<i data-lucide="zap"></i> Test Connection`;
        initIcons();
    }
}

function filterByType(type, element) {
    // Update active tab styles
    document.querySelectorAll('.type-tab').forEach(tab => tab.classList.remove('active'));
    element.classList.add('active');

    // Trigger HTMX request with updated type
    const searchInput = document.getElementById('keySearchInput');
    const pattern = searchInput ? searchInput.value.trim() || '*' : '*';

    htmx.ajax('GET', `/partials/keys-table?pattern=${encodeURIComponent(pattern)}&type_filter=${encodeURIComponent(type)}`, {
        target: '#keysTableContainer',
        swap: 'innerHTML'
    });
}

function setupEventListeners() {
    // Escape key closes modal
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeModal();
        }
    });

    // Listen to HTMX events to auto-refresh other UI components
    document.body.addEventListener('connectionActivated', () => {
        // Refresh stats and keys table
        htmx.ajax('GET', '/partials/server-stats', { target: '#topStatsContainer', swap: 'innerHTML' });
        htmx.ajax('GET', '/partials/keys-table', { target: '#keysTableContainer', swap: 'innerHTML' });
    });

    document.body.addEventListener('connectionAdded', () => {
        closeModal();
        htmx.ajax('GET', '/partials/server-stats', { target: '#topStatsContainer', swap: 'innerHTML' });
        htmx.ajax('GET', '/partials/keys-table', { target: '#keysTableContainer', swap: 'innerHTML' });
    });

    document.body.addEventListener('connectionDeleted', () => {
        htmx.ajax('GET', '/partials/server-stats', { target: '#topStatsContainer', swap: 'innerHTML' });
        htmx.ajax('GET', '/partials/keys-table', { target: '#keysTableContainer', swap: 'innerHTML' });
    });

    // Periodic heartbeat to refresh latency & stats
    setInterval(() => {
        const statsEl = document.getElementById('topStatsContainer');
        if (statsEl) {
            htmx.ajax('GET', '/partials/server-stats', { target: '#topStatsContainer', swap: 'innerHTML' });
        }
    }, 15000);
}
