import betanoPage from "../pages/betano.page";

describe('Web scraping betting site', () => {
  it('Scrape Betano betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://br.betano.com/sport/futebol/brasil/brasileirao-serie-a/10016/');
    await browser.pause(2000)
    //Close out pop-up
    const btn = betanoPage.popupBtn;
    await btn.click();
    //Scroll Page to get all of data
    const scrollElement = betanoPage.scrollElement
    scrollElement.scrollIntoView()
    // Verify Data
    const gamesData = await betanoPage.getAllData();
    console.log("Betano")
    console.log("-------")
    console.log(gamesData)
    // Close the session
    await browser.deleteSession();
  });
});
