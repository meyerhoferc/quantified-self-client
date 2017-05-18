const assert    = require('chai').assert;
const webdriver = require('selenium-webdriver');
const test      = require('selenium-webdriver/testing');

test.describe('foods.html', function() {
  let driver;

  test.beforeEach(function() {
    driver = new webdriver.Builder()
    .forBrowser('chrome')
    .build();
  });

  test.afterEach(function() {
    driver.quit();
  });

  test.it('a user should see all available foods', function() {
    driver.get('https://meyerhoferc.github.io/quantified-self-client/foods.html');
    const foodsTableHeaders = driver.findElement({css: 'thead'});
    foodsTableHeaders.getText().then(function(headerText) {
      assert.include(headerText, "Name");
      assert.include(headerText, "Calorie Content");
      assert.include(headerText, "Delete");
    });
  });

  test.it('a user can create a new food with a form', function() {
    driver.get('https://meyerhoferc.github.io/quantified-self-client/foods.html');
    const foodName = driver.findElement({css: '#food-name'});
    const foodCalories = driver.findElement({css: '#food-calories'});
    const submitButton = driver.findElement({css: '#create-food-button'});
    foodName.sendKeys('apple');
    foodCalories.sendKeys('50');
    submitButton.click();

    const newFood = driver.findElement({css: 'tbody'});
    newFood.getText().then(function(foodText) {
      assert.include(foodText, 'apple');
      assert.include(foodText, '50');
    });
  });

  test.xit('a user can delete a food', function() {
    driver.get('https://meyerhoferc.github.io/quantified-self-client/foods.html');
    const targetFood = driver.findElement({css: '#apple'});
    targetFood.getText().then(function(targetText) {
      console.log(targetText)
    })
  })
});
