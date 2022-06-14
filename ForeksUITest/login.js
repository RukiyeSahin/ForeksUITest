 
this.LoginPage=$page("Login page",{
    username:"input[frks-id='loginUserName']",
    password:"input[frks-id='loginPassword']",
    loginButton:"input[frks-id='home-login-btn']"
});

var loginPage = new  LoginPage(driver);
loginPage.waitForIt();

loginPage.username.typeText("rukiye.sahin@foreks.com");
loginPage.password.typeText("407451");
loginPage.loginButton.click();


