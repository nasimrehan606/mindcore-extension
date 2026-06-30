# CSS Standards

## Document Information

**Document ID:** DOC-015

**Project:** MindCore

**Document Name:** CSS Standards

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

This document defines the official CSS standards for all MindCore products.

These standards ensure a consistent, responsive, accessible, and maintainable user interface across the Website, Browser Extension, Desktop Application, and future platforms.

---

# Objectives

Our styling system should be:

- Consistent
- Responsive
- Accessible
- Reusable
- Scalable
- Easy to maintain

---

# Styling Stack

MindCore uses:

- CSS Modules
- CSS Variables
- Modern CSS
- Flexbox
- CSS Grid
- Mobile-First Design

Future consideration:

- Tailwind CSS (if adopted for specific projects)

---

# Styling Principles

Styles should be:

- Component-based
- Predictable
- Reusable
- Minimal
- Easy to override

Avoid large global stylesheets.

---

# Folder Structure

```
styles/

globals.css
variables.css
typography.css
animations.css
utilities.css
themes.css
```

Each component owns its own module.

Example

```
Button/

Button.tsx

Button.module.css
```

---

# CSS Modules

Default approach.

Example

```
Navbar.module.css

Sidebar.module.css

QuizCard.module.css
```

Benefits:

- Scoped styles
- No naming collisions
- Easier maintenance

---

# CSS Variables

All design tokens should use CSS variables.

Example

```css
:root {

--color-primary: #D62828;

--color-secondary: #C9A227;

--color-background: #0B0B0B;

--radius-medium: 12px;

--spacing-md: 16px;

}
```

Never hardcode colors repeatedly.

---

# Naming

Classes use:

kebab-case

Example

```css
.quiz-card

.primary-button

.summary-panel
```

Avoid:

```css
QuizCard

myButton

button_01
```

---

# Layout

Preferred order

1. CSS Grid
2. Flexbox
3. Positioning (only when necessary)

Avoid unnecessary absolute positioning.

---

# Responsive Design

MindCore follows a Mobile-First approach.

Recommended breakpoints:

```css
480px

768px

1024px

1280px

1536px
```

Layouts should adapt gracefully across screen sizes.

---

# Spacing System

Use an 8-point spacing system.

Examples

```
4px

8px

16px

24px

32px

40px

48px

64px
```

Avoid arbitrary spacing values.

---

# Border Radius

Standard values:

```
4px

8px

12px

16px

24px
```

---

# Shadows

Use subtle shadows.

Levels:

```
Small

Medium

Large
```

Avoid excessive shadow effects.

---

# Colors

Only use approved MindCore brand colors.

Primary

Red

Secondary

Gold

Neutral

Black

Accent

Green

Always reference design tokens.

---

# Typography

Use approved typography system.

Never define random font sizes inside components.

Typography belongs in:

```
typography.css
```

---

# Icons

Icons should:

- Maintain consistent sizing.
- Align with text.
- Follow spacing rules.

Recommended sizes

```
16px

20px

24px

32px
```

---

# Animations

Animations should:

- Be subtle.
- Improve usability.
- Never distract.

Examples

- Hover transitions
- Loading indicators
- Fade animations
- Slide transitions

Avoid excessive motion.

---

# Buttons

Buttons must include:

- Hover state
- Focus state
- Active state
- Disabled state

Every interactive element must have visible feedback.

---

# Forms

Inputs should have:

- Label
- Placeholder (optional)
- Focus state
- Error state
- Success state
- Disabled state

---

# Accessibility

Every UI element should support:

- Keyboard navigation
- Visible focus indicators
- Sufficient color contrast
- Readable typography

Accessibility is mandatory.

---

# Dark Mode

MindCore supports:

- Light Theme
- Dark Theme

Themes should rely on CSS variables instead of duplicate stylesheets.

---

# Performance

Avoid:

- Deep selector nesting
- Duplicate styles
- Unused CSS
- Large animation libraries

Keep styles lightweight.

---

# Comments

Comment only when the styling logic is not obvious.

---

# Code Review Checklist

Before merging:

✓ CSS Modules used appropriately

✓ Responsive design verified

✓ Design tokens used

✓ No duplicate styles

✓ Accessibility checked

✓ No unused classes

✓ Dark mode tested

---

# Related Documents

- Design Principles
- MindCore Design Language
- React Standards
- Folder Structure

---

# Design Decisions

## D-051

### Decision

MindCore adopts CSS Modules as the primary styling methodology.

### Reason

CSS Modules improve maintainability, encapsulation, and scalability.

### Status

Accepted

### Date

2026-06-30

---

## D-052

### Decision

All colors, spacing, typography, and sizing should be managed through design tokens.

### Reason

Design tokens ensure consistency across every MindCore product.

### Status

Accepted

### Date

2026-06-30

---

# Version History

## Version 1.0

Initial CSS Standards created.

---

# Approval

**Approved By:** Pending Review

**Approval Date:** Pending