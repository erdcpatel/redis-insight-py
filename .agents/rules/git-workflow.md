---
trigger: always_on
description: Strict Git workflow invariants forbidding direct commits or pushes to the main branch.
---

# Git Workflow & Branch Protection Invariants

1. **Never Commit or Push Directly to `main`**:
   - Direct commits and direct pushes to the `main` branch are strictly forbidden.
   - GitHub branch protection is actively enforced on `main` (`enforce_admins: true`, PR reviews required, force pushes disabled, deletions disabled).

2. **Branching Strategy**:
   - Always create a dedicated branch for changes (e.g., `feature/<name>`, `fix/<name>`, `docs/<name>`).
   - Run the full verification pipeline on the feature branch:
     - `cd frontend && npm run build`
     - `PYTHONPATH=. pytest tests/`
     - `cd frontend && npx playwright test`
   - Push the branch to GitHub: `git push -u origin <branch-name>`.

3. **Pull Request Merging**:
   - Create a Pull Request against `main` via `gh pr create` or the GitHub web UI.
   - All merges into `main` must occur exclusively via Pull Request.
