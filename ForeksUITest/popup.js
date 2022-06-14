 
this.HomePage=$page("Home page",{
    closeButton:'//*[@class="close"]',
    popupButton:"//button[contains(@class,'ok')]"
});

var homePage = new  HomePage(driver);
homePage.waitForIt();

homePage.closeButton.click();
homePage.popupButton.click();


