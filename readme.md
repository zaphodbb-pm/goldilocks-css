![GitHub package.json version](https://img.shields.io/github/package-json/v/zaphodbb-pm/goldilocks-css)
![GitHub](https://img.shields.io/github/license/zaphodbb-pm/goldilocks-css)

# Goldilocks-CSS
A customer-first CSS design library.

## Overview
**Goldilocks-CSS** is a lightweight, responsive, standards-compliant, and up-to-date HTML5 / CSS3 solution. It is designed to meet the needs of product and business managers who require efficient, small-footprint resources.

This project has been updated to Version 1 status and is currently in its **beta phase**. It is fully functional, but some changes may occur.

## Requirements
- **Browser**: Modern HTML5/CSS3 compliant browser.
- **Development** (optional): 
  - [Node.js](https://nodejs.org/) (tested with v18+)
  - [npm](https://www.npmjs.com/)

## Installation

### 1. Manual Installation
Download the files from this repository and link the desired CSS file in the `<head>` of your HTML:

- **Core** (Layouts and Helpers):
  ```html
  <link rel="stylesheet" media="screen" href="./dist/goldilocks.core.min.css">
  ```
- **Core** (Core Plus Common Elements):
  ```html
  <link rel="stylesheet" media="screen" href="./dist/goldilocks.core-elements.min.css">
  ```
  
- **Core Extended** (Core and Common Elements+ Popular Add-on Elements and Components):
  ```html
  <link rel="stylesheet" media="screen" href="./dist/goldilocks.core-extended.min.css">
  ```

- **All** (Core, Common Elements, Extended, and Secondary Add-on Elements/Components):
  ```html
  <link rel="stylesheet" media="screen" href="./dist/goldilocks.all.min.css">
  ```

### 2. CDN (jsDelivr)
Link directly to the files using the jsDelivr CDN:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zaphodbb-pm/goldilocks-css/dist/goldilocks.core.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zaphodbb-pm/goldilocks-css/dist/goldilocks.core-elements.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zaphodbb-pm/goldilocks-css/dist/goldilocks.core-extended.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/zaphodbb-pm/goldilocks-css/dist/goldilocks.all.min.css">
```

### 3. NPM
```bash
npm install @zaphodbb-pm/goldilocks-css
```

## Development & Build Scripts

### Setup
1. Clone the repository: `git clone https://github.com/zaphodbb-pm/goldilocks-css.git`
2. Install dependencies: `npm install`

### NPM Scripts
- `npm run dev`: Starts a local development server using Parcel and opens `index.html`.
- `npm run build`: Builds the project using Parcel (targets `index.html`).
- `npm run start`: Combines `build` and `dev` commands.
- `npm test`: Currently placeholder (TODO: Implement CSS regression tests).

### Gulp Tasks
Gulp is used to bundle and minify the CSS files. You can run individual tasks using `npx gulp <task-name>`:
- `buildCore`: Bundles base, layout, and helpers.
- `buildCoreElements`: Bundles core + core elements.
- `buildExtended`: Bundles extended components.
- `buildExtras`: Bundles extra components.
- `buildCoreExtended`: Bundles core + elements + extended.
- `buildAll` (Default): Bundles everything.

## Project Structure
- `css/`: Source CSS files organized by category (core, extended, extras).
- `dist/`: Compiled and minified CSS bundles.
- `pages/`: Documentation and demonstration pages.
- `img/`: Images and assets used in the demo.
- `gulpfile.js`: Gulp build configuration.
- `package.json`: Project metadata and dependencies.

## Environment Variables
- TODO: List any environment variables if applicable (currently none detected).

## Tests
- TODO: Implement automated CSS testing/linting.

## Get More Help
Please see the [main demonstration](https://zaphodbb-pm.github.io/goldilocks-css/pages/home.html) for detailed information and component examples.

## License
This project is licensed under the [MIT License](LICENSE.txt).
