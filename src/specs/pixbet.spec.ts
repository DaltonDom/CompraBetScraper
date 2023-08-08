import pixbet from "../pages/pixbet.page";

describe('Web scraping betting site', () => {
  it('Scrape Pixbet betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://pixbet.com/prejogo/#league/2417-undefined');
    await browser.pause(2000)

    // Verify Data
    const gamesData = await pixbet.getAllData();
    console.log("Pixbet")
    console.log("-------")
    console.log(gamesData);

    // Close the session
    await browser.deleteSession();
  });
});
