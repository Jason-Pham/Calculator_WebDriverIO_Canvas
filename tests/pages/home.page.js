const NativePage = require("./native.page.js");
const openCalculatorHomePageData = require("../files/testData/home.data.js");
const fs = require("fs");
var imagePath;
var webElement;
var location = {};

class homePage extends NativePage {
  get openCalculatorHomePageElement() {
    return this.getPage("home.locators");
  }

  openCalculatorHomepage() {
    browser.reloadSession();
    browser.url(openCalculatorHomePageData["url"]);
  }

  switchToiFrame() {
    browser.switchToFrame($(this.openCalculatorHomePageElement.iframe));
  }

  click(clickButton) {
    var clickLocationX;
    var clickLocationY;

    switch (clickButton) {
      case "1":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button1x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button1y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "2":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button2x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button2y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "3":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button3x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button3y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "4":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button4x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button4y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "5":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button5x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button5y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "6":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button6x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button6y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "7":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button7x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button7y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "8":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button8x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button8y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "9":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button9x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button9y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "0":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.button0x.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.button0y.replace(/[^+-\d]+/g, "")
        );
        break;
      case "MC":
      case "Mc":
      case "mc":
      case "mC":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonMCx.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonMCy.replace(/[^+-\d]+/g, "")
        );
        break;
      case "MR":
      case "Mr":
      case "mr":
      case "mR":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonMRx.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonMRy.replace(/[^+-\d]+/g, "")
        );
        break;
      case "M+":
      case "m+":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonMPlusx.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonMPlusy.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "M-":
      case "m-":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonMMinusx.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonMMinusy.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "C":
      case "c":
      case "CE":
      case "Ce":
      case "ce":
      case "cE":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonCx.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonCy.replace(/[^+-\d]+/g, "")
        );
        break;
      case "/":
      case "÷":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonDividex.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonDividey.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "Square Root":
      case "√":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonSquareRootx.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonSquareRooty.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "x":
      case "*":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonMultiplyx.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonMultiplyy.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "-":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonMinusx.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonMinusy.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "%":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonPercentx.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonPercenty.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "1/x":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonMultiplicativeInversex.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonMultiplicativeInversey.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "+":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonPlusx.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonPlusy.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case "=":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonEqualx.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonEqualy.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      case ".":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonDotx.replace(/[^+-\d]+/g, "")
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonDoty.replace(/[^+-\d]+/g, "")
        );
        break;
      case "+/-":
        clickLocationX = parseInt(
          this.openCalculatorHomePageElement.buttonPositiveNegativex.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        clickLocationY = parseInt(
          this.openCalculatorHomePageElement.buttonPositiveNegativey.replace(
            /[^+-\d]+/g,
            ""
          )
        );
        break;
      default:
        clickLocationX = 0;
        clickLocationY = 0;
        break;
    }

    console.log(clickLocationX);
    console.log(clickLocationY);

    $(this.openCalculatorHomePageElement.canvas).click({
      button: 2,
      x: clickLocationX,
      y: clickLocationY,
    });
  }

  keyPress(key) {
    switch (key) {
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "0":
      case "c":
      case "C":
      case "+":
      case "-":
      case "*":
      case "/":
      case "=":
        browser.keys(key);
        break;
      case "x":
        browser.keys("*");
        break;
      default:
        break;
    }
  }
}

module.exports = homePage;
