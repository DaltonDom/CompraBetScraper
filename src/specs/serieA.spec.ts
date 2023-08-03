import serieA from "../pages/serieA.page";

describe('Web scraping betting site', () => {
  it('Scrape Serie A betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://f12.bet/prejogo/#league/2417-undefined');
    await browser.pause(2000)

    // Verify Data
    const gamesData = await serieA.getAllData();
    console.log("Serie A")
    console.log("-------")
    console.log(gamesData);

    // Close the session
    await browser.deleteSession();
  });
});
