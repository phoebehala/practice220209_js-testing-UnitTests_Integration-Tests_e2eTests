
=======================================
For unit test and integration test:

"scripts": {
   "start": "webpack app.js --mode development --watch",
   "test": "jest --watchAll"   // having jest test run all the time
 },


1. install a package
npm i --save-dev jest

2. run the test
npm test

=======================================

For end2end test and integration test:

1. install a package used for simulating the browser
npm i --save-dev puppeteer

2. run the test
npm test