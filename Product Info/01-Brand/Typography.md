# Typography

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

This document defines the official typography system for the MindCore ecosystem.

Typography is one of the most important aspects of the user interface. It affects readability, accessibility, branding, and the overall perception of quality.

Every MindCore product—including the Browser Extension, Website, Mobile App, Desktop App, and documentation—must follow this typography guide.

---

# Overview

MindCore uses a clean, modern, and highly readable typography system.

The combination of **Poppins** and **Inter** creates a balance between personality and professionalism.

The typography should feel:

* Modern
* Elegant
* Premium
* Friendly
* Easy to read

---

# Font Families

## Primary Display Font

### Poppins

Purpose:

* Logo
* Hero Titles
* Main Headings
* Marketing Pages

Reason:

Poppins is geometric, modern, and memorable, making it ideal for branding.

---

## Primary UI Font

### Inter

Purpose:

* Body Text
* Buttons
* Forms
* Navigation
* Cards
* Paragraphs
* Settings

Reason:

Inter is optimized for digital interfaces and offers excellent readability at all sizes.

---

## Monospace Font

### JetBrains Mono

Purpose:

* Code blocks
* Technical examples
* API documentation
* Developer tools

Reason:

Provides excellent readability for programming content.

---

# Typography Scale

| Style      | Size | Weight | Line Height |
| ---------- | ---- | ------ | ----------- |
| Display XL | 48px | 700    | 56px        |
| Display L  | 40px | 700    | 48px        |
| H1         | 36px | 700    | 44px        |
| H2         | 30px | 600    | 38px        |
| H3         | 24px | 600    | 32px        |
| H4         | 20px | 600    | 28px        |
| H5         | 18px | 600    | 26px        |
| H6         | 16px | 600    | 24px        |
| Body Large | 18px | 400    | 30px        |
| Body       | 16px | 400    | 26px        |
| Body Small | 14px | 400    | 22px        |
| Caption    | 12px | 400    | 18px        |
| Tiny       | 10px | 400    | 16px        |

---

# Font Weights

| Weight    | Value | Usage               |
| --------- | ----- | ------------------- |
| Regular   | 400   | Body Text           |
| Medium    | 500   | Labels              |
| SemiBold  | 600   | Buttons & Subtitles |
| Bold      | 700   | Headings            |
| ExtraBold | 800   | Logo & Hero Titles  |

---

# Heading Hierarchy

## H1

Used once per page.

Examples:

* Dashboard
* AI Document Reader
* AI Quiz Generator

---

## H2

Section headings.

---

## H3

Cards and panels.

---

## H4-H6

Smaller sections, settings, and lists.

---

# Body Text

Use **Inter Regular (400)**.

Maximum paragraph width should remain readable and avoid large blocks of text.

Sentences should be concise whenever possible.

---

# Buttons

Font:

Inter SemiBold

Size:

16px

Letter Spacing:

0.2px

Text should use Title Case.

Examples:

* Generate Quiz
* Upload Document
* Start Chat

---

# Navigation

Font:

Inter Medium

Size:

15px

Navigation labels should remain short and descriptive.

---

# Forms

Labels:

Inter Medium

Input Text:

Inter Regular

Placeholder:

Inter Regular with reduced opacity.

---

# Cards

Card Titles:

Inter SemiBold

Description:

Inter Regular

---

# Logo Typography

Mind → Poppins ExtraBold

Core → Poppins ExtraBold

"Mind" uses Mind Black.

"Core" uses Core Gold.

---

# Letter Spacing

| Style    | Spacing |
| -------- | ------- |
| Headings | -0.4px  |
| Body     | 0px     |
| Buttons  | 0.2px   |
| Captions | 0.3px   |

---

# Responsive Typography

Desktop and Website may use larger display sizes.

Browser Extension should prioritize readability within a compact layout.

Avoid oversized headings inside popup screens.

---

# Accessibility

Minimum body text:

16px

Avoid long paragraphs.

Maintain adequate line spacing.

Never rely solely on typography to communicate status.

Support browser zoom up to 200%.

---

# CSS Variables

```css
--font-display: "Poppins", sans-serif;

--font-body: "Inter", sans-serif;

--font-code: "JetBrains Mono", monospace;

--fs-display-xl:48px;
--fs-display-l:40px;
--fs-h1:36px;
--fs-h2:30px;
--fs-h3:24px;
--fs-h4:20px;
--fs-h5:18px;
--fs-h6:16px;
--fs-body:16px;
--fs-small:14px;
--fs-caption:12px;
```

---

# Usage Guidelines

## Do

✓ Use Poppins only for branding and headings.

✓ Use Inter for all interface elements.

✓ Maintain a consistent heading hierarchy.

✓ Keep text concise.

✓ Ensure strong contrast with the background.

---

## Don't

✗ Use more than three font families.

✗ Use decorative fonts.

✗ Mix font weights randomly.

✗ Center-align long paragraphs.

✗ Use tiny text for important information.

---

# Design Decisions

## D-007

**Decision**

Poppins is the official display font.

**Reason**

Creates a memorable, modern brand identity.

**Impact**

All branding and major headings should use Poppins.

**Status**

Accepted

**Date**

2026-06-29

---

## D-008

**Decision**

Inter is the official interface font.

**Reason**

Optimized for digital interfaces with excellent readability.

**Impact**

All UI components should use Inter.

**Status**

Accepted

**Date**

2026-06-29

---

## D-009

**Decision**

JetBrains Mono is the official monospace font.

**Reason**

Improves readability for code and technical content.

**Impact**

Developer-focused features and code examples should use JetBrains Mono.

**Status**

Accepted

**Date**

2026-06-29

---

# Future Improvements

Future versions may include:

* Multilingual typography guidelines
* RTL language support
* Variable font optimization
* Dynamic font scaling
* Print typography standards

---

# Related Documents

* Project-Vision.md
* Brand-Identity.md
* Brand-Colors.md
* Logo-Guidelines.md
* Design-System.md

---

# Version History

## Version 1.0

Initial typography system created.

---

# Approval

**Approved By:** Pending Review

**Approval Date:** Pending
