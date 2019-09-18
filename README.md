# Product information signup

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Running the app locally

After cloning this repo or downloading the `.zip` file run 

### `yarn install`

To install project dependencies

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

## Dependencies

On top of the what's bundled with Create React App, this project has only two dependencies.

`node-sass` for Sass style sheet support and `@testing-library/react` for React component testing.

## Usage

This app renders a React component with a form to subscribe to a ficticious product information mailing list.

The app is fully translated through a minimal implementation of an `i18n` library. Additionally to the options set in `src/services/i18n.js`, it supports a query string URL parameter to set the transaltion language (`?lng='de-DE'` for example). Currently supported language codes are `en-US` (default) and `de-DE`.

The custom input components where created in order to be as flexible and reusable as possible while fully supporting form validation and translations.
