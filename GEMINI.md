# GEMINI.md

This file provides instructional context about the project for Gemini.

## Project Overview

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). It uses [TypeScript](https://www.typescriptlang.org/) and [Tailwind CSS](https://tailwindcss.com/). The project is configured to redirect the root path to `/landing`.

## Building and Running

To get started with development, use the following commands:

*   **Run the development server:**
    ```bash
    npm run dev
    ```
*   **Build the project for production:**
    ```bash
    npm run build
    ```
*   **Start the production server:**
    ```bash
    npm run start
    ```
*   **Lint the project:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Linting:** The project uses [ESLint](https://eslint.org/) for code quality and consistency. The configuration can be found in `eslint.config.mjs`.
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/) is used for styling. The configuration is in `postcss.config.mjs` and `tailwind.config.ts`.
*   **Components:** Reusable UI components are located in `src/components/ui`.
*   **Routing:** The application uses the Next.js App Router. The main entry point is `src/app/page.tsx`, which redirects to the `/landing` page.
