# BTN-001 — Primary Button

**Project:** MindCore

**MDL ID:** BTN-001

**Component Name:** Primary Button

**Version:** 1.0

**Status:** Approved

**Category:** Buttons

**Author:** MindCore Team

**Created:** 2026-06-30

**Last Updated:** 2026-06-30

---

# Purpose

BTN-001 is the primary call-to-action button used throughout the MindCore ecosystem.

It represents the most important action available on a screen.

Examples include:

- Generate Quiz
- Summarize Document
- Ask Rabi
- Upload File
- Start Learning
- Continue
- Save Changes

---

# Philosophy

The Primary Button should attract attention without overwhelming the interface.

There should normally be only **one primary button** within a major section or dialog.

---

# MDL Information

Component ID:

BTN-001

Category:

Buttons

Registry Status:

Approved

---

# Visual Appearance

Style

Filled

Shape

Rounded Rectangle

Corner Radius

12px

Border

None

Shadow

Small Elevation

Typography

Inter SemiBold

16px

---

# Colors

Background

Core Gold (#D4AF37)

Text

Mind Black (#111111)

Hover

Slightly darker gold

Pressed

Deep Gold

Disabled

Gray 300 Background

Gray 500 Text

Focus

Gold outline

---

# Sizes

Small

Height: 36px

---

Medium (Default)

Height: 44px

---

Large

Height: 52px

---

Padding

Horizontal

24px

Vertical

12px

---

# Width

Default

Fit Content

Optional

Full Width

Never stretch unnecessarily.

---

# Icon Support

Supported

✓ Left Icon

✓ Right Icon

Examples

⬆ Upload Document

✨ Generate Quiz

🤖 Ask Rabi

---

# States

Default

Hover

Active

Focused

Disabled

Loading

Success

Error (Optional)

---

# Loading State

Replace the icon with a loading spinner.

Disable additional clicks.

Maintain button width.

Example

Generating Quiz...

---

# Success State

Optional checkmark animation.

Example

✓ Saved Successfully

---

# Accessibility

Minimum touch target:

44 × 44 px

Keyboard Focus:

Visible

ARIA Labels:

Required for icon-only variations

Contrast:

WCAG AA Compliant

---

# Interaction Rules

Click

Immediate visual feedback

Hover

Subtle elevation

Focus

Visible outline

Disabled

Cannot receive interaction

Loading

Blocks duplicate requests

---

# Animation

Hover

150ms

Press

100ms

Loading

Continuous Spinner

Success

Fade + Checkmark

Animations should remain subtle.

---

# Responsive Behavior

Desktop

Fit Content

Tablet

Fit Content

Mobile

Prefer Full Width

Extension

Fit Content

---

# Usage

Use BTN-001 for:

- Primary actions
- Submit actions
- Confirmation actions
- AI generation actions

---

# Avoid Using BTN-001 For

Secondary actions

Cancel

Delete

Close

Back

Low-priority actions

---

# Examples

✅ Generate Quiz

✅ Ask Rabi

✅ Upload PDF

✅ Save Progress

✅ Start Session

---

# Do

✓ Keep labels short.

✓ Use action-oriented verbs.

✓ Keep only one primary button per section.

✓ Pair with meaningful icons when appropriate.

---

# Don't

✗ Use multiple primary buttons side by side.

✗ Use vague labels like "Click Here."

✗ Use red backgrounds.

✗ Add unnecessary gradients.

✗ Add excessive shadows.

---

# Design Tokens

Background:

--core-gold

Text:

--mind-black

Radius:

--radius-md

Shadow:

--shadow-sm

Font:

--font-body

---

# Related Components

BTN-002 Secondary Button

BTN-003 Ghost Button

BTN-004 Icon Button

BTN-006 AI Action Button

---

# Used In

SCR-002 Login

SCR-003 Home

SCR-004 Chat

SCR-005 Document Reader

SCR-006 AI Summarizer

SCR-007 Quiz Generator

SCR-010 Settings

---

# Design Decisions

## D-027

Decision

The Primary Button uses Core Gold as its background.

Reason

Core Gold represents important actions and reinforces the premium identity of MindCore.

Status

Accepted

Date

2026-06-30

---

## D-028

Decision

Only one primary button should exist within a major section.

Reason

This creates a clear visual hierarchy and guides the user's attention to the most important action.

Status

Accepted

Date

2026-06-30

---

# Future Improvements

- AI pulse animation
- Premium shimmer effect
- Voice command indicator
- Haptic feedback (Mobile)

---

# Version History

## Version 1.0

Initial BTN-001 specification created.

---

# Approval

Approved By:
Pending Review

Approval Date:
Pending