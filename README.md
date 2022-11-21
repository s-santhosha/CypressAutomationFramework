## UI AND API - CYPRESS TEST AUTOMATION FRAMEWORK

This is a modern Javascript Automation Framework 

### Techstack 
 Nodejs, Javascript, Cypress, mochawesome reporter

#### Clone or download this project from Github.

### Installation

```bash
npm install
```
### How to run the automation scripts

More than one way to run the tests

Option 1 - using command line arguments as below(choose either of the browsers - chrome, electron(default), firefox)

```bash
npx cypress run -b chrome
```

Option 2 - Using cypress dashboard , tests can be run

```bash
npm test
```

#### HTML Reports can be found under reports directory
 cypress-test\reports

 ```bash
 npm run post-test
 ```
 HTML report is generated at "cypress/reports/mochareports/report.html"