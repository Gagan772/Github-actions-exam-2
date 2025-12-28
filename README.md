# 🎓 GitHub Actions Hands-On Learning Repository

> **Learn GitHub Actions by DOING, not reading!**  
> 48 runnable mini programs covering every concept asked in MCQs.

---

## 📚 Table of Contents

1. [Quick Start](#-quick-start)
2. [Repository Structure](#-repository-structure)
3. [How to Use This Repository](#-how-to-use-this-repository)
4. [Concept Index](#-concept-index)
5. [Detailed Concept Guide](#-detailed-concept-guide)
6. [MCQ Tips Summary](#-mcq-tips-summary)

---

## 🚀 Quick Start

### Step 1: Fork or Clone This Repository

```bash
# Clone to your local machine
git clone https://github.com/YOUR-USERNAME/Github-actions-exam-2.git
cd Github-actions-exam-2
```

### Step 2: Push to Your GitHub Repository

```bash
# If you cloned, create your own repo and push
git remote set-url origin https://github.com/YOUR-USERNAME/YOUR-REPO.git
git push -u origin main
```

### Step 3: Go to Actions Tab

1. Open your repository on GitHub
2. Click the **"Actions"** tab
3. You'll see all 48 workflows listed!

### Step 4: Run Your First Workflow

1. Click on **"01 - Workflow File Location Demo"**
2. Click **"Run workflow"** button (right side)
3. Click the green **"Run workflow"** button in the dropdown
4. Watch it execute! 🎉

---

## 📁 Repository Structure

```
.github/
├── workflows/                    # All 48 learning workflows
│   ├── 01-workflow-file-location.yml
│   ├── 02-push-trigger.yml
│   ├── 03-pull-request-trigger.yml
│   ├── ... (all 48 workflows)
│   └── 48-filtering-failed-runs.yml
│
└── actions/                      # Custom actions for learning
    ├── js-action/                # JavaScript action example
    │   ├── action.yml
    │   ├── index.js
    │   └── package.json
    ├── composite-action/         # Composite action example
    │   └── action.yml
    └── docker-action/            # Docker action example
        ├── action.yml
        ├── Dockerfile
        └── entrypoint.sh
```

---

## 📖 How to Use This Repository

### For Each Concept:

| Step | Action | Where |
|------|--------|-------|
| 1️⃣ | Read the workflow YAML file | Your IDE or GitHub |
| 2️⃣ | Trigger the workflow | GitHub Actions tab |
| 3️⃣ | Observe the results | GitHub UI |
| 4️⃣ | Read the MCQ tips in comments | YAML file |

### Trigger Types:

| Trigger | How to Activate |
|---------|-----------------|
| `workflow_dispatch` | Manual: Actions → Select workflow → "Run workflow" |
| `push` | Push any commit to the specified branch |
| `pull_request` | Create a PR to the specified branch |
| `schedule` | Automatic at scheduled time (UTC) |

---

## 📋 Concept Index

### A. Workflow & Execution Basics (1-10)

| # | Concept | Workflow File | Trigger |
|---|---------|--------------|---------|
| 1 | Workflow file location | `01-workflow-file-location.yml` | Manual |
| 2 | Push trigger | `02-push-trigger.yml` | Push to main |
| 3 | Pull request trigger | `03-pull-request-trigger.yml` | Create PR |
| 4 | Manual dispatch trigger | `04-workflow-dispatch-trigger.yml` | Manual |
| 5 | Schedule trigger (cron) | `05-schedule-trigger.yml` | Manual/Schedule |
| 6 | Jobs vs Steps | `06-jobs-vs-steps.yml` | Manual |
| 7 | Job execution order | `07-job-execution-order.yml` | Manual |
| 8 | Dependent jobs (needs) | `08-dependent-jobs-needs.yml` | Manual |
| 9 | Matrix strategy | `09-matrix-strategy.yml` | Manual |
| 10 | Runner types | `10-runner-types.yml` | Manual |

### B. Logging & Workflow Commands (11-15)

| # | Concept | Workflow File | Trigger |
|---|---------|--------------|---------|
| 11 | Normal logs (echo) | `11-normal-logs-echo.yml` | Manual |
| 12 | Debug logs | `12-debug-logs.yml` | Manual |
| 13 | Warning annotations | `13-warning-annotations.yml` | Manual |
| 14 | Error annotations | `14-error-annotations.yml` | Manual |
| 15 | GitHub auto-added steps | `15-github-added-steps.yml` | Manual |

### C. Environment & Variables (16-23)

| # | Concept | Workflow File | Trigger |
|---|---------|--------------|---------|
| 16 | env at workflow level | `16-env-workflow-level.yml` | Manual |
| 17 | env at job level | `17-env-job-level.yml` | Manual |
| 18 | env at step level | `18-env-step-level.yml` | Manual |
| 19 | env precedence | `19-env-precedence.yml` | Manual |
| 20 | GITHUB_ENV usage | `20-github-env.yml` | Manual |
| 21 | GITHUB_PATH usage | `21-github-path.yml` | Manual |
| 22 | Protected default env vars | `22-protected-env-vars.yml` | Manual |
| 23 | Variables vs hardcoded paths | `23-variables-vs-hardcoded.yml` | Manual |

### D. Secrets & Security (24-26)

| # | Concept | Workflow File | Trigger | Setup Required |
|---|---------|--------------|---------|----------------|
| 24 | secrets context | `24-secrets-context.yml` | Manual | Add secret |
| 25 | Secret redaction | `25-secret-redaction.yml` | Manual | Add secret |
| 26 | Secrets command line security | `26-secrets-command-line.yml` | Manual | None |

### E. Action Types & Metadata (27-32)

| # | Concept | Workflow File | Trigger |
|---|---------|--------------|---------|
| 27 | JavaScript action | `27-javascript-action.yml` | Manual |
| 28 | Composite action | `28-composite-action.yml` | Manual |
| 29 | Docker container action | `29-docker-action.yml` | Manual |
| 30 | action.yml purpose | `30-action-yml-purpose.yml` | Manual |
| 31 | Inputs to actions | `31-action-inputs.yml` | Manual |
| 32 | Outputs from actions | `32-action-outputs.yml` | Manual |

### F. Versioning & Release (33-34)

| # | Concept | Workflow File | Trigger |
|---|---------|--------------|---------|
| 33 | SHA pinning vs tags | `33-sha-pinning.yml` | Manual |
| 34 | Release management strategy | `34-release-strategy.yml` | Manual |

### G. Artifacts & Cache (35-40)

| # | Concept | Workflow File | Trigger |
|---|---------|--------------|---------|
| 35 | Upload artifact | `35-upload-artifact.yml` | Manual |
| 36 | Download artifact | `36-download-artifact.yml` | Manual |
| 37 | Artifact retention | `37-artifact-retention.yml` | Manual |
| 38 | Cache miss | `38-cache-miss.yml` | Manual |
| 39 | Cache hit | `39-cache-hit.yml` | Manual (run twice) |
| 40 | Cache only on success | `40-cache-on-success.yml` | Manual |

### H. Files & Permissions (41-42)

| # | Concept | Workflow File | Trigger |
|---|---------|--------------|---------|
| 41 | Executable scripts (chmod +x) | `41-executable-scripts.yml` | Manual |
| 42 | Docker entrypoint permission | `42-docker-entrypoint-permission.yml` | Manual |

### I. Environments & Approvals (43-45)

| # | Concept | Workflow File | Trigger | Setup Required |
|---|---------|--------------|---------|----------------|
| 43 | Environment with reviewers | `43-environment-reviewers.yml` | Manual | Create environment |
| 44 | Job waiting for approval | `44-job-waiting-approval.yml` | Manual | Create environment |
| 45 | Auto-fail after 30 days | `45-auto-fail-30-days.yml` | Manual | Create environment |

### J. Visibility & UI (46-48)

| # | Concept | Workflow File | Trigger |
|---|---------|--------------|---------|
| 46 | Actions tab status | `46-actions-tab-status.yml` | Manual/Push |
| 47 | PR Checks tab status | `47-pr-checks-status.yml` | Create PR |
| 48 | Filtering failed runs | `48-filtering-failed-runs.yml` | Manual |

---

## 📘 Detailed Concept Guide

---

### 📂 SECTION A: Workflow & Execution Basics

---

#### Concept 1: Workflow File Location (.github/workflows)

**WHY THIS EXISTS:**
GitHub Actions ONLY looks in `.github/workflows/` folder. Files elsewhere are ignored.

**HOW TO RUN:**
1. Go to **Actions** tab
2. Select **"01 - Workflow File Location Demo"**
3. Click **"Run workflow"** → **"Run workflow"**

**WHAT TO OBSERVE:**
- ✅ Workflow runs because it's in `.github/workflows/`
- Check the logs showing the file path

**MCQ TIP:**
- ❌ Wrong: `.github/actions/`, `workflows/`, root folder
- ✅ Correct: `.github/workflows/` ONLY

---

#### Concept 2: Push Trigger

**WHY THIS EXISTS:**
Automatically run CI/CD when code is pushed to repository.

**HOW TO RUN:**
1. Make any change to a file
2. Commit and push to `main` branch:
```bash
git add .
git commit -m "Test push trigger"
git push origin main
```

**WHAT TO OBSERVE:**
- Workflow starts automatically after push
- Check `GITHUB_SHA`, `GITHUB_ACTOR`, commit message in logs

**MCQ TIP:**
- Push trigger is most common for CI pipelines
- Can filter by branches: `branches: [main, develop]`

---

#### Concept 3: Pull Request Trigger

**WHY THIS EXISTS:**
Run checks on PRs before merging to ensure code quality.

**HOW TO RUN:**
1. Create a new branch:
```bash
git checkout -b test-pr-branch
```
2. Make a change, commit, and push:
```bash
echo "test" >> test.txt
git add .
git commit -m "Test PR"
git push origin test-pr-branch
```
3. Go to GitHub → Create Pull Request to `main`

**WHAT TO OBSERVE:**
- Workflow runs when PR is created
- Check PR "Checks" tab for status
- `github.sha` is the MERGE commit SHA (not branch SHA!)

**MCQ TIP:**
- `pull_request` runs on merge commit
- `pull_request_target` runs on base branch (security risk!)

---

#### Concept 4: Manual Dispatch (workflow_dispatch)

**WHY THIS EXISTS:**
Run workflows on-demand from GitHub UI with custom inputs.

**HOW TO RUN:**
1. Go to **Actions** tab
2. Select **"04 - Manual Dispatch Trigger Demo"**
3. Click **"Run workflow"**
4. Fill in the inputs:
   - Environment: `staging` or `production`
   - Debug mode: check or uncheck
5. Click **"Run workflow"**

**WHAT TO OBSERVE:**
- Input form appears with dropdowns and checkboxes
- Inputs available as `${{ inputs.environment }}`

**MCQ TIP:**
- Input types: `string`, `boolean`, `choice`, `environment`
- Required inputs must be provided

---

#### Concept 5: Schedule Trigger (Cron)

**WHY THIS EXISTS:**
Run workflows automatically on a schedule (daily builds, nightly tests).

**CRON FORMAT:**
```
┌───────────── minute (0 - 59)
│ ┌───────────── hour (0 - 23)
│ │ ┌───────────── day of month (1 - 31)
│ │ │ ┌───────────── month (1 - 12)
│ │ │ │ ┌───────────── day of week (0 - 6, Sunday=0)
│ │ │ │ │
* * * * *
```

**EXAMPLES:**
| Cron | Meaning |
|------|---------|
| `0 9 * * 1-5` | 9:00 AM UTC, Mon-Fri |
| `0 0 * * *` | Midnight UTC daily |
| `0 */6 * * *` | Every 6 hours |
| `0 0 1 * *` | First day of month |

**HOW TO RUN:**
- Runs automatically at scheduled time
- OR trigger manually (workflow has `workflow_dispatch` too)

**MCQ TIP:**
- ⚠️ Schedule runs on DEFAULT branch only
- ⚠️ Times are in UTC
- ⚠️ May be delayed during high GitHub load

---

#### Concept 6: Jobs vs Steps

**WHY THIS EXISTS:**
- **Jobs** = Run in PARALLEL on SEPARATE runners
- **Steps** = Run SEQUENTIALLY on SAME runner

**HOW TO RUN:**
1. Go to **Actions** → **"06 - Jobs vs Steps Demo"**
2. Click **"Run workflow"**

**WHAT TO OBSERVE:**
- Both jobs start at approximately the same time
- Steps within each job run one after another
- Check timestamps in logs!

**MCQ TIP:**
| Feature | Jobs | Steps |
|---------|------|-------|
| Default execution | Parallel | Sequential |
| Runner | Separate | Same |
| Share files | Need artifacts | Direct access |

---

#### Concept 7: Job Execution Order

**WHY THIS EXISTS:**
Understand that jobs run in PARALLEL by default.

**HOW TO RUN:**
1. Go to **Actions** → **"07 - Job Execution Order Demo"**
2. Click **"Run workflow"**

**WHAT TO OBSERVE:**
- All 3 jobs start at nearly the SAME time
- Total time ≈ 3 seconds (not 9 seconds!)

**MCQ TIP:**
- Without `needs:`, jobs run in parallel
- Parallel = faster but can't share data directly

---

#### Concept 8: Dependent Jobs (needs)

**WHY THIS EXISTS:**
Create job dependencies to control execution order.

**SYNTAX:**
```yaml
deploy:
  needs: build          # Single dependency
  needs: [build, test]  # Multiple dependencies
```

**HOW TO RUN:**
1. Go to **Actions** → **"08 - Dependent Jobs Demo"**
2. Click **"Run workflow"**

**WHAT TO OBSERVE:**
- Jobs run in sequence: build → test → deploy
- If build fails, test and deploy are SKIPPED

**MCQ TIP:**
- `needs` creates a dependency chain
- Dependent job waits for ALL jobs in `needs` to succeed

---

#### Concept 9: Matrix Strategy

**WHY THIS EXISTS:**
Test on multiple OS/versions without duplicating code.

**SYNTAX:**
```yaml
strategy:
  matrix:
    os: [ubuntu-latest, windows-latest]
    node: [18, 20]
```

**HOW TO RUN:**
1. Go to **Actions** → **"09 - Matrix Strategy Demo"**
2. Click **"Run workflow"**

**WHAT TO OBSERVE:**
- GitHub creates 4 jobs (2 OS × 2 Node versions)
- All 4 run in parallel
- Each shows its matrix combination

**MCQ TIP:**
- Matrix creates N × M combinations
- Use `exclude` to skip specific combinations
- Use `include` to add extra combinations

---

#### Concept 10: Runner Types

**WHY THIS EXISTS:**
Different operating systems for different needs.

**AVAILABLE RUNNERS:**

| Runner | OS | Default Shell | Docker |
|--------|-----|---------------|--------|
| `ubuntu-latest` | Linux | bash | ✅ Yes |
| `windows-latest` | Windows | pwsh | ❌ No |
| `macos-latest` | macOS | bash | ❌ No |

**HOW TO RUN:**
1. Go to **Actions** → **"10 - Runner Types Demo"**
2. Click **"Run workflow"**

**WHAT TO OBSERVE:**
- Each job runs on different OS
- Different paths, shells, and tools available

**MCQ TIP:**
- 🐳 Docker actions ONLY work on Linux runners!
- Windows uses PowerShell by default
- Check "Set up job" step for runner details

---

### 📂 SECTION B: Logging & Workflow Commands

---

#### Concept 11: Normal Logs (echo)

**WHY THIS EXISTS:**
Basic output for debugging and showing progress.

**HOW TO RUN:**
1. Go to **Actions** → **"11 - Normal Logs Demo"**
2. Click **"Run workflow"**

**WHAT TO OBSERVE:**
- All echo output appears in step logs
- Click on step to expand and see output

---

#### Concept 12: Debug Logs (::debug::)

**WHY THIS EXISTS:**
Debug messages hidden by default, only shown when enabled.

**SYNTAX:**
```bash
echo "::debug::This is a debug message"
```

**HOW TO ENABLE:**
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Name: `ACTIONS_STEP_DEBUG`
4. Value: `true`
5. Re-run the workflow

**MCQ TIP:**
- Debug logs need `ACTIONS_STEP_DEBUG` SECRET (not variable!)
- Useful for troubleshooting without cluttering normal logs

---

#### Concept 13: Warning Annotations (::warning::)

**WHY THIS EXISTS:**
Create visible warnings in GitHub UI.

**SYNTAX:**
```bash
echo "::warning::This is a warning"
echo "::warning title=Title::Message with title"
echo "::warning file=app.js,line=10::Warning at specific line"
```

**WHAT TO OBSERVE:**
- Yellow warning icons in workflow summary
- Warnings appear in "Annotations" section
- File-linked warnings show in code view

---

#### Concept 14: Error Annotations (::error::)

**WHY THIS EXISTS:**
Create visible error annotations in GitHub UI.

**⚠️ CRITICAL MCQ POINT:**
```bash
echo "::error::This is an error"  # Creates annotation, does NOT fail!
exit 1                             # THIS fails the step!
```

**WHAT TO OBSERVE:**
- Red error icons appear in Annotations
- BUT workflow still shows SUCCESS (green) unless `exit 1`

**MCQ TIP:**
- `::error::` = annotation only
- `exit 1` = actually fails the step

---

#### Concept 15: GitHub Auto-Added Steps

**WHY THIS EXISTS:**
GitHub automatically adds setup and cleanup steps.

**AUTO-ADDED STEPS:**
- **Set up job** - Prepares runner, shows runner info
- **Complete job** - Cleans up resources

**WHAT TO OBSERVE:**
- These steps appear even if your YAML is empty
- "Set up job" shows runner version, OS, and tools

**MCQ TIP:**
- Total steps = Your steps + GitHub's auto steps
- You can't remove these steps

---

### 📂 SECTION C: Environment & Variables

---

#### Concept 16-18: env Scope (Workflow, Job, Step)

**SCOPE LEVELS:**

```yaml
env:                      # WORKFLOW level - all jobs
  GLOBAL_VAR: "workflow"

jobs:
  job1:
    env:                  # JOB level - all steps in job
      JOB_VAR: "job"
    steps:
      - env:              # STEP level - this step only
          STEP_VAR: "step"
```

**MCQ TIP:**
- Workflow env: Available to ALL jobs
- Job env: Available to ALL steps in that job
- Step env: Available to THAT step only

---

#### Concept 19: env Precedence

**RULE: More specific scope wins!**

```
Step > Job > Workflow
```

**EXAMPLE:**
```yaml
env:
  VAR: "workflow"
jobs:
  job1:
    env:
      VAR: "job"       # Overrides workflow
    steps:
      - env:
          VAR: "step"  # Overrides job AND workflow
```

---

#### Concept 20: GITHUB_ENV Usage

**WHY THIS EXISTS:**
Share variables between steps in the same job.

**SYNTAX:**
```bash
echo "MY_VAR=value" >> $GITHUB_ENV
```

**⚠️ CRITICAL:**
Variable is available in SUBSEQUENT steps, NOT current step!

**EXAMPLE:**
```yaml
- name: Set variable
  run: echo "BUILD_ID=123" >> $GITHUB_ENV
  # BUILD_ID is EMPTY here!

- name: Use variable
  run: echo $BUILD_ID  # BUILD_ID is "123" here!
```

---

#### Concept 21: GITHUB_PATH Usage

**WHY THIS EXISTS:**
Add directories to PATH for subsequent steps.

**SYNTAX:**
```bash
echo "/my/custom/path" >> $GITHUB_PATH
```

**USE CASE:**
```bash
# Step 1: Install tool to custom location
mkdir -p ~/tools && cp my-tool ~/tools/

# Step 2: Add to PATH
echo "$HOME/tools" >> $GITHUB_PATH

# Step 3: Now tool is available globally
my-tool --version
```

---

#### Concept 22: Protected Default env vars

**WHY THIS EXISTS:**
GitHub protects system variables from being overwritten.

**PROTECTED PREFIXES:**
- `GITHUB_*` (GITHUB_SHA, GITHUB_ACTOR, etc.)
- `RUNNER_*` (RUNNER_OS, RUNNER_TEMP, etc.)

**WHAT HAPPENS:**
```yaml
env:
  GITHUB_SHA: "fake"  # IGNORED! Real SHA is used
  MY_VAR: "works"     # This works fine
```

---

#### Concept 23: Variables vs Hardcoded Paths

**WHY THIS EXISTS:**
Variables make workflows portable and maintainable.

**❌ BAD (Hardcoded):**
```bash
cp file.txt /home/runner/work/my-repo/
```

**✅ GOOD (Variables):**
```bash
cp file.txt $GITHUB_WORKSPACE/
```

**COMMON VARIABLES:**
| Variable | Meaning |
|----------|---------|
| `$GITHUB_WORKSPACE` | Repository checkout location |
| `$RUNNER_TEMP` | Temporary directory |
| `$HOME` | User home directory |

---

### 📂 SECTION D: Secrets & Security

---

#### Concept 24: secrets Context

**WHY THIS EXISTS:**
Store sensitive data securely (API keys, passwords).

**HOW TO CREATE SECRET:**
1. Go to **Settings** → **Secrets and variables** → **Actions**
2. Click **"New repository secret"**
3. Enter name and value
4. Click **"Add secret"**

**USAGE:**
```yaml
env:
  API_KEY: ${{ secrets.MY_API_KEY }}
```

**BUILT-IN SECRET:**
- `secrets.GITHUB_TOKEN` - Auto-created for GitHub API access

---

#### Concept 25: Secret Redaction

**WHY THIS EXISTS:**
GitHub automatically hides secrets in logs.

**WHAT HAPPENS:**
```bash
echo "My key is $API_KEY"
# Output: My key is ***
```

**MCQ TIP:**
- Redaction is automatic, no configuration needed
- Works even in complex strings

---

#### Concept 26: Secrets via Command Line (DON'T!)

**WHY THIS IS BAD:**
```bash
# ❌ BAD - Visible in process list!
./deploy.sh --password=secret123

# ✅ GOOD - Hidden from process list
PASSWORD=${{ secrets.MY_PASSWORD }} ./deploy.sh
```

**MCQ TIP:**
- Command line args visible in `ps aux`
- Environment variables are hidden

---

### 📂 SECTION E: Action Types & Metadata

---

#### Concept 27: JavaScript Action

**WHY THIS EXISTS:**
Fastest action type, runs directly on runner.

**CHARACTERISTICS:**
- Uses Node.js runtime
- No container overhead
- Works on ALL runner types

**action.yml:**
```yaml
runs:
  using: 'node20'
  main: 'index.js'
```

---

#### Concept 28: Composite Action

**WHY THIS EXISTS:**
Combine multiple steps into one reusable action using YAML.

**CHARACTERISTICS:**
- No JavaScript/Docker knowledge needed
- Written entirely in YAML
- Must specify `shell` for each run step!

**action.yml:**
```yaml
runs:
  using: 'composite'
  steps:
    - run: echo "Hello"
      shell: bash  # REQUIRED!
```

---

#### Concept 29: Docker Container Action

**WHY THIS EXISTS:**
Run in isolated Docker container with consistent environment.

**CHARACTERISTICS:**
- ⚠️ ONLY works on Linux runners!
- Slower (container build/pull time)
- Isolated from runner environment

**action.yml:**
```yaml
runs:
  using: 'docker'
  image: 'Dockerfile'
```

---

#### Concept 30: action.yml Purpose

**WHY THIS EXISTS:**
Every action MUST have `action.yml` or `action.yaml`.

**REQUIRED FIELDS:**
```yaml
name: 'My Action'
description: 'What it does'
runs:
  using: 'node20'  # or 'composite' or 'docker'
  main: 'index.js' # for node
```

---

#### Concept 31: Inputs to Actions

**DEFINING INPUTS:**
```yaml
inputs:
  name:
    description: 'Name to greet'
    required: true
    default: 'World'
```

**USING INPUTS:**
```yaml
- uses: ./my-action
  with:
    name: 'GitHub'
```

---

#### Concept 32: Outputs from Actions

**DEFINING OUTPUTS:**
```yaml
outputs:
  result:
    description: 'The result'
```

**SETTING OUTPUT (in action):**
```bash
echo "result=value" >> $GITHUB_OUTPUT
```

**USING OUTPUT:**
```yaml
- uses: ./my-action
  id: my-step

- run: echo ${{ steps.my-step.outputs.result }}
```

---

### 📂 SECTION F: Versioning & Release

---

#### Concept 33: SHA Pinning vs Tags

**SECURITY RANKING (Most → Least Secure):**

| Method | Example | Security |
|--------|---------|----------|
| Full SHA | `@b4ffde65...` | 🟢 Immutable |
| Version tag | `@v1.2.3` | 🟡 Can be moved |
| Major tag | `@v1` | 🟡 Updated often |
| Branch | `@main` | 🔴 Changes constantly |

**MCQ TIP:**
- SHA = immutable (can't be changed)
- Tags = can be moved/deleted (supply chain risk)

---

#### Concept 34: Release Strategy

**RECOMMENDED APPROACH:**
```
v1.2.3  → Exact version (immutable)
v1.2    → Latest patch of v1.2
v1      → Latest of v1.x.x (floating)
```

**FOR ACTION AUTHORS:**
```bash
git tag v1.2.3
git tag -f v1.2   # Update floating tag
git tag -f v1     # Update floating tag
git push --tags --force
```

---

### 📂 SECTION G: Artifacts & Cache

---

#### Concept 35-36: Upload & Download Artifacts

**UPLOAD:**
```yaml
- uses: actions/upload-artifact@v4
  with:
    name: my-artifact
    path: build/
```

**DOWNLOAD:**
```yaml
- uses: actions/download-artifact@v4
  with:
    name: my-artifact
    path: ./downloaded/
```

**USE CASE:**
- Share files between jobs
- Download build outputs later

---

#### Concept 37: Artifact Retention

**DEFAULT:** 90 days

**CUSTOM:**
```yaml
- uses: actions/upload-artifact@v4
  with:
    name: logs
    path: logs/
    retention-days: 5
```

---

#### Concepts 38-40: Cache

**CACHE MISS:** First run, or key changed → download fresh

**CACHE HIT:** Key matches → restore from cache (fast!)

**⚠️ CRITICAL MCQ POINT:**
Cache is saved ONLY after successful job completion!

**EXAMPLE:**
```yaml
- uses: actions/cache@v4
  with:
    path: ~/.npm
    key: npm-${{ hashFiles('package-lock.json') }}
```

---

### 📂 SECTION H: Files & Permissions

---

#### Concept 41: Executable Scripts (chmod +x)

**PROBLEM:**
```bash
./script.sh  # Permission denied!
```

**SOLUTION:**
```bash
chmod +x script.sh
./script.sh  # Works!
```

---

#### Concept 42: Docker entrypoint.sh Permission

**PROBLEM:** COPY doesn't preserve execute permission

**❌ BAD Dockerfile:**
```dockerfile
COPY entrypoint.sh /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]  # Permission denied!
```

**✅ GOOD Dockerfile:**
```dockerfile
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
```

---

### 📂 SECTION I: Environments & Approvals

---

#### Concepts 43-45: Environment Protection

**SETUP REQUIRED:**
1. Go to **Settings** → **Environments**
2. Click **"New environment"**
3. Name: `production`
4. Check **"Required reviewers"**
5. Add yourself
6. Save

**BEHAVIOR:**
- Job pauses at "Waiting" state
- Reviewer gets notification
- Must approve within 30 days (auto-fail otherwise!)

---

### 📂 SECTION J: Visibility & UI

---

#### Concept 46: Actions Tab

**FEATURES:**
- List all workflow runs
- Filter by status, branch, event, actor
- View logs and artifacts

**STATUS ICONS:**
- 🟢 Success
- 🔴 Failed
- 🟡 In progress
- ⚪ Queued
- ⭕ Cancelled

---

#### Concept 47: PR Checks Tab

**WHERE:** In Pull Request → "Checks" tab

**SHOWS:**
- All workflow jobs that ran
- Status of each check
- "Details" link to full logs

---

#### Concept 48: Filtering Failed Runs

**METHODS:**
1. Status dropdown → "Failure"
2. Search: `is:failure`
3. URL: `?query=is%3Afailure`

**USEFUL FILTERS:**
- `is:failure`
- `is:success`
- `actor:username`
- `branch:main`

---

## 💡 MCQ Tips Summary

| Topic | Key Point |
|-------|-----------|
| **Location** | Workflows MUST be in `.github/workflows/` |
| **Jobs** | Run in PARALLEL by default |
| **Steps** | Run SEQUENTIALLY always |
| **needs** | Creates job dependencies |
| **Matrix** | Creates N × M job combinations |
| **Docker actions** | Linux runners ONLY |
| **::debug::** | Needs `ACTIONS_STEP_DEBUG` secret |
| **::error::** | Does NOT fail the step! |
| **env precedence** | Step > Job > Workflow |
| **GITHUB_ENV** | Available in SUBSEQUENT steps only |
| **GITHUB_\*** | Cannot be overwritten |
| **Secrets** | Auto-redacted as `***` |
| **SHA pinning** | Most secure versioning |
| **Cache** | Saved ONLY on job SUCCESS |
| **Artifacts** | Default 90 days retention |
| **chmod +x** | Required for script execution |
| **Composite** | MUST specify `shell` |
| **Environments** | Configured in repo Settings |
| **30-day timeout** | Unapproved deployments auto-fail |

---

## 🎯 Study Checklist

- [ ] Run all 48 workflows
- [ ] Observe GitHub UI for each concept
- [ ] Read MCQ tips in YAML comments
- [ ] Create test PRs for PR-triggered workflows
- [ ] Set up secrets for secrets demos
- [ ] Create `production` environment for approval demos
- [ ] Practice filtering in Actions tab

---

## 🔧 Setup Requirements

### For Secrets Demos (24-25):
1. Settings → Secrets → Actions
2. Add: `MY_TEST_SECRET` = `any-value`
3. Add: `DEMO_API_KEY` = `secret-key-12345`

### For Debug Logs (12):
1. Settings → Secrets → Actions
2. Add: `ACTIONS_STEP_DEBUG` = `true`

### For Approval Demos (43-45):
1. Settings → Environments → New environment
2. Name: `production`
3. Enable: Required reviewers
4. Add yourself as reviewer

---

## 📄 License

This repository is for educational purposes. Feel free to use, modify, and share!

---

**Happy Learning! 🚀**

*Master GitHub Actions through hands-on practice!*
