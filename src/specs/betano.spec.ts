import betanoPage from "../pages/betano.page";

describe('Web scraping betting site', () => {
  it('Scrape Betano betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://br.betano.com/sport/futebol/brasil/brasileirao-serie-a/10016/');
    await browser.pause(2000)
    // Store each match data
    
    // Extract information from the website
    const checkArr = await betanoPage.teamNames
    const len = checkArr.length

    for(let i = 0; i < len; i++) {
      if(i % 2 == 0) {
        console.log("even:" + await checkArr[i].getText());
      } else {
        console.log("odd:" + await checkArr[i].getText());
      }
    }

    // Verify Data
    //console.log(gamesData)
    // Close the session
    await browser.deleteSession();
  });
});
