this.TakipEttiklerimSymbolSearchPage=$page("Home page",{
    takipEttiklerimSymbolSearchButton:'//*[@class="lBottom"]//*[@frks-id="liveSecuriyPricesSymbolSearch"]',
});

this.FavoriEndekslerSymbolSearchPage=$page("Home page",{
    favoriEndekslerSymbolSearchButton:'//*[@frks-id="Favori Endeksler"]//*[@frks-id="liveSecuriyPricesSymbolSearch"]',
});

this.BistYukselenlerSymbolSearchPage=$page("Home page",{
    bistYukselenlerSymbolSearchButton:'//*[@frks-id="BIST Yükselenler"]//*[@frks-id="open-column-settings"]',
});

var takipEttiklerimSymbolSearchPage=new TakipEttiklerimSymbolSearchPage(driver);
takipEttiklerimSymbolSearchPage.takipEttiklerimSymbolSearchButton.click();
takipEttiklerimSymbolSearchPage.waitForIt();

var favoriEndekslerSymbolSearchPage=new FavoriEndekslerSymbolSearchPage(driver);
favoriEndekslerSymbolSearchPage.favoriEndekslerSymbolSearchButton.click();
favoriEndekslerSymbolSearchPage.waitForIt();

var bistYukselenlerSymbolSearchPage=new BistYukselenlerSymbolSearchPage(driver);
bistYukselenlerSymbolSearchPage. bistYukselenlerSymbolSearchButton.click();
bistYukselenlerSymbolSearchPage.waitForIt();