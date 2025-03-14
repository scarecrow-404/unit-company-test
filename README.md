# Front-End

## Overview

This is a Next.js-based front-end project structured for handling multiple test scenarios. The project is designed with modular components and follows best practices for maintainability and scalability.

## Project Structure

```
unit-front-end/
│-- .next/                 # Next.js build output
│-- node_modules/          # Dependencies
│-- public/                # Static assets
│-- src/
│   ├── app/               # Main application directory
│   │   ├── test2/         # Test 2 page
│   │   │   ├── page.js    # Test 2 component
│   │   ├── test3/         # Test 3 page
│   │   │   ├── page.js    # Test 3 component
│   │   ├── favicon.ico    # Favicon for the app
│   │   ├── globals.css    # Global styles
│   │   ├── layout.js      # Layout component
│   │   ├── page.js        # Test 1 page
│-- .gitignore             # Git ignore file
│-- jsconfig.json          # JS config for Next.js
│-- next.config.mjs        # Next.js configuration
│-- package-lock.json      # Lock file for dependencies
│-- package.json           # Project metadata and dependencies
│-- postcss.config.mjs     # PostCSS configuration
│-- README.md              # Project documentation
```

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/your-repo/unit-front-end.git
   ```
2. Navigate to the project folder:
   ```sh
   cd unit-front-end
   ```
3. Install dependencies:
   ```sh
   npm install
   ```

## Running the Project

To start the development server, run:

```sh
npm run dev
```

Then, open `http://localhost:3000` in your browser.

