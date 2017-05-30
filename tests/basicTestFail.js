module.exports = {
  'basicTestFail' : function (browser) {
    browser
      .url('https://the-internet.herokuapp.com/login')
      .pause(1000)
      .setValue('input[type=text]',"tomsmith")
      .setValue('input[type=password]',"SuperSecretPassword")
      .click('button[type=submit]')
      .pause(1000)
      .assert.containsText('h2','Secure Area')
      .end();
  }
};
