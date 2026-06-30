# Naming Conventions

## Document Information

**Document ID:** DOC-011

**Project:** MindCore

**Document Name:** Naming Conventions

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

This document defines the official naming conventions used throughout the MindCore ecosystem.

Consistent naming improves readability, collaboration, maintainability, and reduces confusion across all products.

These standards apply to every repository within MindCore.

---

# General Principles

Names should be:

- Clear
- Meaningful
- Consistent
- Easy to search
- Easy to pronounce
- Free of unnecessary abbreviations

Avoid vague names like:

```
data
temp
value
item
newFile
abc
test123
```

Prefer descriptive names such as:

```
quizHistory
documentSummary
userProfile
studySession
flashcardDeck
```

---

# Folder Naming

Use:

- lowercase
- hyphen-case

Examples

```
document-reader
quiz-generator
study-planner
learning-history
user-profile
```

Never use:

```
DocumentReader
QuizGenerator
My Folder
```

---

# File Naming

### React Components

Use:

PascalCase

Examples

```
Navbar.tsx
Sidebar.tsx
QuizCard.tsx
DocumentReader.tsx
SummaryPanel.tsx
```

---

### Utility Files

Use:

camelCase

Examples

```
formatDate.ts
calculateScore.ts
generateQuiz.ts
```

---

### CSS Files

Match the component name.

```
Navbar.css
Dashboard.css
QuizCard.css
```

If using CSS Modules:

```
Navbar.module.css
```

---

# React Components

Use PascalCase.

Good:

```
QuizGenerator
DocumentReader
FlashcardCard
StudyTimer
```

Bad:

```
quizgenerator
quiz_generator
QUIZ
```

---

# Variables

Use camelCase.

Good

```ts
userName
quizScore
currentQuestion
summaryText
```

Bad

```ts
User_Name
QUIZ_SCORE
data1
```

---

# Constants

Use UPPER_SNAKE_CASE.

Examples

```ts
MAX_UPLOAD_SIZE
DEFAULT_LANGUAGE
API_BASE_URL
MAX_FILE_SIZE
```

---

# Functions

Use camelCase and begin with a verb.

Examples

```ts
generateQuiz()
summarizeDocument()
uploadFile()
saveProgress()
calculateScore()
```

Avoid

```ts
quiz()
button()
functionOne()
```

---

# Boolean Variables

Start with:

- is
- has
- can
- should

Examples

```ts
isLoggedIn
hasCompletedQuiz
canUploadFile
shouldShowSidebar
```

---

# React Hooks

Start with **use**.

Examples

```ts
useAuth()
useTheme()
useQuiz()
useDocument()
```

---

# Interfaces

Use PascalCase and begin with **I**.

Examples

```ts
IUser
IQuiz
IDocument
IFlashcard
```

---

# Types

Use PascalCase.

Examples

```ts
UserRole
QuizDifficulty
ThemeMode
```

---

# Enums

Use PascalCase.

```ts
Theme
UserStatus
QuizCategory
```

Enum values:

```ts
Dark
Light
Pending
Completed
```

---

# API Endpoints

Use:

- lowercase
- kebab-case
- plural resources

Examples

```
/api/users
/api/documents
/api/quizzes
/api/flashcards
/api/history
```

Avoid

```
/api/getUsers
/api/UserList
```

---

# Database Tables

Use:

plural snake_case

Examples

```
users
documents
quiz_results
study_sessions
flashcards
```

---

# Database Columns

Use:

snake_case

Examples

```
first_name
last_login
created_at
updated_at
quiz_score
```

---

# Environment Variables

Use UPPER_SNAKE_CASE.

Examples

```
DATABASE_URL
JWT_SECRET
OPENAI_API_KEY
NODE_ENV
```

---

# Git Branches

Feature

```
feature/quiz-generator
```

Bug Fix

```
bugfix/login-error
```

Hotfix

```
hotfix/token-expiry
```

Release

```
release/v1.0.0
```

---

# Commit Messages

Format

```
type: short description
```

Examples

```
feat: add AI quiz generator

fix: resolve login validation bug

docs: update roadmap

refactor: simplify quiz logic

style: improve navbar spacing

test: add authentication tests
```

---

# Assets

Images

```
hero-banner.png
logo-gold.svg
user-avatar.png
```

Icons

```
icon-search.svg
icon-chat.svg
icon-upload.svg
```

---

# AI Prompt Files

Use descriptive names.

Examples

```
quizGeneratorPrompt.md
summaryPrompt.md
chatPrompt.md
```

---

# Related Documents

- Folder-Structure.md
- React-Standards.md
- TypeScript-Standards.md
- API-Standards.md

---

# Design Decisions

## D-043

### Decision

MindCore adopts consistent naming conventions across all repositories.

### Reason

Consistency improves readability, onboarding, and long-term maintenance.

### Status

Accepted

### Date

2026-06-30

---

## D-044

### Decision

Names should prioritize clarity over brevity.

### Reason

Descriptive names reduce ambiguity and improve collaboration.

### Status

Accepted

### Date

2026-06-30

---

# Version History

## Version 1.0

Initial Naming Conventions created.

---

# Approval

**Approved By:** Pending Review

**Approval Date:** Pending