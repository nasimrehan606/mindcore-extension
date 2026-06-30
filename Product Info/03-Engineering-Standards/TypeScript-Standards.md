# TypeScript Standards

## Document Information

**Document ID:** DOC-014

**Project:** MindCore

**Document Name:** TypeScript Standards

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

This document defines the official TypeScript standards for all MindCore applications.

These standards ensure that our codebase is type-safe, readable, maintainable, and scalable across the Website, Browser Extension, Backend, Desktop, Mobile, and AI services.

---

# Objectives

The goals of using TypeScript are to:

- Prevent runtime errors.
- Improve code readability.
- Enhance IDE support.
- Simplify refactoring.
- Improve maintainability.
- Encourage self-documenting code.

---

# TypeScript Configuration

MindCore uses:

- Strict Mode enabled
- ES Modules
- Modern ECMAScript target
- Path aliases where appropriate

The project should avoid disabling strict type checking.

---

# General Principles

Always prefer:

- Explicit types
- Strong typing
- Readability
- Simplicity

Avoid unnecessary complexity.

---

# Use Interfaces

Interfaces should describe object shapes.

Example

```ts
interface IUser {
  id: string;
  name: string;
  email: string;
}
```

Use interfaces for:

- API responses
- Component props
- User models
- Configuration objects

---

# Use Types

Use type aliases for:

- Unions
- Tuples
- Utility types
- Function signatures

Example

```ts
type Theme = "light" | "dark";
```

---

# Avoid Any

Avoid:

```ts
any
```

Instead use:

```ts
unknown
```

or define proper interfaces.

`any` should only be used when absolutely unavoidable and must include a comment explaining why.

---

# Enums

Use enums only when they improve readability.

Example

```ts
enum UserRole {
  Admin,
  Teacher,
  Student
}
```

For simple string values, union types are often preferred.

---

# Functions

Every public function should define:

- Parameter types
- Return type

Example

```ts
function calculateScore(score: number): number {
    return score;
}
```

---

# Optional Properties

Use optional properties carefully.

Example

```ts
interface IUser {
    name: string;
    avatar?: string;
}
```

Only mark properties optional when they are genuinely optional.

---

# Null and Undefined

Avoid unnecessary null values.

Prefer:

```ts
undefined
```

Use optional chaining where appropriate.

Example

```ts
user?.profile?.avatar
```

---

# Type Assertions

Avoid excessive assertions.

Bad

```ts
value as any
```

Better

```ts
value as IUser
```

Only assert when the type is known with confidence.

---

# Generics

Use generics to improve reusability.

Example

```ts
function identity<T>(value: T): T {
    return value;
}
```

Avoid overly complex generic structures.

---

# Readonly

Use readonly whenever data should not change.

Example

```ts
interface IUser {
    readonly id: string;
}
```

---

# Imports

Prefer named imports.

Good

```ts
import { Button } from "./Button";
```

Avoid wildcard imports unless necessary.

---

# File Organization

Recommended order:

1. Imports
2. Types & Interfaces
3. Constants
4. Component / Class / Function
5. Exports

---

# Error Handling

Always type caught errors safely.

Example

```ts
catch (error: unknown) {
    if (error instanceof Error) {
        console.error(error.message);
    }
}
```

---

# Utility Types

Use built-in utility types where appropriate.

Examples

- Partial
- Required
- Pick
- Omit
- Record
- Readonly

---

# Naming

Interfaces

```
IUser
IDocument
IQuiz
```

Types

```
ThemeMode
QuizDifficulty
ApiResponse
```

Enums

```
UserRole
Language
Theme
```

---

# Performance

Avoid creating unnecessary types.

Prefer reusable interfaces over duplicate definitions.

---

# Documentation

Complex types should include comments explaining their purpose.

Simple types generally do not require comments.

---

# Code Review Checklist

Before merging:

✓ No unnecessary `any`

✓ Interfaces used appropriately

✓ Functions typed

✓ Return types defined

✓ Imports organized

✓ Strict mode passes

✓ No unused types

✓ No duplicate interfaces

---

# Related Documents

- React-Standards.md
- Naming-Conventions.md
- API-Standards.md
- Folder-Structure.md

---

# Design Decisions

## D-049

### Decision

MindCore adopts strict TypeScript practices across all projects.

### Reason

Strong typing improves reliability, maintainability, and developer productivity.

### Status

Accepted

### Date

2026-06-30

---

## D-050

### Decision

The use of `any` should be avoided whenever possible.

### Reason

Using explicit types catches errors earlier and improves code quality.

### Status

Accepted

### Date

2026-06-30

---

# Version History

## Version 1.0

Initial TypeScript Standards created.

---

# Approval

**Approved By:** Pending Review

**Approval Date:** Pending