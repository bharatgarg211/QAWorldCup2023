# QAWorldCup2023
## How to Install Playwright in Project

$ npm init playwright@latest

## What is Installed

Playwright will download the browsers needed as well as create the following files.

$ playwright.config.ts
package.json
package-lock.json

$ tests/
  example.spec.ts
  
$ tests-examples/
  demo-todo-app.spec.ts

-> The playwright.config is where you can add configuration for Playwright including modifying which browsers you would like to run Playwright on. If you are running tests inside an already existing project then dependencies will be added directly to your package.json.
        
-> The tests folder contains a basic example test to help you get started with testing. For a more detailed example check out the tests-examples folder which contains tests written to test a todo app.

## Running the Example Test

$ npx playwright test

## HTML Test Reports

$ npx playwright show-report
