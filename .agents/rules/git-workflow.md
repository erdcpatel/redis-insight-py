---
trigger: always_on
description: Strict Git workflow invariants forbidding direct commits or pushes to the main branch.
---

# Git Workflow & Branch Protection Invariants

1. **Never Commit or Push Directly to `main`**:
   - Direct commits and direct pushes to the `main` branch are strictly forbidden.
   - GitHub branch protection is actively enforced on `main` (`enforce_admins: true`, PR reviews required, force pushes disabled, deletions disabled).

2. **Branching Strategy & Mandatory Pre-Commit Checklist**:
   - Always create a dedicated branch for changes (e.g., `feature/<name>`, `fix/<name>`, `docs/<name>`).
   - **Self-Enforcing Pre-Commit Verification Checklist** (Must pass before committing or pushing):
     1. [ ] **Frontend Build**: `cd frontend && npm run build` (0 errors, assets bundled into `dist/assets/`; `dist/` is gitignored).
     2. [ ] **Backend Automated Tests**: `PYTHONPATH=. pytest tests/` (105+ passed, 1 skipped for AirPlay port 7000).
     3. [ ] **Playwright E2E Tests**: `cd frontend && npx playwright test` (15+ passed, 1 skipped).
     4. [ ] **Documentation & Skills Synchronization Checklist**:
        - All new architectural patterns, safety rules, or APIs documented in `AGENTS.md` and `.agents/skills/redis-insight-dev/SKILL.md`.
        - All UI/UX standards, components (e.g. toast system, virtual scrolling, shimmer, zero-alert rules) updated in `docs/UI_UX_GUIDELINES.md`.
        - Any new flags, environment variables, or CLI options documented in `README.md` and `AGENTS.md`.
        - Any new local setup or testing workflows documented in `docs/LOCAL_TESTING.md`.
     5. [ ] **Git Status & Branch Verification**:
        - Confirm current branch is NOT `main` (`git branch --show-current`).
        - Confirm clean status without unintended temporary files (`git status`).
   - Push the branch to GitHub: `git push -u origin <branch-name>`.

3. **Pull Request Merging**:
   - Create a Pull Request against `main` via `gh pr create` or the GitHub web UI.
   - All merges into `main` must occur exclusively via Pull Request.

