# gitexample
Github API Example

The Core technologies in the app are Node & Express

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [npm run app](#npm-run-app)
  - [npm start](#npm-start)
  - [npm run build](#npm-run-build)
  - [npm run prod](#npm-run-prod)
  - [npm run prettier](#npm-run-prettier)


### Getting Started

- Install dependencies
```
npm install
```

## Folder Structure

After creation, your project should look like this:

```
gitexample/
  README.md
  node_modules/
  package.json
  src/
    index.js
    server.js
```

## Available Scripts

In the project directory, you can run:

### `npm run app`

Runs the app in the development mode.

### `npm start`

Runs the server in the development mode.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It transpiles ES6 code which are not detected in node v6.

See the section about [deployment](#deployment) for more information.

### `npm run prod`

Runs the app in the production mode.<br>
Note: Run Both build tasks before this

### `npm run prettier`

It formats the code in an opinionated manner.<br>
You should have globally installed the prettier npm package<br>
Or the developers can also add a prettier plugin in their editor and modify the settings to suit the script.

Check the [prettier](https://github.com/prettier/prettier) repository for more information.
