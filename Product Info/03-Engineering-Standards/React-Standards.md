# React Standards

## Document Information

**Document ID:** DOC-013

**Project:** MindCore

**Document Name:** React Standards

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

This document defines the official React development standards for all MindCore applications.

These standards ensure that every React project—including the Website, Browser Extension, Desktop Application, and future React-based products—shares the same architecture, coding style, and best practices.

---

# Supported Version

Current Standard

- React 19+
- Vite
- TypeScript
- React Router
- Zustand

---

# Core Principles

Every React component should be:

- Reusable
- Readable
- Modular
- Accessible
- Testable
- Performance-conscious

---

# Project Structure

Example

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

# Component Rules

Each component should:

- Have a single responsibility.
- Be reusable where practical.
- Avoid unnecessary logic.
- Receive data through props.
- Avoid hardcoded values.

---

# Component Types

## UI Components

Reusable interface elements.

Examples

```
Button
Input
Card
Modal
Avatar
Badge
```

---

## Feature Components

Specific to one feature.

Examples

```
QuizGenerator
DocumentReader
SummaryPanel
ChatWindow
```

---

## Layout Components

Responsible for page structure.

Examples

```
Navbar
Sidebar
Footer
DashboardLayout
```

---

# File Structure

Simple component

```
Button/

Button.tsx

Button.module.css
```

Complex component

```
QuizCard/

QuizCard.tsx

QuizCard.module.css

QuizCard.types.ts

QuizCard.test.tsx

index.ts
```

---

# Props

Use TypeScript interfaces.

Example

```ts
interface ButtonProps {
  label: string;
  onClick: () => void;
}
```

Avoid using `any` unless absolutely necessary.

---

# State Management

Use the right tool for the job.

- Local UI state → `useState`
- Shared component state → Context API
- Global application state → Zustand
- Server state → API layer (or future React Query if adopted)

Avoid placing everything in global state.

---

# Hooks

Custom hooks should:

- Begin with `use`
- Handle one responsibility
- Be reusable
- Avoid UI rendering

Example

```
useAuth()

useTheme()

useQuiz()

useDocument()
```

---

# Routing

All routes should be centralized.

Example

```
routes/

index.tsx

protectedRoutes.ts

publicRoutes.ts
```

Protected routes should require authentication where appropriate.

---

# Styling

Preferred order

1. CSS Modules
2. Global styles for resets and themes only
3. Inline styles only when necessary

Avoid deeply nested selectors.

---

# Performance

Use:

- React.memo when beneficial
- Lazy loading for large pages
- Code splitting
- Dynamic imports
- Optimized rendering

Do not optimize prematurely—measure first.

---

# Accessibility

Every component should:

- Support keyboard navigation
- Include meaningful labels
- Use semantic HTML
- Maintain sufficient color contrast
- Provide alternative text for images

Accessibility is a requirement, not an enhancement.

---

# Error Handling

Components should:

- Display meaningful error messages
- Handle loading states
- Handle empty states gracefully
- Avoid crashing the application

---

# Forms

Use controlled components.

Validation should occur:

- On the client for user experience.
- On the server for security.

---

# API Communication

React components should not contain direct networking logic.

Instead:

```
Component
     ↓
Service
     ↓
API
```

This separation keeps components focused on presentation.

---

# Comments

Only document complex logic.

Avoid comments that repeat what the code already says.

Good

```ts
// Retry once if the access token expired.
```

Avoid

```ts
// Increment count
count++;
```

---

# Reusability

Before creating a new component, ask:

- Can an existing component be reused?
- Can this logic become a custom hook?
- Does this belong in a shared utility?

---

# Security

Never expose:

- API keys
- Secrets
- Tokens
- Sensitive business logic

Use environment variables where appropriate.

---

# Code Review Checklist

Before merging:

- Component follows naming conventions.
- No unnecessary re-renders.
- Props are typed.
- No unused imports.
- No console logs.
- Accessibility verified.
- Responsive behavior verified.
- Documentation updated if required.

---

# Related Documents

- Folder-Structure.md
- Naming-Conventions.md
- TypeScript-Standards.md
- CSS-Standards.md
- API-Standards.md

---

# Design Decisions

## D-047

### Decision

MindCore adopts a component-first React architecture.

### Reason

Reusable components improve consistency, reduce duplication, and simplify maintenance.

### Status

Accepted

### Date

2026-06-30

---

## D-048

### Decision

Business logic should remain separate from presentation components.

### Reason

Separation of concerns makes components easier to test, maintain, and reuse.

### Status

Accepted

### Date

2026-06-30

---

# Version History

## Version 1.0

Initial React Standards created.

---

# Approval

**Approved By:** Pending Review

**Approval Date:** Pending