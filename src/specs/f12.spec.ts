import f12Page from "../pages/f12.page";

describe('Web scraping betting site', () => {
  it('Scrape F12 betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://f12.bet/prejogo/#league/2417-undefined');
    await browser.pause(2000)

    // Verify Data
    const gamesData = await f12Page.getAllData();
    //console.log(gamesData);

    // Close the session
    await browser.deleteSession();
  });
});
