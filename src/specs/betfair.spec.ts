import betfair from "../pages/betfair.page";

describe('Web scraping betting site', () => {
  it('Scrape Betfair betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://www.betfair.com/sport/football/brazilian-serie-a/13');
    await browser.pause(2000)

    // Verify Data
    const gamesData = await betfair.getAllData();
    console.log("Betfair")
    console.log("-------")
    console.log(gamesData);

    // Close the session
    await browser.deleteSession();
  });
});
