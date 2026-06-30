# MindCore Design Language Registry (MDL Registry)

**Project:** MindCore

**Tagline:** Where Learning Meets Intelligence.

**Version:** 1.0

**Status:** Active

**Category:** Design System

**Author:** MindCore Team

**Created:** 2026-06-30

**Last Updated:** 2026-06-30

---

# Purpose

The MindCore Design Language Registry (MDL Registry) is the official inventory of every reusable component, layout, screen, animation, and design asset within the MindCore ecosystem.

It acts as the single source of truth for designers, developers, testers, and future contributors.

Every reusable component must be registered here before it is considered part of the official design system.

---

# Registry Rules

Every component must have:

✓ Unique ID

✓ Official Name

✓ Category

✓ Version

✓ Status

✓ Owner

✓ Documentation

✓ Used In

✓ Last Updated

---

# Status Types

Draft

The component is still being designed.

---

Review

Awaiting approval.

---

Approved

Ready for development.

---

Implemented

Available in production.

---

Deprecated

No longer recommended.

---

Archived

Removed from the design system.

---

# Registry

| ID | Component | Category | Version | Status | Documentation | Used In |
|-----|-----------|----------|----------|----------|----------------|----------|
| BTN-001 | Primary Button | Button | 1.0 | Approved | BTN-001.md | — |
| BTN-002 | Secondary Button | Button | 1.0 | Draft | BTN-002.md | — |
| BTN-003 | Ghost Button | Button | 1.0 | Draft | BTN-003.md | — |
| BTN-004 | Icon Button | Button | 1.0 | Draft | BTN-004.md | — |
| BTN-005 | Floating Action Button | Button | 1.0 | Draft | BTN-005.md | — |
| BTN-006 | AI Action Button | Button | 1.0 | Draft | BTN-006.md | — |

| CARD-001 | Standard Card | Card | 1.0 | Draft | CARD-001.md | — |
| CARD-002 | Feature Card | Card | 1.0 | Draft | CARD-002.md | — |
| CARD-003 | AI Response Card | Card | 1.0 | Draft | CARD-003.md | — |
| CARD-004 | Statistics Card | Card | 1.0 | Draft | CARD-004.md | — |
| CARD-005 | Document Card | Card | 1.0 | Draft | CARD-005.md | — |
| CARD-006 | Quiz Card | Card | 1.0 | Draft | CARD-006.md | — |
| CARD-007 | Flashcard | Card | 1.0 | Draft | CARD-007.md | — |

| INP-001 | Text Input | Input | 1.0 | Draft | INP-001.md | — |
| INP-002 | Search Input | Input | 1.0 | Draft | INP-002.md | — |
| INP-003 | Password Input | Input | 1.0 | Draft | INP-003.md | — |
| INP-004 | Upload Input | Input | 1.0 | Draft | INP-004.md | — |
| INP-005 | AI Prompt Input | Input | 1.0 | Draft | INP-005.md | — |

| NAV-001 | Top Navigation | Navigation | 1.0 | Draft | NAV-001.md | All Screens |
| NAV-002 | Sidebar | Navigation | 1.0 | Draft | NAV-002.md | Dashboard |
| NAV-003 | Bottom Navigation | Navigation | 1.0 | Draft | NAV-003.md | Mobile |
| NAV-004 | Breadcrumb | Navigation | 1.0 | Draft | NAV-004.md | Dashboard |
| NAV-005 | Tabs | Navigation | 1.0 | Draft | NAV-005.md | Reader |

| AI-001 | Chat Bubble | AI | 1.0 | Draft | AI-001.md | Chat |
| AI-002 | Thinking Animation | AI | 1.0 | Draft | AI-002.md | Chat |
| AI-003 | Typing Indicator | AI | 1.0 | Draft | AI-003.md | Chat |
| AI-004 | Response Card | AI | 1.0 | Draft | AI-004.md | Chat |
| AI-005 | Suggestion Card | AI | 1.0 | Draft | AI-005.md | Chat |
| AI-006 | Rabi Avatar | AI | 1.0 | Draft | AI-006.md | Global |

| SCR-001 | Splash | Screen | 1.0 | Planned | SCR-001.md | — |
| SCR-002 | Login | Screen | 1.0 | Planned | SCR-002.md | — |
| SCR-003 | Home | Screen | 1.0 | Planned | SCR-003.md | — |
| SCR-004 | Chat | Screen | 1.0 | Planned | SCR-004.md | — |
| SCR-005 | Document Reader | Screen | 1.0 | Planned | SCR-005.md | — |
| SCR-006 | AI Summarizer | Screen | 1.0 | Planned | SCR-006.md | — |
| SCR-007 | AI Quiz Generator | Screen | 1.0 | Planned | SCR-007.md | — |
| SCR-008 | Flashcards | Screen | 1.0 | Planned | SCR-008.md | — |
| SCR-009 | History | Screen | 1.0 | Planned | SCR-009.md | — |
| SCR-010 | Settings | Screen | 1.0 | Planned | SCR-010.md | — |

---

# Component Lifecycle

Idea

↓

Draft

↓

Review

↓

Approved

↓

Implemented

↓

Maintained

↓

Deprecated (if required)

---

# Versioning

Major Version

Breaking changes.

Example

1.0 → 2.0

---

Minor Version

New features.

Example

1.2 → 1.3

---

Patch

Bug fixes.

Example

1.3.0 → 1.3.1

---

# Design Decisions

## D-025

Decision

Every reusable design component must be registered in the MDL Registry.

Reason

Creates a single source of truth for the entire product.

Status

Accepted

Date

2026-06-30

---

## D-026

Decision

No component may be used in production unless it has an MDL ID and documentation.

Reason

Ensures consistency and maintainability.

Status

Accepted

Date

2026-06-30

---

# Related Documents

- MindCore-Design-Language.md
- Design-Principles.md
- Buttons.md
- Cards.md
- Navigation.md
- Components.md

---

# Version History

## Version 1.0

Initial MDL Registry created.

---

# Approval

Approved By:
Pending Review

Approval Date:
Pending