# React Typescript SPA with Vite and Tailwind CSS

This is a single-page application built with React, Vite, and Tailwind CSS. The app has only one page, located at /, and features personalized text with a lead approve or cancel button.

## Getting Started

To run the app, follow these steps:

Clone the repository.
Install dependencies with npm install.
Run the development server with npm run dev.
The app should now be available at http://localhost:3000.

## Functionality

On the homepage, users are presented with personalized text and a lead approve or cancel button. When the user clicks either button, a toast will display, and the corresponding form will be shown.

If the user cancels the request by clicking the "not a fit" button, the cancel form will be shown with options to submit or go back.

If the user accepts the lead by clicking the "all good" button, the lead acceptance form will be shown. This form includes form validation with the help of react-hook-form.

## Folder Structure

The code and folder structure of the app are based on the atomic design structure. This structure is designed to make the app easy to maintain and scale as it grows.

The public directory contains the HTML file for the app.

The src directory contains the source code for the app.

The assets directory contains images and other assets used in the app.

The components directory contains reusable UI components organized by atomic design principles.

The pages directory contains the main page of the app.

The utils directory contains utility functions used throughout the app.

The index.tsx file is the entry point for the app.

The package.json file contains information about the app and its dependencies.

The README.md file is this document.

The vite.config.js file is the configuration file for Vite.

&.. there are many more

## Additional Implementations

Husky,
Prettier,
Eslint
