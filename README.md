# React E-Commerce SPA

Training project built during internship for practicing modern frontend development.

## Tech Stack

- React 19
- React Router 7
- Redux Toolkit
- RTK Query
- Webpack 5
- Babel
- ESLint
- Prettier
- Husky
- DummyJSON API

## General Project Requirements

### Functional Scope

- At least 3 application pages
- Client-side routing with React Router
- Global state management with Redux Toolkit
- Data fetching and caching with RTK Query
- Responsive layout for mobile and desktop devices

### Project Constraints

- No Create React App
- No UI component libraries for the main interface
- Modular and maintainable project structure
- Functional React components only
- React Hooks for state and side effects
- Clear separation of UI and business logic

### Quality Requirements

- Clean and readable code
- Consistent formatting and code style
- ESLint and Prettier integration
- Git hooks with Husky
- Structured commit messages

### Delivery Requirements

- Source code hosted on GitHub
- Pull Request workflow
- Production deployment

## Functionality

### Overview

A responsive e-commerce application powered by DummyJSON.  
The application includes authentication, product catalog browsing with search, filtering, sorting, pagination, and detailed product view functionality.

### Authentication

- Login via DummyJSON credentials
- Client-side form validation
- Password visibility toggle
- Error handling and session persistence

### Catalog

- Product listing with image, title, price, and rating
- Search, category filtering, sorting, and pagination
- URL-driven state management (filters persist on refresh)
- Loading and error states for API requests

### Product Details

- Full product information display
- Image gallery with navigation controls
- Breadcrumb navigation and back navigation support
- Pricing details and customer reviews

## How to Run Project

Install dependencies:

```bash
npm install
```

Start development server:

```bash
npm start
```

Open in browser:

```text
http://localhost:3000
```

## Available Scripts

Run ESLint:

```bash
npm run lint
```

Automatically fix lint issues:

```bash
npm run lint:fix
```

Check formatting:

```bash
npm run format:check
```

Format project files:

```bash
npm run format
```

Build production bundle:

```bash
npm run build
```
