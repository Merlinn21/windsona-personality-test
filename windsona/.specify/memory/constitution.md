# Windsona Personality Test Constitution

## Core Principles

### I. Static Web Delivery
A static web app must serve only static assets (HTML, CSS, JS, images) with no server-side code. All logic runs client-side in the browser.

### II. Simplicity & Clarity
Code and UI must be simple, readable, and maintainable. Avoid unnecessary complexity. Use clear naming and structure.

### III. Test-First (NON-NEGOTIABLE)
All code must have basic automated tests (unit or integration) before deployment. Manual testing is required for UI/UX.

### IV. Accessibility & Responsiveness
The app must be usable on desktop and mobile devices, and meet basic accessibility standards (semantic HTML, keyboard navigation).

### V. Versioning
Use semantic versioning (MAJOR.MINOR.PATCH) for releases. Document changes in a changelog.

## Technology Constraints
Use the following web technologies: HTML5, CSS3, JavaScript (ES6+), Tailwind, and React. No backend, no database. Optional: static site generators (e.g., Vite for build and deployment, Next.js static export, React-based frameworks).

## Development Workflow
Code must be reviewed before merging. All tests must pass before deployment. Build and deploy the app using Vite to a static hosting service (e.g., GitHub Pages, Netlify).

## Governance
This constitution supersedes other practices for this app. Amendments require documentation and approval by project owner.

**Version**: 1.0.0 | **Ratified**: 2025-11-22 | **Last Amended**: 2025-11-22
