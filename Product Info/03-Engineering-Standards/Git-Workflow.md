# Git Workflow

## Document Information

**Document ID:** DOC-012

**Project:** MindCore

**Document Name:** Git Workflow

**Category:** Engineering

**Version:** 1.0

**Status:** Approved

**Owner:** MindCore Team

**Author:** MindCore Team

**Created:** 2026-06-30

**Last Updated:** 2026-06-30

**Next Review:** 2026-09-30

---

# Purpose

This document defines the official Git workflow for all MindCore repositories.

A consistent Git workflow helps maintain a clean commit history, simplifies collaboration, and ensures reliable releases.

---

# Workflow Philosophy

Every change should be:

- Planned
- Reviewed
- Tested
- Documented
- Versioned

Git is not only a backup system—it is the project's history.

---

# Repository Structure

Each MindCore product has its own repository.

Examples:

- MindCore Website
- MindCore Extension
- MindCore Backend
- MindCore Mobile
- MindCore Desktop
- MindCore AI

---

# Main Branches

## main

Purpose:

Production-ready code.

Rules:

- Always stable.
- Protected from direct development.
- Only reviewed and tested code may be merged.

---

## develop

Purpose:

Active development.

Rules:

- All new features are merged here first.
- Used for integration testing.

---

# Supporting Branches

## feature/

Used for new functionality.

Examples

```
feature/quiz-generator

feature/document-reader

feature/rabi-chat

feature/settings-page
```

---

## bugfix/

Used for fixing non-critical issues.

Examples

```
bugfix/login-validation

bugfix/navbar-overflow
```

---

## hotfix/

Used for urgent production fixes.

Examples

```
hotfix/token-expiration

hotfix/upload-error
```

---

## release/

Used to prepare a release.

Examples

```
release/v1.0.0

release/v1.1.0
```

---

# Branch Workflow

```
main
 │
 ▼

develop
 │
 ├── feature/*
 ├── feature/*
 ├── bugfix/*
 ├── hotfix/*
 └── release/*
```

---

# Feature Development Process

1. Create a feature branch.

2. Develop the feature.

3. Commit regularly.

4. Test locally.

5. Update documentation if necessary.

6. Merge into develop.

7. After review, merge into main.

---

# Commit Message Format

Use:

```
type: short description
```

---

# Commit Types

Feature

```
feat:
```

Bug Fix

```
fix:
```

Documentation

```
docs:
```

Refactoring

```
refactor:
```

Style

```
style:
```

Performance

```
perf:
```

Testing

```
test:
```

Build

```
build:
```

Chore

```
chore:
```

---

# Examples

```
feat: add AI quiz generator

feat: create document upload page

fix: resolve sidebar overflow

docs: update project roadmap

refactor: simplify authentication flow

style: improve dashboard spacing

test: add login tests
```

---

# Pull Requests

Every Pull Request should include:

- Summary
- Related issue
- Screenshots (if UI changed)
- Testing completed
- Documentation updated
- Checklist completed

---

# Merge Strategy

Preferred:

```
Squash and Merge
```

Reason:

Produces a cleaner Git history.

---

# Versioning

MindCore uses Semantic Versioning.

```
MAJOR.MINOR.PATCH
```

Example:

```
1.0.0
```

---

# Tags

Every production release should receive a Git tag.

Examples

```
v0.1.0

v0.5.0

v1.0.0

v2.0.0
```

---

# Code Reviews

Before merging:

✓ Code builds successfully.

✓ Tests pass.

✓ Documentation updated.

✓ Naming conventions followed.

✓ No unnecessary files committed.

✓ No secrets exposed.

---

# Files Never Committed

Examples

```
.env

node_modules/

dist/

coverage/

*.log
```

---

# Git Ignore

Every repository must include a properly maintained `.gitignore` file.

---

# Emergency Fixes

Critical production bugs should use:

```
hotfix/*
```

After deployment:

- Merge into main.
- Merge back into develop.
- Update changelog.

---

# Best Practices

- Commit small, focused changes.
- Write meaningful commit messages.
- Pull before pushing.
- Avoid force pushes on shared branches.
- Keep branches short-lived.
- Delete merged branches.

---

# Related Documents

- Naming-Conventions.md
- Development-Workflow.md
- Changelog.md
- Code-Review-Checklist.md

---

# Design Decisions

## D-045

### Decision

MindCore follows a structured Git branching strategy.

### Reason

A structured workflow reduces merge conflicts and improves release quality.

### Status

Accepted

### Date

2026-06-30

---

## D-046

### Decision

Semantic Versioning is used for all MindCore releases.

### Reason

It provides a clear and predictable versioning system for users and developers.

### Status

Accepted

### Date

2026-06-30

---

# Version History

## Version 1.0

Initial Git Workflow created.

---

# Approval

**Approved By:** Pending Review

**Approval Date:** Pending