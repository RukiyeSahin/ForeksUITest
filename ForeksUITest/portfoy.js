this.BrokerPage=$page("Home page",{
    connectButton:'//*[@frks-id="openOrderBuy"]',
});

this.MarbasPage=$page("Home page",{
    marbasButton:'//*[@id="trade-pool-broker-select-portal"]/div/div/div/div[3]/div/div[3]/div[2]/div',
});

this.BrokerLoginPage=$page("Home page",{
    logintext:"input[frks-id='brokerLoginText']",
    username:"input[frks-id='brokerUserText']",
    password:"input[frks-id='brokerUserPassButton']",
    riskButton:'//*[@id="TradePoolBrokerUserSelect"]/broker-user-login/div/div[2]/div/div[5]/div[1]/label',
    loginButton:"button[frks-id='brokerUserLogin']"
});

this.ExitPage=$page("Home page",{
    exitButton:'//*[@class="css-view-1dbjc4n r-position-u8s1d r-right-zchlnj r-top-ipm5af"]',
});

var brokerPage=new BrokerPage(driver);
brokerPage.connectButton.click();
brokerPage.waitForIt();

var marbasPage=new MarbasPage(driver);
marbasPage.marbasButton.click();

var brokerLoginPage=new BrokerLoginPage(driver);
brokerLoginPage.logintext.typeText("2770");
brokerLoginPage.username.typeText("aliaga");
brokerLoginPage.password.typeText("998877");
brokerLoginPage.riskButton.click();
brokerLoginPage.loginButton.click();

var exitPage= new ExitPage(driver);
brokerPage.waitForIt();
exitPage.exitButton.click();
