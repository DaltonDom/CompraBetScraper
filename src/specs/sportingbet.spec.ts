import sportingbet from "../pages/sportingbet.page";

describe('Web scraping betting site', () => {
  it('Scrape Sportingbet betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://sports.sportingbet.com/pt-br/sports/futebol-4/aposta/brasil-33/brasileir%C3%A3o-s%C3%A9rie-a-102838');
    await browser.pause(2000)

    //Close out pop-up
    const btn = sportingbet.popupBtn;
    await btn.click();

    //Wait for element
    await sportingbet.waitLabel.waitForDisplayed({ timeout: 9000 })

    // Verify Data
    const gamesData = await sportingbet.getAllData();
    console.log("Sporting Bet")
    console.log("-------")
    console.log(gamesData);

    // Close the session
    await browser.deleteSession();
  });
});
