import betmotion from "../pages/betmotion.page";

describe('Web scraping betting site', () => {
  it('Scrape Betmotion betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://www.betmotion.com/en/sports-betting#/tree/all/66/0/11318/0/odds/byleague');
    await browser.pause(2000)

    // Verify Data
    const gamesData = await betmotion.getAllData();
    console.log("Betmotion")
    console.log("-------")
    console.log(gamesData);

    // Close the session
    await browser.deleteSession();
  });
});
