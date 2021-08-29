const { Given, When, Then } = require('@cucumber/cucumber');

const homePage = require('../../pages/home.page.js');
const home = new homePage();


Given(/^I am on the online calculator homepage$/, () => {
    home.openCalculatorHomepage();
});

Given(/^I switch to iframe$/, () => {
    home.switchToiFrame();
});

Given(/^I click (.*)$/, (clickButton) => {
    home.click(clickButton);
});

Given(/^I press (.*)$/, (key) => {
    home.keyPress(key);
});