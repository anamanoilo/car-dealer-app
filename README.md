# Car Dealer App

allows users to filter vehicles by type and model year, and view the results on a separate page

## Quickstart

Configure env vars by adding API_URL to `.env`

To run locally

```shell
npm install
npm run dev
```

For production build

```shell
npm ci
npm build
```

## Overview

### Features

#### Filter page

- Fetches vehicle makes using
  [this endpoint](https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json).
- Displays the selector to choose for the next step

#### Result page

- Fetches and displays the details of selected vehicle.

### Folder structure

| Folder/File    | Description                                         |
| -------------- | --------------------------------------------------- |
| `app/`         | Next.js app router and main root page (Filter page) |
| `app/api`      | API route handlers for server-side logic            |
| `app/result`   | Result page                                         |
| `app/fonts`    | binaries of custom fonts                            |
| `app/types/`   | TypeScript type definitions                         |
| `public/`      | Contains static assets like images and icons        |
| `.env`         | Environment variables configuration file            |
| `package.json` | NPM package configuration and dependencies          |

### Areas for Improvement

1. **Refactor the Filter Page**:

   - Rewrite the Filter Page using Server Components for improved performance.
   - Alternatively, use SWR to fetch data efficiently in Client Components.

2. **Implement Suspense**:

   - Utilize React's `Suspense` to handle loading states gracefully on the Filter Page.

3. **Enhance UI**:
   - Improve the overall user interface for a more engaging and polished experience.
   - Reset CSS.
   - Focus on accessibility and ensure the design is responsive.
   - Add CSS styling for select options.

4. **Error Handling**:
   - Return Error object from the fetching functions and handle in the web interface.