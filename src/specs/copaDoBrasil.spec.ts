import copaDoBrasil from "../pages/copaDoBrasil.page";

describe('Web scraping betting site', () => {
  it('Scrape Copa Do Brasil betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://f12.bet/prejogo/#league/1306-undefined');
    await browser.pause(2000)

    // Verify Data
    const gamesData = await copaDoBrasil.getAllData();
    console.log("Copa Do Brasil")
    console.log("-------")
    console.log(gamesData);

    // Close the session
    await browser.deleteSession();
  });
});
