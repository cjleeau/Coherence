# Coherence

**A universal, inclusive design system for building coherent digital systems.**

Coherence is not a UI kit.

It is a system layer that brings together **design principles, semantic tokens, accessible components, and product patterns** into a single, scalable foundation for modern digital products.

---

## Why Coherence exists

Most design systems standardise interfaces.

Few address the deeper problem:

> Systems drift. Interfaces diverge. Accessibility becomes inconsistent.  
> Value is lost between layers.

Coherence exists to solve that.

It ensures that:

- design decisions remain aligned across products and teams
- accessibility and inclusion are built in from the start
- systems behave consistently, not just visually, but structurally

---

## What Coherence is

Coherence is a **token-driven, accessibility-first design system**, made up of:

### Principles
The rules that guide how systems should behave.

### Foundations
Colour, typography, spacing, motion, layout, and interaction standards.

### Tokens
Semantic design tokens that scale meaning across themes, platforms, and products.

### Components
Accessible, production-ready React components for real-world product use.

### Patterns
Reusable product flows such as forms, dashboards, tables, and navigation.

### Governance
Clear contribution, versioning, and release processes to maintain system integrity over time.

---

## Architecture

Coherence is built as a layered system:

Principles<br>
↓<br>
Foundations<br>
↓<br>
Design Tokens (Style Dictionary)<br>
↓<br>
CSS Variables + TypeScript Maps<br>
↓<br>
React Primitives → Components → Patterns<br>
↓<br>
Storybook (development + validation)<br>
↓<br>
Next.js (documentation + system interface)

---

## Tech Stack

- **Next.js** — documentation site and system interface
- **React** — component library
- **Storybook** — component development and testing
- **Style Dictionary** — design token pipeline
- **Tailwind CSS** — implementation layer (token-driven)
- **TypeScript** — type safety across the system
- **pnpm workspaces** — monorepo management

---

## Key principles

- **Semantic over visual naming**  
  Tokens express meaning, not appearance.

- **Accessibility by default**  
  WCAG compliance, keyboard navigation, and contrast are built into every layer.

- **System over surface**  
  Coherence focuses on how systems behave, not just how they look.

- **Consistency through structure**  
  Tokens, components, and patterns are aligned and interdependent.

- **Scalable by design**  
  Built to support themes, platforms, and evolving product ecosystems.

---

## Getting started
```
pnpm install
pnpm dev:docs
pnpm dev:storybook
```

---

## Planned structure

apps/<br>
  docs/            # Next.js documentation site<br>
  storybook/       # Storybook environment<br>

packages/<br>
  tokens/          # Design tokens + Style Dictionary<br>
  primitives/      # Layout and text primitives<br>
  components/      # React component library<br>
  patterns/        # Product patterns<br>
  themes/          # Theme definitions<br>
  utils-a11y/      # Accessibility helpers<br>

---

## Roadmap
- Phase 1 — Foundations and token system
- Phase 2 — Core primitives and components
- Phase 3 — Accessibility hardening
- Phase 4 — Patterns and documentation
- Phase 5 — Governance and public release

---

## Contributing

Coherence is designed to evolve through structured contribution.

All changes must:

- Follow token and component standards
- Meet accessibility requirements
- Pass automated checks
- Include documentation updates
