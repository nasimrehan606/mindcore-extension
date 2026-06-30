# Brand Colors

**Project:** MindCore

**Tagline:** Where Learning Meets Intelligence.

**Version:** 1.0

**Status:** Draft

**Category:** Brand

**Author:** MindCore Team

**Created:** 2026-06-29

**Last Updated:** 2026-06-29

---

# Purpose

This document defines the official color system for the MindCore ecosystem.

Every interface, logo, illustration, website, extension, application, presentation, and marketing material must follow these color specifications to ensure visual consistency.

---

# Overview

The MindCore color palette represents intelligence, innovation, trust, energy, and growth.

Each primary color has a specific purpose and should be used consistently throughout the ecosystem.

The palette has been designed to support both Light Mode and Dark Mode while maintaining accessibility and readability.

---

# Primary Brand Colors

## Mind Black

**Hex**

```text
#111111
```

**RGB**

```text
17,17,17
```

**Purpose**

* Brand name ("Mind")
* Headings
* Primary text
* Navigation
* Premium appearance

**Meaning**

Knowledge, professionalism, confidence.

---

## Core Gold

**Hex**

```text
#D4AF37
```

**RGB**

```text
212,175,55
```

**Purpose**

* Brand name ("Core")
* Premium highlights
* Important actions
* Hero sections
* Logo accents

**Meaning**

Excellence, achievement, intelligence.

---

# Secondary Colors

## Crimson Red

**Hex**

```text
#C62828
```

**Purpose**

Energy, AI activity, important highlights.

Use for:

* Active buttons
* Notifications
* AI highlights
* Interactive elements

---

## Emerald Green

**Hex**

```text
#16A34A
```

**Purpose**

Success, growth, progress.

Use for:

* Success messages
* Completed quizzes
* Learning progress
* Positive feedback

---

# Neutral Colors

| Name     | Hex     | Usage            |
| -------- | ------- | ---------------- |
| Gray 50  | #F9FAFB | Main Background  |
| Gray 100 | #F3F4F6 | Sections         |
| Gray 200 | #E5E7EB | Borders          |
| Gray 300 | #D1D5DB | Dividers         |
| Gray 400 | #9CA3AF | Placeholder Text |
| Gray 500 | #6B7280 | Secondary Text   |
| Gray 600 | #4B5563 | Icons            |
| Gray 700 | #374151 | Titles           |
| Gray 800 | #1F2937 | Headers          |
| Gray 900 | #111827 | Dark Background  |

---

# Semantic Colors

## Success

```text
#16A34A
```

Use for:

* Success alerts
* Completed actions
* Correct quiz answers

---

## Warning

```text
#F59E0B
```

Use for:

* Warnings
* Unsaved changes
* Caution messages

---

## Error

```text
#DC2626
```

Use for:

* Errors
* Failed uploads
* Invalid inputs

---

## Information

```text
#2563EB
```

Use for:

* Informational messages
* Tips
* Tutorials

---

# Light Theme

## Background

```text
#F8F9FA
```

## Cards

```text
#FFFFFF
```

## Primary Text

```text
#111111
```

## Secondary Text

```text
#6B7280
```

---

# Dark Theme

## Background

```text
#0F172A
```

## Cards

```text
#1E293B
```

## Primary Text

```text
#F8FAFC
```

## Secondary Text

```text
#CBD5E1
```

---

# Official Gradients

## Premium Gradient

```text
#111111 → #D4AF37
```

Purpose:

Luxury branding and hero sections.

---

## AI Gradient

```text
#C62828 → #D4AF37
```

Purpose:

AI cards, AI assistant, premium buttons.

---

## Learning Gradient

```text
#16A34A → #22C55E
```

Purpose:

Progress indicators and achievements.

---

# Accessibility

Minimum contrast ratio:

* Normal text: 4.5:1
* Large text: 3:1

Avoid using color alone to communicate important information.

Icons and labels should accompany status colors whenever possible.

---

# CSS Variables

The following variables should be implemented in `variables.css`.

```css
--mind-black
--core-gold
--crimson-red
--emerald-green

--background

--card

--text-primary

--text-secondary

--border

--shadow

--gradient-premium

--gradient-ai

--gradient-learning
```

---

# Usage Guidelines

## Do

✓ Use Mind Black for structure.

✓ Use Gold for emphasis.

✓ Use Red sparingly.

✓ Use Green for success only.

✓ Maintain consistent spacing around colored elements.

---

## Don't

✗ Use Gold for body text.

✗ Use Red as the main background.

✗ Mix gradients randomly.

✗ Introduce new brand colors without updating this document.

---

# Design Decisions

## D-005

**Decision**

MindCore will use Black and Gold as the primary brand colors.

**Reason**

They communicate professionalism, premium quality, and trust.

**Impact**

All logos, headers, and hero sections should prioritize these colors.

**Status**

Accepted

**Date**

2026-06-29

---

## D-006

**Decision**

Red and Green are reserved for functional and semantic purposes.

**Reason**

Maintains visual clarity and consistent user expectations.

**Impact**

Red should indicate AI activity or important emphasis, while Green should represent success and progress.

**Status**

Accepted

**Date**

2026-06-29

---

# Future Improvements

Future versions may include:

* Color palette for illustrations
* Marketing color variations
* Seasonal themes
* High-contrast accessibility theme
* Print color specifications (CMYK)
* Motion color transitions

---

# Related Documents

* Project-Vision.md
* Brand-Identity.md
* Typography.md
* Logo-Guidelines.md
* Design-System.md

---

# Version History

## Version 1.0

Initial Brand Color System created.

---

# Approval

**Approved By:** Pending Review

**Approval Date:** Pending
