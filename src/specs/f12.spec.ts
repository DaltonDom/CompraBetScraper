import f12Page from "../pages/f12.page";

describe('Web scraping betting site', () => {
  it('Scrape F12 betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://f12.bet/prejogo/#league/2417-undefined');
    await browser.pause(2000)
    // Store each match data
    const gamesData = [];
    // Extract information from the website
    const homeTeamArray = await f12Page.homeTeams
    const len = homeTeamArray.length

    for(let i = 0; i < len; i++) {
      const gameEntry = {
        homeTeam: await homeTeamArray[i].getText(),
        awayTeam: await f12Page.awayTeams[i].getText()
      }
      gamesData.push(gameEntry)
    }

    // Verify Data
    console.log(gamesData)
    // Close the session
    await browser.deleteSession();
  });
});
