# Universal Git Cookbook

This is a **general-purpose Git playbook** for software development, not tied to the GIDA repository. You can use it for websites, APIs, mobile apps, data projects, open-source work, and professional team development.

It covers:

- Git fundamentals
- GitHub collaboration
- Branching
- Commits
- Pull requests
- Merging and rebasing
- Undoing mistakes
- Conflicts
- Releases and tags
- Stashing
- Remotes
- Team workflows
- Troubleshooting
- Security
- CI/CD basics
- Professional habits

---

# 1. Git, GitHub, and GitHub Actions are different

These tools are related but not identical.

## Git

Git is a version-control system installed on your computer.

It tracks:

- File changes
- Commit history
- Branches
- Merges
- Tags
- Previous versions

Git works locally and does not require GitHub.

## GitHub

GitHub is a website that hosts Git repositories.

It provides:

- Remote repositories
- Pull requests
- Code reviews
- Issues
- Project boards
- Permissions
- Releases
- Collaboration tools

## GitHub Actions

GitHub Actions is an automation system that can:

- Run tests
- Check formatting
- Build projects
- Deploy applications
- Publish packages
- Scan for security problems

The relationship is:

```text
Git = version control
GitHub = online collaboration and repository hosting
GitHub Actions = automation
```

---

# 2. The Git mental model

Git uses several important areas.

```text
Working directory
       │
       │ git add
       ▼
Staging area
       │
       │ git commit
       ▼
Local repository
       │
       │ git push
       ▼
Remote repository on GitHub
```

## Working directory

The files you currently see and edit.

## Staging area

The changes selected for the next commit.

## Local repository

The Git history stored on your computer.

## Remote repository

The copy stored on GitHub.

A typical workflow is:

```bash
# See changes
git status

# Select changes
git add file.txt

# Save a checkpoint
git commit -m "Update file"

# Upload commits
git push
```

---

# 3. Install and configure Git

Check whether Git is installed:

```bash
git --version
```

Example:

```text
git version 2.45.1
```

Configure your name:

```bash
git config --global user.name "Your Name"
```

Configure your email:

```bash
git config --global user.email "you@example.com"
```

Check the values:

```bash
git config --global user.name
git config --global user.email
```

View all configuration:

```bash
git config --global --list
```

Set the default initial branch name:

```bash
git config --global init.defaultBranch main
```

Set a useful default editor. For VS Code:

```bash
git config --global core.editor "code --wait"
```

Enable colored output:

```bash
git config --global color.ui auto
```

Check where Git reads configuration from:

```bash
git config --list --show-origin
```

Git configuration levels:

```text
--system   All users on the computer
--global   Your user account
--local    Only the current repository
```

Example of repository-specific configuration:

```bash
git config user.name "Work Name"
git config user.email "work@example.com"
```

The local configuration overrides the global configuration for that repository.

---

# 4. Create a new repository

To create a Git repository in an existing folder:

```bash
cd path/to/project
git init
```

Check the result:

```bash
git status
```

Create a basic `.gitignore` file:

```bash
touch .gitignore
```

On PowerShell:

```powershell
New-Item .gitignore
```

Add files:

```bash
git add .
```

Create the first commit:

```bash
git commit -m "Initial commit"
```

Rename the current branch to `main`:

```bash
git branch -M main
```

Add a GitHub remote:

```bash
git remote add origin https://github.com/OWNER/REPOSITORY.git
```

Push the branch:

```bash
git push -u origin main
```

The `-u` option sets the upstream relationship so later pushes can use:

```bash
git push
```

---

# 5. Clone an existing repository

Clone using HTTPS:

```bash
git clone https://github.com/OWNER/REPOSITORY.git
```

Clone using SSH:

```bash
git clone git@github.com:OWNER/REPOSITORY.git
```

Clone into a custom folder:

```bash
git clone https://github.com/OWNER/REPOSITORY.git my-project
```

Enter the project:

```bash
cd my-project
```

Open in VS Code:

```bash
code .
```

Confirm the repository:

```bash
git remote -v
git status
```

---

# 6. Understand repository status

Run this frequently:

```bash
git status
```

It tells you:

- Current branch
- Whether it is ahead or behind the remote
- Modified files
- Untracked files
- Staged files
- Merge or rebase problems

Typical output:

```text
On branch feature/login
Your branch is up to date with 'origin/feature/login'.

Changes not staged for commit:
  modified:   src/login.js

Untracked files:
  test/login.test.js
```

Short format:

```bash
git status --short
```

Example:

```text
 M src/login.js
?? test/login.test.js
```

The first column describes the staging area. The second describes the working directory.

Common symbols:

```text
 M file       Modified but not staged
M  file       Modified and staged
A  file       Added and staged
 D file       Deleted but not staged
D  file       Deleted and staged
?? file       Untracked file
```

---

# 7. Remotes

List remotes:

```bash
git remote -v
```

Add a remote:

```bash
git remote add origin URL
```

Change a remote URL:

```bash
git remote set-url origin URL
```

Remove a remote:

```bash
git remote remove origin
```

Show detailed remote information:

```bash
git remote show origin
```

The usual remote names are:

```text
origin   Your main repository
upstream The original repository when working from a fork
```

---

# 8. Fetch, pull, and push

These commands are often confused.

## `git fetch`

Downloads remote information but does not change your working files.

```bash
git fetch origin
```

Fetch all remotes:

```bash
git fetch --all
```

Use fetch when you want to inspect remote changes safely.

## `git pull`

Fetches remote changes and integrates them into your current branch.

```bash
git pull
```

Equivalent conceptually to:

```bash
git fetch
git merge
```

A safer version that refuses to create an automatic merge commit:

```bash
git pull --ff-only
```

## `git push`

Uploads local commits to a remote:

```bash
git push
```

Push a specific branch:

```bash
git push origin feature/login
```

Push and set upstream:

```bash
git push -u origin feature/login
```

Delete a remote branch:

```bash
git push origin --delete feature/login
```

---

# 9. Branches

A branch is a movable label pointing to a commit.

Branches let you work on different tasks independently.

List local branches:

```bash
git branch
```

List remote branches:

```bash
git branch -r
```

List all branches:

```bash
git branch -a
```

Create a branch:

```bash
git branch feature/login
```

Switch branches:

```bash
git switch feature/login
```

Create and switch:

```bash
git switch -c feature/login
```

Older equivalent:

```bash
git checkout -b feature/login
```

Rename the current branch:

```bash
git branch -m new-name
```

Delete a local branch after it has been merged:

```bash
git branch -d feature/login
```

Force-delete a local branch:

```bash
git branch -D feature/login
```

Use `-D` only when you are certain the branch can be discarded.

Delete a remote branch:

```bash
git push origin --delete feature/login
```

Clean up stale remote-tracking branches:

```bash
git fetch --prune
```

---

# 10. Professional branch naming

Use names that describe the task.

Feature:

```text
feature/user-profile
feature/payment-page
```

Bug fix:

```text
fix/incorrect-total
fix/mobile-menu
```

Documentation:

```text
docs/setup-guide
docs/api-examples
```

Maintenance:

```text
chore/update-dependencies
chore/cleanup-config
```

Refactoring:

```text
refactor/auth-service
refactor/product-model
```

Recommended format:

```text
category/short-description
```

Avoid:

```text
test
branch1
changes
new
john-work
```

---

# 11. A standard professional workflow

Start from the latest primary branch:

```bash
git switch main
git pull --ff-only origin main
```

Create a task branch:

```bash
git switch -c feature/user-profile
```

Work on the code.

Inspect changes:

```bash
git status
git diff
```

Run tests and checks.

Stage intentional files:

```bash
git add src/profile.js
git add test/profile.test.js
```

Review the staged changes:

```bash
git diff --staged
```

Commit:

```bash
git commit -m "Add user profile page"
```

Push:

```bash
git push -u origin feature/user-profile
```

Open a pull request.

After review, make additional commits if needed:

```bash
git add .
git commit -m "Address profile review comments"
git push
```

After the pull request is merged:

```bash
git switch main
git pull --ff-only origin main
git branch -d feature/user-profile
```

---

# 12. Staging changes

Stage one file:

```bash
git add file.txt
```

Stage several files:

```bash
git add file1.txt file2.txt
```

Stage a directory:

```bash
git add src/
```

Stage all changes:

```bash
git add .
```

Stage all tracked modifications and deletions:

```bash
git add -u
```

Interactively select portions of a file:

```bash
git add -p
```

Interactive staging lets you choose individual sections instead of staging the entire file.

This is valuable when one file contains multiple unrelated changes.

Unstage a file:

```bash
git restore --staged file.txt
```

Unstage everything:

```bash
git restore --staged .
```

The changes remain in your working directory.

---

# 13. Reviewing changes

See unstaged changes:

```bash
git diff
```

See staged changes:

```bash
git diff --staged
```

Compare two branches:

```bash
git diff main..feature/login
```

Show only file names:

```bash
git diff --name-only main..feature/login
```

Show statistics:

```bash
git diff --stat
```

Compare your branch with its common ancestor against `main`:

```bash
git diff main...HEAD
```

This is often the best command for reviewing what your branch adds.

---

# 14. Commits

A commit is a permanent checkpoint in local Git history.

Create a commit:

```bash
git commit -m "Add login form"
```

Open your editor for a detailed message:

```bash
git commit
```

Stage and commit tracked modifications in one command:

```bash
git commit -am "Fix validation message"
```

This does not include untracked files.

Amend the latest commit:

```bash
git commit --amend
```

Change only the commit message:

```bash
git commit --amend -m "Improve login validation"
```

Only amend commits that have not been shared, unless your team explicitly agrees.

View the latest commit:

```bash
git show
```

View a specific commit:

```bash
git show COMMIT_ID
```

Show commit statistics:

```bash
git show --stat COMMIT_ID
```

---

# 15. Writing good commit messages

A commit should represent one logical change.

Good:

```text
Add password visibility toggle
Fix incorrect cart total
Update API error handling
Document local development setup
```

Poor:

```text
Changes
Fix stuff
Final
Work
Update files
```

A useful commit format is:

```text
Verb + object
```

Common verbs:

```text
Add
Fix
Update
Remove
Refactor
Improve
Document
Test
Configure
```

For teams using Conventional Commits:

```text
feat: add password reset flow
fix: prevent duplicate form submission
docs: update installation steps
test: cover empty cart behavior
refactor: simplify token validation
chore: update dependencies
```

---

# 16. Commit size

Avoid both extremes.

Too large:

```text
Implement entire application
```

Too small:

```text
Add one character
Fix one typo
```

A good commit should be:

- Focused
- Understandable
- Testable
- Reversible

A reviewer should be able to explain what the commit does from its message and diff.

---

# 17. Viewing history

Compact history:

```bash
git log --oneline
```

Recent history:

```bash
git log --oneline -10
```

Graph view:

```bash
git log --oneline --graph --decorate --all
```

Detailed history:

```bash
git log
```

History for one file:

```bash
git log -- path/to/file
```

Show who changed each line:

```bash
git blame path/to/file
```

Search commit messages:

```bash
git log --grep="authentication"
```

Search all changes for text:

```bash
git log -S "someText" -- path/to/file
```

Search using a regular expression:

```bash
git log -G "pattern" -- path/to/file
```

Find the commit that introduced a bug:

```bash
git bisect start
git bisect bad
git bisect good KNOWN_GOOD_COMMIT
```

Git will check out intermediate commits. Test each one and run:

```bash
git bisect good
```

or:

```bash
git bisect bad
```

Finish:

```bash
git bisect reset
```

---

# 18. Merge

Merge combines histories.

Switch to the branch that should receive the changes:

```bash
git switch main
```

Merge another branch:

```bash
git merge feature/login
```

Typical professional use:

```bash
git switch main
git pull --ff-only origin main
git merge feature/login
git push
```

A fast-forward merge moves the branch pointer forward without creating a new merge commit.

A three-way merge creates a merge commit when branches have diverged.

Abort an active merge:

```bash
git merge --abort
```

---

# 19. Rebase

Rebase moves your commits on top of a new base.

Example:

```bash
git switch feature/login
git rebase main
```

Conceptually:

```text
Before:

main:     A---B---C
               \
feature:        D---E

After rebase:

main:     A---B---C
                   \
feature:            D'---E'
```

Rebase creates new commit IDs. Do not rebase shared branches without agreement.

Update a feature branch:

```bash
git fetch origin
git switch main
git pull --ff-only origin main
git switch feature/login
git rebase main
```

If the branch was already pushed, update it with:

```bash
git push --force-with-lease
```

Prefer `--force-with-lease` over `--force`.

Abort a rebase:

```bash
git rebase --abort
```

Continue after resolving conflicts:

```bash
git add resolved-file.js
git rebase --continue
```

Skip the current commit:

```bash
git rebase --skip
```

---

# 20. Merge versus rebase

## Merge

Advantages:

- Preserves the original history
- Safer for shared branches
- Easier for beginners
- Does not rewrite existing commits

Disadvantages:

- Can create merge commits
- History may become more complicated

## Rebase

Advantages:

- Produces a cleaner linear history
- Makes feature branches easier to review
- Avoids unnecessary merge commits

Disadvantages:

- Rewrites commit history
- Requires force-pushing after a public rebase
- Risky on shared branches

General rule:

```text
Rebase your private feature branch.
Do not rebase shared public branches.
```

---

# 21. Merge conflicts

A conflict occurs when Git cannot automatically decide which change to keep.

Example conflict:

```text
<<<<<<< HEAD
Current branch version
=======
Incoming branch version
>>>>>>> feature/login
```

The conflict markers mean:

```text
<<<<<<< HEAD
Your current branch changes
=======
The incoming branch changes
>>>>>>> branch-name
```

Resolve the file manually:

1. Decide which content should remain.
2. Remove all conflict markers.
3. Save the file.
4. Test the result.
5. Stage the resolved file.

```bash
git add path/to/resolved-file
```

For a merge, complete the merge:

```bash
git commit
```

For a rebase, continue:

```bash
git rebase --continue
```

See unresolved files:

```bash
git status
```

Abort a merge:

```bash
git merge --abort
```

Abort a rebase:

```bash
git rebase --abort
```

Conflict prevention:

- Pull before starting work
- Keep branches short-lived
- Avoid editing the same lines as teammates
- Communicate about large changes
- Make focused commits

---

# 22. Stashing temporary work

A stash temporarily stores uncommitted changes.

Save changes:

```bash
git stash
```

Save with a description:

```bash
git stash push -m "Work in progress on login form"
```

Include untracked files:

```bash
git stash push -u -m "Temporary work"
```

List stashes:

```bash
git stash list
```

Apply the latest stash and keep it:

```bash
git stash apply
```

Apply a specific stash:

```bash
git stash apply stash@{1}
```

Apply and remove the latest stash:

```bash
git stash pop
```

Delete a stash:

```bash
git stash drop stash@{0}
```

Delete all stashes:

```bash
git stash clear
```

Use stash when:

- You need to switch branches temporarily
- You have unfinished work
- You need to update your branch
- You need to test another branch

Do not use stash as a permanent storage solution. A temporary commit on a private branch is often clearer.

---

# 23. Undoing changes safely

Git has several types of “undo.” Choose carefully.

## Discard unstaged changes in one file

```bash
git restore file.txt
```

This permanently discards uncommitted changes in that file.

## Discard all unstaged changes

```bash
git restore .
```

Use with caution.

## Unstage a file

```bash
git restore --staged file.txt
```

This keeps your file changes.

## Undo the latest commit but keep changes staged

```bash
git reset --soft HEAD~1
```

## Undo the latest commit and keep changes unstaged

```bash
git reset HEAD~1
```

## Undo the latest commit and discard changes

```bash
git reset --hard HEAD~1
```

This can permanently destroy work.

## Revert a shared commit

```bash
git revert COMMIT_ID
```

This creates a new commit that reverses the old one. It is usually the safest way to undo something already pushed.

## Recover lost commits

View Git’s reference log:

```bash
git reflog
```

Find the desired commit, then create a recovery branch:

```bash
git switch -c recovery-branch COMMIT_ID
```

`reflog` is one of Git’s most useful recovery tools.

---

# 24. Reset versus revert

## `git reset`

Moves a branch pointer backward.

Use mostly for private, unpublished work.

```bash
git reset --soft HEAD~1
git reset --mixed HEAD~1
git reset --hard HEAD~1
```

## `git revert`

Creates a new commit that reverses an existing commit.

Use for shared or public history.

```bash
git revert COMMIT_ID
```

Practical rule:

```text
Not pushed yet: reset may be appropriate.
Already pushed/shared: prefer revert.
```

---

# 25. Tags and releases

Tags identify important commits.

Create a lightweight tag:

```bash
git tag v1.0.0
```

Create an annotated tag:

```bash
git tag -a v1.0.0 -m "Release version 1.0.0"
```

List tags:

```bash
git tag
```

Inspect a tag:

```bash
git show v1.0.0
```

Push one tag:

```bash
git push origin v1.0.0
```

Push all tags:

```bash
git push origin --tags
```

Delete a local tag:

```bash
git tag -d v1.0.0
```

Delete a remote tag:

```bash
git push origin --delete v1.0.0
```

Common version format:

```text
MAJOR.MINOR.PATCH
```

Examples:

```text
1.0.0
1.1.0
1.1.1
```

Usually:

- MAJOR: incompatible changes
- MINOR: new backward-compatible features
- PATCH: bug fixes

---

# 26. `.gitignore`

A `.gitignore` file tells Git which files not to track.

Example:

```gitignore
# Dependencies
node_modules/

# Build output
dist/
build/

# Environment files
.env
.env.*
!.env.example

# Logs
*.log

# Operating system files
.DS_Store
Thumbs.db

# IDE files
.vscode/*
!.vscode/extensions.json
!.vscode/settings.json

# Coverage
coverage/
```

Check whether Git ignores a file:

```bash
git check-ignore -v path/to/file
```

Important: `.gitignore` does not remove a file already tracked by Git.

To stop tracking a file while keeping it locally:

```bash
git rm --cached .env
git commit -m "Stop tracking environment file"
```

If the file contained a secret, removing it from the latest commit is not enough. You must rotate the secret and possibly clean the repository history.

---

# 27. Protecting secrets

Never commit:

- Passwords
- API keys
- Access tokens
- Private keys
- Database credentials
- Cloud credentials
- Production configuration

Use environment variables:

```text
DATABASE_URL=...
API_KEY=...
```

Commit a safe example file instead:

```text
.env.example
```

Example:

```env
DATABASE_URL=replace-me
API_KEY=replace-me
```

If a secret is accidentally committed:

1. Revoke or rotate the secret immediately.
2. Inform the project owner.
3. Remove the secret from the working tree.
4. Use `git revert` or history rewriting as appropriate.
5. Check whether the secret was exposed in forks, caches, or logs.

A secret is considered compromised once it has been pushed, even if the commit is later deleted.

---

# 28. Working with forks

A fork is your GitHub copy of someone else’s repository.

Typical setup:

```bash
git clone https://github.com/YOUR-USERNAME/project.git
cd project
git remote -v
```

Rename your fork remote to `origin` and add the original project as `upstream`:

```bash
git remote rename origin upstream
git remote add origin https://github.com/YOUR-USERNAME/project.git
```

Fetch both:

```bash
git fetch --all
```

Update your local primary branch from the original project:

```bash
git switch main
git fetch upstream
git merge --ff-only upstream/main
git push origin main
```

Create work branches from your updated `main`:

```bash
git switch -c feature/my-change
```

Push to your fork:

```bash
git push -u origin feature/my-change
```

Then open a pull request from your fork into the original repository.

---

# 29. Pull requests

A pull request is a review and integration process, not just a file upload.

A good pull request includes:

```markdown
## Summary

- Added ...
- Changed ...

## Why

This change is needed because ...

## Testing

- Ran ...
- Tested ...
- Verified ...

## Risks or notes

- ...
```

Before opening one:

```bash
git status
git diff main...HEAD
git log main..HEAD --oneline
```

Confirm:

- Correct base branch
- Correct feature branch
- Only related files changed
- Tests pass
- No secrets included
- Documentation updated if needed

After review, push additional commits to the same branch:

```bash
git push
```

The pull request updates automatically.

---

# 30. Code review habits

When reviewing code:

- Focus on correctness first
- Check edge cases
- Check security implications
- Check tests
- Check maintainability
- Avoid unnecessary personal preferences
- Explain why a change is needed
- Suggest alternatives when useful

Good review comment:

```text
Could this handle an empty response? The current code calls `.map()` before checking whether the API returned an array.
```

Poor review comment:

```text
This is wrong.
```

Keep reviews about the code, not the person.

---

# 31. GitHub Actions and CI/CD basics

A workflow file normally lives in:

```text
.github/workflows/
```

Example workflow:

```yaml
name: Test

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - name: Check out repository
        uses: actions/checkout@v4

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 20

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test
```

## CI

Continuous Integration runs checks when code changes.

Typical triggers:

```yaml
on:
  push:
  pull_request:
```

Typical checks:

- Unit tests
- Integration tests
- Linting
- Formatting
- Type checking
- Security scans
- Build verification

## CD

Continuous Delivery or Deployment publishes code automatically.

Examples:

- Deploying a static site
- Publishing a package
- Deploying a container
- Updating a cloud service

A professional workflow is often:

```text
Create branch
    ↓
Push branch
    ↓
Open pull request
    ↓
CI runs automatically
    ↓
Review
    ↓
Merge
    ↓
Deployment runs
```

Never assume a workflow exists. Inspect:

```bash
Get-ChildItem .github/workflows
```

or:

```bash
ls .github/workflows
```

---

# 32. Testing before committing

The exact commands depend on the project.

Common commands:

```bash
npm test
npm run lint
npm run build
pytest
go test ./...
mvn test
dotnet test
```

For a static HTML project, test manually and optionally use tools such as:

```bash
npx html-validate index.html
npx stylelint "**/*.css"
npx eslint "**/*.js"
```

Do not run commands blindly in an unfamiliar repository. First inspect:

```bash
Get-Content package.json
```

or:

```bash
cat package.json
```

Look for documented commands in:

```text
README.md
package.json
Makefile
pyproject.toml
Dockerfile
.github/workflows/
```

---

# 33. Git hooks

Git hooks run scripts at certain Git events.

Examples:

```text
pre-commit
commit-msg
pre-push
```

They can check:

- Formatting
- Tests
- Commit messages
- Secret exposure
- Linting

Hooks are stored locally in:

```text
.git/hooks/
```

They are not automatically shared unless the project configures a shared hook system.

Popular tools include:

- Husky
- pre-commit
- lint-staged
- commitlint

Do not bypass hooks casually:

```bash
git commit --no-verify
```

Use that only when you understand why the hook fails and have an alternative check.

---

# 34. Large files and Git LFS

Git is not ideal for large binary files.

Consider Git LFS for:

- Videos
- Design files
- Large datasets
- High-resolution images
- Compiled binaries

Install Git LFS:

```bash
git lfs install
```

Track a file type:

```bash
git lfs track "*.psd"
```

Track the generated attributes file:

```bash
git add .gitattributes
git commit -m "Track design files with Git LFS"
```

Check tracked LFS files:

```bash
git lfs ls-files
```

---

# 35. Submodules

A submodule embeds one Git repository inside another.

Add a submodule:

```bash
git submodule add https://github.com/OWNER/DEPENDENCY.git path/to/dependency
```

Clone a repository with submodules:

```bash
git clone --recurse-submodules URL
```

Initialize submodules after a normal clone:

```bash
git submodule update --init --recursive
```

Update submodules:

```bash
git submodule update --remote
```

Submodules add complexity. Use them only when the project specifically requires them.

---

# 36. Worktrees

A worktree lets you check out multiple branches into separate folders using one Git repository.

Create a worktree:

```bash
git worktree add ../project-hotfix hotfix/urgent-fix
```

List worktrees:

```bash
git worktree list
```

Remove a worktree:

```bash
git worktree remove ../project-hotfix
```

Worktrees are useful when:

- You need to keep current work untouched
- You need to inspect another branch
- You must prepare an urgent hotfix
- You want separate VS Code windows

---

# 37. Useful inspection commands

Show the current commit:

```bash
git rev-parse HEAD
```

Show the current branch:

```bash
git branch --show-current
```

Show the repository root:

```bash
git rev-parse --show-toplevel
```

Check whether the working tree is clean:

```bash
git diff --quiet
```

Show tracked files:

```bash
git ls-files
```

Find files changed in the last commit:

```bash
git diff-tree --no-commit-id --name-only -r HEAD
```

Show branches containing a commit:

```bash
git branch --contains COMMIT_ID
```

Show ancestors of a branch:

```bash
git log main..feature/login --oneline
```

Show commits in `main` that are not in your branch:

```bash
git log feature/login..main --oneline
```

---

# 38. Common errors

## “Not a git repository”

You are not inside the repository folder.

Check your location:

```bash
pwd
```

PowerShell:

```powershell
Get-Location
```

Move into the correct folder:

```bash
cd path/to/project
```

## “Your branch is behind”

Update your branch:

```bash
git pull
```

For a primary branch:

```bash
git pull --ff-only origin main
```

## “Rejected because the remote contains work”

The remote has commits that you do not have locally.

Usually:

```bash
git pull --rebase
git push
```

Understand the resulting changes before continuing.

## “Permission denied”

Possible causes:

- Incorrect GitHub account
- Missing repository permissions
- Incorrect SSH key
- Expired token
- Wrong remote URL

Inspect the remote:

```bash
git remote -v
```

## “Merge conflict”

Run:

```bash
git status
```

Resolve the marked files, then:

```bash
git add resolved-file
git commit
```

or, during rebase:

```bash
git rebase --continue
```

## “Detached HEAD”

You checked out a commit rather than a branch.

Check:

```bash
git status
```

Create a branch to preserve work:

```bash
git switch -c recovery-work
```

Return to a normal branch:

```bash
git switch main
```

## “Everything up-to-date”

Git has no new local commits to upload. Check:

```bash
git status
git log --oneline -5
```

---

# 39. Git safety rules

Before destructive commands, inspect:

```bash
git status
git diff
git log --oneline --decorate --graph -10
```

Be especially careful with:

```bash
git reset --hard
git clean -fd
git branch -D
git push --force
git push --force-with-lease
git restore .
git checkout .
```

## Preview untracked files before deleting them

```bash
git clean -n
```

Delete untracked files:

```bash
git clean -f
```

Delete untracked files and directories:

```bash
git clean -fd
```

Never run destructive commands just because a tutorial shows them. Understand what will be deleted first.

---

# 40. A universal troubleshooting sequence

When something goes wrong, run:

```bash
git status
git branch --show-current
git remote -v
git log --oneline --decorate --graph -10
git diff
git diff --staged
```

Then ask:

1. What branch am I on?
2. Did I commit the work?
3. Did I push the work?
4. Am I ahead or behind the remote?
5. Is a merge or rebase active?
6. Are the changes staged?
7. Is the remote correct?
8. Can I recover the work from `git reflog`?

Do not immediately run `reset --hard` or force-push.

---

# 41. Recommended universal workflow

For most professional tasks:

```bash
# 1. Start clean
git status

# 2. Update the primary branch
git switch main
git pull --ff-only origin main

# 3. Create a task branch
git switch -c feature/short-description

# 4. Edit the code

# 5. Inspect changes
git status
git diff

# 6. Run project checks
# Example:
npm test
npm run lint

# 7. Stage intentional files
git add path/to/file1 path/to/file2

# 8. Review staged changes
git diff --staged

# 9. Commit
git commit -m "Add meaningful change"

# 10. Push the branch
git push -u origin feature/short-description

# 11. Open a pull request

# 12. After merge, update local main
git switch main
git pull --ff-only origin main

# 13. Delete the finished local branch
git branch -d feature/short-description
```

---

# 42. Beginner learning plan

## Stage 1: Basic commands

Learn:

```bash
git status
git add
git commit
git log
git diff
git push
git pull
```

## Stage 2: Branches

Learn:

```bash
git branch
git switch
git fetch
git merge
```

## Stage 3: Recovery

Learn:

```bash
git restore
git reset
git revert
git reflog
```

## Stage 4: Collaboration

Learn:

- Pull requests
- Code reviews
- Forks
- Remotes
- Conflict resolution

## Stage 5: Advanced workflows

Learn:

- Rebase
- Interactive rebase
- Tags
- Releases
- Worktrees
- Hooks
- GitHub Actions
- Git LFS

---

# 43. Professional Git principles

The most valuable habits are not memorizing commands. They are:

## Keep commits understandable

Each commit should have a clear purpose.

## Keep branches short-lived

Small branches reduce conflicts and review time.

## Keep `main` stable

Do not push untested work directly to the primary branch.

## Review before committing

Use:

```bash
git diff
git diff --staged
```

## Test before opening a pull request

A pull request should be ready for review, not a backup of unfinished work.

## Never hide mistakes

Git history helps teams understand what happened. Communicate openly when something goes wrong.

## Protect secrets

A secret accidentally pushed to GitHub should be considered exposed.

## Prefer reversible operations

Use `git revert` for shared history and keep backups before risky operations.

---

# 44. The five commands to remember first

If you are overwhelmed, begin with these:

```bash
git status
git switch -c feature/my-task
git diff
git add .
git commit -m "Describe the change"
```

Then learn:

```bash
git push -u origin feature/my-task
```

And after the pull request is merged:

```bash
git switch main
git pull --ff-only origin main
```

The universal pattern is:

```text
Update → Branch → Edit → Inspect → Test → Stage → Commit → Push → Review → Merge
```

That workflow applies to almost every Git-based professional project.
