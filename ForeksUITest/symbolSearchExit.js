this.TakipEttiklerimSymbolSearchPage=$page("Home page",{
    takipEttiklerimSymbolSearchExitButton:'//*[@class="lBottom"]//*[@frks-id="liveSecuriyPricesSymbolSearch"]',
});

this.FavoriEndekslerSymbolSearchPage=$page("Home page",{
    favoriEndekslerSymbolSearchExitButton:'//*[@frks-id="Favori Endeksler"]//*[@frks-id="liveSecuriyPricesSymbolSearch"]',
});

this.BistYukselenlerSymbolSearchPage=$page("Home page",{
    bistYukselenlerSymbolSearchExitButton:'//*[@frks-id="BIST Yükselenler"]//*[@frks-id="open-column-settings"]',
});

var takipEttiklerimSymbolSearchPage=new TakipEttiklerimSymbolSearchPage(driver);
takipEttiklerimSymbolSearchPage.takipEttiklerimSymbolSearchExitButton.click();
takipEttiklerimSymbolSearchPage.waitForIt();

var favoriEndekslerSymbolSearchPage=new FavoriEndekslerSymbolSearchPage(driver);
favoriEndekslerSymbolSearchPage.favoriEndekslerSymbolSearchExitButton.click();
favoriEndekslerSymbolSearchPage.waitForIt();

var bistYukselenlerSymbolSearchPage=new BistYukselenlerSymbolSearchPage(driver);
bistYukselenlerSymbolSearchPage. bistYukselenlerSymbolSearchExitButton.click();
bistYukselenlerSymbolSearchPage.waitForIt();