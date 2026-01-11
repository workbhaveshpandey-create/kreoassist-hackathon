# Team Contribution Guide

This document outlines where each team member should work to avoid conflicts and ensure strict role separation.

## 1. Backend/Data Lead (The Engine)
**Focus:** Data fetching, storage, API logic.

*   **Your Domain:**
    *   `src/services/` (Write all API/Storage logic here)
    *   `src/types/` (Create shared TypeScript interfaces here)
*   **Your Commit Message:** `feat(backend): added user caching`

## 2. Frontend Logic Lead (The Brain)
**Focus:** Application state, initialization, tying it all together.

*   **Your Domain:**
    *   `src/hooks/` (Create custom hooks here)
    *   `src/App.tsx` (Manage the main layout and router)
    *   `src/utils/` (Helper functions)
*   **Your Commit Message:** `feat(logic): implemented auth hook`

## 3. UI Specialist (The Artist)
**Focus:** Visual atoms, design system, styling.

*   **Your Domain:**
    *   `src/components/ui/` (Buttons, Cards, Modals)
    *   `src/index.css` (Tailwind config, global styles)
*   **Your Commit Message:** `style(ui): redesigned primary button`

## 4. Feature Developer (The Builder)
**Focus:** Building major page sections using UI atoms.

*   **Your Domain:**
    *   `src/components/sections/` (Hero, Features, Roadmap, etc.)
*   **Your Commit Message:** `feat(section): updated hero animations`

---

## Important Rules
1.  **Stay in your lane:** Do not edit files outside your domain unless necessary.
2.  **Pull before Push:** Always `git pull origin main` before starting work.
