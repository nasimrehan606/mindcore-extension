# Folder Structure

## Document Information

**Document ID:** DOC-010

**Project:** MindCore

**Document Name:** Folder Structure

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

This document defines the standard folder structure used throughout the MindCore ecosystem.

A consistent structure improves readability, onboarding, scalability, and long-term maintenance.

Every MindCore project should follow these standards unless an approved architectural decision states otherwise.

---

# Engineering Principles

Folder structures should be:

- Predictable
- Organized
- Modular
- Scalable
- Easy to navigate
- Consistent across products

---

# MindCore Repository Structure

MindCore/

```
Product Info/
Website/
Extension/
Backend/
AI/
Mobile/
Desktop/
Assets/
Scripts/
Tools/
```

---

# Product Info

Contains all project documentation.

```
Product Info/

00-Project/
01-Brand/
02-Design-System/
03-Engineering-Standards/
04-UX/
05-Screens/
06-Architecture/
07-Development/
08-Testing/
09-Release/
99-Templates/
```

---

# Website

Contains the web application.

```
Website/

public/
src/
docs/
tests/
scripts/
```

---

# Website Source Structure

```
src/

assets/
components/
features/
pages/
layouts/
hooks/
contexts/
services/
api/
store/
styles/
utils/
types/
constants/
config/
routes/
lib/
```

---

# Components

Reusable UI components.

```
components/

buttons/
cards/
inputs/
navigation/
feedback/
modals/
dialogs/
forms/
tables/
charts/
```

---

# Features

Business logic grouped by feature.

```
features/

authentication/
dashboard/
document-reader/
document-summarizer/
quiz-generator/
flashcards/
chat/
settings/
profile/
```

---

# Pages

Application screens.

```
pages/

Home/
Login/
Register/
Dashboard/
Reader/
Summarizer/
Quiz/
Chat/
Settings/
```

---

# Extension

Browser Extension project.

```
Extension/

public/
src/
manifest.json
background.ts
content.ts
popup/
options/
```

---

# Backend

```
Backend/

src/
config/
controllers/
routes/
middlewares/
services/
repositories/
models/
database/
utils/
tests/
```

---

# AI

```
AI/

models/
prompts/
services/
memory/
evaluation/
datasets/
```

---

# Mobile

```
Mobile/

android/
ios/
src/
assets/
```

---

# Desktop

```
Desktop/

src/
assets/
```

---

# Assets

Shared resources.

```
Assets/

logos/
icons/
fonts/
images/
illustrations/
videos/
animations/
```

---

# Scripts

Automation scripts.

```
Scripts/

build/
deploy/
database/
maintenance/
```

---

# Tools

Development utilities.

```
Tools/

generators/
templates/
validators/
```

---

# Naming Rules

Folders use:

- lowercase
- hyphen-case

Examples

```
document-reader

quiz-generator

learning-history
```

Never use:

```
DocumentReader

QuizGenerator

New Folder
```

---

# Maximum Folder Depth

Recommended:

5 Levels

Avoid deeply nested structures unless necessary.

---

# Module Independence

Each feature should contain everything it needs.

Example

```
quiz-generator/

components/

hooks/

services/

types/

utils/

api/
```

Avoid unnecessary dependencies between features.

---

# Shared Code

Reusable code belongs in:

```
components/

hooks/

utils/

types/

services/
```

Feature-specific code should remain inside its feature folder.

---

# Scalability

New products should follow the same organizational principles.

Future additions may include:

- Browser Extension
- Desktop App
- Mobile App
- AI Services
- Admin Dashboard
- CMS

without requiring major restructuring.

---

# Related Documents

- Naming-Conventions.md
- React-Standards.md
- TypeScript-Standards.md
- Development-Workflow.md

---

# Design Decisions

## D-041

Decision

MindCore follows a modular folder structure organized by feature rather than by file type.

Reason

Feature-based organization improves scalability, ownership, and maintainability.

Status

Accepted

Date

2026-06-30

---

## D-042

Decision

Shared resources must be separated from feature-specific resources.

Reason

Encourages reusability and reduces duplication.

Status

Accepted

Date

2026-06-30

---

# Version History

## Version 1.0

Initial Folder Structure specification created.

---

# Approval

Approved By:
Pending Review

Approval Date:
Pending