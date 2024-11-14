# Car Dealer App

allows users to filter vehicles by type and model year, and view the results on a separate page

Live page: https://car-dealer-app-zeta.vercel.app/

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
- The "Next" button is enabled only when a vehicle make and model year are selected

#### Result page

- After clicking "Next" user will be taken to a page showing a list of all the car models for the selected make and year.
- Static paths are generated for the result pages using `generateStaticParams`.
- Necessary data is fetched to pre-render these paths.


### Folder structure

| Folder/File    | Description                                         |
| -------------- | --------------------------------------------------- |
| `app/`         | Next.js app router and main root page (Filter page) |
| `app/api`      | API route handlers for server-side logic            |
| `app/result`   | Result page                                         |
| `app/fonts`    | binaries of custom fonts                            |
| `app/types/`   | TypeScript type definitions                         |
| `components/`  | contains React UI components                        |
| `utils/`       | contains utility functions                        |
| `.env`         | Environment variables configuration file            |
| `package.json` | NPM package configuration and dependencies          |

### Areas for Improvement

1. **Enhance UI**:
   - Improve the overall user interface for a more engaging and polished experience.
   - Reset CSS.
   - Focus on accessibility and ensure the design is responsive.
   - Add CSS styling for select options.

2. **Error Handling**:
   - Return Error object from the fetching functions and handle in the web interface and handle accroding to the status.