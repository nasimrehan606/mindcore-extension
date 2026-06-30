# Database Standards

## Document Information

**Document ID:** DOC-017

**Project:** MindCore

**Document Name:** Database Standards

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

This document defines the database design standards for all MindCore applications.

The goal is to create databases that are secure, scalable, maintainable, and efficient while maintaining consistency across every product.

MindCore currently uses MySQL as its primary relational database.

---

# Objectives

Every database should be:

- Reliable
- Secure
- Efficient
- Scalable
- Consistent
- Easy to maintain

---

# Database Engine

Current Standard

- MySQL 8+

Future Support

- PostgreSQL
- Redis (Caching)
- Elasticsearch (Search)

---

# Database Design Principles

Design every database with:

- Normalization where appropriate
- Performance in mind
- Data integrity
- Scalability
- Simplicity

Avoid unnecessary complexity.

---

# Naming Conventions

## Database

Use lowercase.

Example

```
mindcore
```

---

## Tables

Use plural snake_case.

Examples

```
users
documents
document_summaries
quizzes
quiz_results
flashcards
study_sessions
user_settings
notifications
```

---

## Columns

Use snake_case.

Examples

```
first_name
last_name
email
created_at
updated_at
last_login
```

---

## Primary Keys

Every table should have:

```
id
```

Type:

```
BIGINT UNSIGNED AUTO_INCREMENT
```

Future support for UUIDs may be introduced if needed.

---

# Foreign Keys

Use descriptive names.

Examples

```
user_id
document_id
quiz_id
summary_id
```

Always enforce relationships with foreign key constraints unless a documented reason exists not to.

---

# Required Columns

Most tables should include:

```
id
created_at
updated_at
```

Optional:

```
deleted_at
```

for soft deletes.

---

# Soft Deletes

Use soft deletes for user-generated content whenever recovery may be required.

Example

```
deleted_at
```

Avoid permanently deleting important learning data unless required.

---

# Relationships

Use appropriate relationship types:

- One-to-One
- One-to-Many
- Many-to-Many

Use junction tables for many-to-many relationships.

Example

```
quiz_questions
```

---

# Indexing

Index columns that are frequently used for:

- Searching
- Sorting
- Filtering
- Foreign keys

Avoid excessive indexing, which can slow writes.

---

# Constraints

Use database constraints whenever possible.

Examples

- NOT NULL
- UNIQUE
- FOREIGN KEY
- CHECK (where supported)

These constraints help maintain data integrity.

---

# Transactions

Use transactions for operations involving multiple related database changes.

Examples:

- User registration
- Quiz submission
- Document upload with metadata
- Subscription updates

Transactions help ensure data consistency.

---

# Migrations

All schema changes must be managed through migration files.

Never modify the production database manually.

Migration files should be:

- Version controlled
- Reviewed
- Tested before deployment

---

# Data Types

Choose the smallest suitable data type.

Examples

```
INT
BIGINT
VARCHAR
TEXT
BOOLEAN
DATE
DATETIME
TIMESTAMP
JSON
```

Avoid oversized data types without reason.

---

# Timestamps

Use UTC for all stored timestamps.

Display times according to the user's local timezone.

---

# JSON Columns

Use JSON only when relational structures are not practical.

Avoid storing highly relational data inside JSON fields.

---

# Security

Sensitive data must never be stored in plain text.

Examples:

- Passwords → Hashed
- Tokens → Encrypted or securely stored
- API Keys → Never stored directly if avoidable

---

# Performance

Optimize queries by:

- Using indexes
- Avoiding SELECT *
- Limiting returned columns
- Using pagination
- Reducing unnecessary joins

Profile slow queries regularly.

---

# Backups

Regular database backups are mandatory.

Backup strategy should include:

- Daily incremental backups
- Weekly full backups
- Backup verification
- Secure storage

---

# Database Documentation

Every table should include documentation for:

- Purpose
- Columns
- Relationships
- Constraints
- Indexes

---

# Code Review Checklist

Before deployment:

✓ Tables follow naming conventions

✓ Foreign keys defined

✓ Indexes reviewed

✓ Migrations created

✓ Queries optimized

✓ Sensitive data protected

✓ Backups verified

---

# Related Documents

- API-Standards.md
- Security-Standards.md
- Error-Handling.md
- Folder-Structure.md

---

# Design Decisions

## D-055

### Decision

MindCore adopts MySQL as the primary relational database.

### Reason

MySQL provides excellent reliability, performance, and ecosystem support for the current project requirements.

### Status

Accepted

### Date

2026-06-30

---

## D-056

### Decision

All schema changes must be managed through migrations.

### Reason

Migration-based development provides consistency, traceability, and safer deployments.

### Status

Accepted

### Date

2026-06-30

---

# Version History

## Version 1.0

Initial Database Standards created.

---

# Approval

**Approved By:** Pending Review

**Approval Date:** Pending