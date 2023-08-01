
describe('Web scraping betting site', () => {
  it('Scrape F12 betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://f12.bet/prejogo/#league/2417-undefined');

    // Extract information from the website
    const title = await browser.getTitle();

    console.log('Website Title:', title);

    // Close the session
    await browser.deleteSession();
  });
});
