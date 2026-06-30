# MindCore Design Language (MDL)

**Project:** MindCore

**Tagline:** Where Learning Meets Intelligence.

**Version:** 1.0

**Status:** Draft

**Category:** Design System

**Author:** MindCore Team

**Created:** 2026-06-29

**Last Updated:** 2026-06-29

---

# Purpose

The MindCore Design Language (MDL) defines the naming, organization, and documentation standards for every reusable UI component across the MindCore ecosystem.

MDL ensures consistency between design, development, testing, and documentation.

---

# Philosophy

Every reusable element should have:

- A unique ID
- A single source of truth
- Clear documentation
- Reusable implementation
- Predictable behavior

If a component doesn't have an MDL ID, it is not considered part of the official design system.

---

# Component Naming

Every component belongs to a category.

Each category has a prefix.

Example:

BTN = Buttons

CARD = Cards

NAV = Navigation

INP = Inputs

MOD = Modal

TAB = Tabs

AI = AI Components

LAY = Layout

SCR = Screen

---

# Button IDs

BTN-001 Primary Button

BTN-002 Secondary Button

BTN-003 Ghost Button

BTN-004 Icon Button

BTN-005 Floating Action Button

BTN-006 AI Action Button

---

# Card IDs

CARD-001 Standard Card

CARD-002 Feature Card

CARD-003 AI Response Card

CARD-004 Statistics Card

CARD-005 Document Card

CARD-006 Quiz Card

CARD-007 Flashcard

---

# Input IDs

INP-001 Text Input

INP-002 Search Input

INP-003 Password Input

INP-004 Upload Input

INP-005 AI Prompt Input

---

# Navigation IDs

NAV-001 Top Navigation

NAV-002 Sidebar

NAV-003 Bottom Navigation

NAV-004 Breadcrumb

NAV-005 Tabs

---

# Modal IDs

MOD-001 Confirmation Modal

MOD-002 Upload Modal

MOD-003 Settings Modal

MOD-004 AI Result Modal

---

# AI Component IDs

AI-001 Chat Bubble

AI-002 Thinking Animation

AI-003 Typing Indicator

AI-004 Response Card

AI-005 Suggestion Card

AI-006 AI Avatar

---

# Layout IDs

LAY-001 Extension Layout

LAY-002 Website Layout

LAY-003 Dashboard Layout

LAY-004 Mobile Layout

---

# Screen IDs

SCR-001 Splash

SCR-002 Login

SCR-003 Home

SCR-004 Chat

SCR-005 Document Reader

SCR-006 Summarizer

SCR-007 Quiz Generator

SCR-008 Flashcards

SCR-009 History

SCR-010 Settings

SCR-011 Profile

---

# Naming Rules

Component IDs never change.

If a component evolves, its version changes—not its ID.

Example:

BTN-001 v1.0

BTN-001 v2.0

BTN-001 v3.0

---

# Documentation Rules

Every MDL component should have its own documentation file.

Example:

Buttons/
├── BTN-001.md
├── BTN-002.md
├── BTN-003.md

Cards/
├── CARD-001.md
├── CARD-002.md

---

# Usage in Screen Documentation

Example:

Home Screen

Components Used:

- NAV-001
- BTN-001
- CARD-002
- AI-004
- INP-002

This creates traceability between screens and reusable components.

---

# Versioning

Major Version

Breaking visual or behavioral changes.

Minor Version

New features or improvements.

Patch Version

Bug fixes and documentation updates.

---

# Design Decisions

## D-022

Decision

Every reusable UI component must have a unique MDL ID.

Reason

Improves consistency and traceability.

Status

Accepted

Date

2026-06-29

---

## D-023

Decision

Component IDs are permanent.

Reason

Changing IDs creates confusion across documentation and code.

Status

Accepted

Date

2026-06-29

---

## D-024

Decision

Every screen must reference MDL component IDs.

Reason

Ensures every screen is built from reusable, documented components.

Status

Accepted

Date

2026-06-29

---

# Future Improvements

- Auto-generated component documentation
- Design token integration
- Figma component mapping
- Storybook integration

---

# Related Documents

- Design-Principles.md
- Buttons.md
- Cards.md
- Navigation.md
- Components.md

---

# Version History

## Version 1.0

Initial MindCore Design Language created.

---

# Approval

Approved By:
Pending Review

Approval Date:
Pending