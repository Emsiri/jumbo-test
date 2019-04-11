# Jumbo test
This repo is a demonstration on how to write API tests for the Swagger UI pet store https://petstore.swagger.io/#/
Written in JS using [Cypress](https://www.cypress.io/) and [cypress-cucumber-preprocessor](https://github.com/TheBrainFamily/cypress-cucumber-preprocessor)
## Getting Started
First clone the repo and cd into it then run the following
```
npm install
```
Then to run the tests either use:
```
npx cypress run
```
Or to open Cypress's debugger (recommended):
```
npx cypress open
```
From here you'll need to click on the pet.feature to run the tests.
feature files are located in cypress/integration/ and the spec file is located in cypress/integration/pet/