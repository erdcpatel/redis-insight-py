import { defineConfig, devices } from '@playwright/test';
import fs from 'fs';
import path from 'path';

const homeDir = process.env.HOME || '';
const userVenvPy = path.join(homeDir, 'workspace', 'venv', 'py313', 'bin', 'python');
const pythonBin = process.env.PYTHON_BIN || (process.env.VIRTUAL_ENV ? path.join(process.env.VIRTUAL_ENV, 'bin', 'python') : (fs.existsSync(userVenvPy) ? userVenvPy : 'python3'));

export default defineConfig({
  testDir: './e2e',
  timeout: 30000,
  expect: {
    timeout: 5000,
  },
  fullyParallel: false,
  workers: 1,
  reporter: [['list']],
  use: {
    baseURL: 'http://127.0.0.1:8001',
    trace: 'on-first-retry',
    headless: true,
  },
  webServer: {
    command: `${pythonBin} ../run.py`,
    url: 'http://127.0.0.1:8001',
    reuseExistingServer: true,
    timeout: 15000,
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],
});
