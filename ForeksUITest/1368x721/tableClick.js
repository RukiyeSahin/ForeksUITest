
this.TakipEttiklerimPage=$page("Takip page",{
    hisse:'//*[@class="lBottom"]//*[@class="mCSB_container"]/table//*[@id="live-security-tbody"]//*[@class="widget curpointer live-security-prices-row noselect ng-scope even"][3]',
});

var takipPage = new TakipEttiklerimPage(driver);
takipPage.waitForIt();

takipPage.hisse.click();

this.FavoriEndekslerPage=$page("Favori page",{
    favori:'//*[@frks-id="Favori Endeksler"]//*[@id="live-security-price-id-XU100"]',
});

var favoriPage = new FavoriEndekslerPage(driver);
favoriPage.waitForIt();

favoriPage.favori.click();



