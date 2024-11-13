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

* Fetches vehicle makes using
  [this endpoint](https://vpic.nhtsa.dot.gov/api/vehicles/GetMakesForVehicleType/car?format=json).
* Displays the selector to choose for the next step

#### Result page

* Fetches and displays the details of selected vehicle.

### Folder structure

| Folder/File    | Description                                         |
|----------------|-----------------------------------------------------|
| `app/`         | Next.js app router and main root page (Filter page) |
| `app/fonts`    | binaries of custom fonts                            |
| `app/result`   | Result page                                         |
| `public/`      | Contains static assets like images and icons        |
| `.env`         | Environment variables configuration file            |
| `package.json` | NPM package configuration and dependencies          |
