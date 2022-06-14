
this.TakipEttiklerimPage=$page("Takip page",{
    hisse:'//*[@id="live-security-price-id-GARAN"]',
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



