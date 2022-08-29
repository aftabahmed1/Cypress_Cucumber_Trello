## Note as this project is built on cypress 9.6.0 version
So please only keep this or older version , on 10.0 or updated one it needs to be changed a bit in order to run it successfully.

## Pre-Requisites for running this project run following in Terminal
npm i 
Add the trello credentials in fetchData.json file under fixtures folder , username and password field respectively.

## To execute test cases in headless mode run following command in terminal with report also generated with this command under reports folder index.html
npm test

## To execute test cases from cypress UI run following command in terminal
npm run open
After cypress open click on run integration tests button link

## Page Objects are under folder support -> page-objects ->Collection-page.js




