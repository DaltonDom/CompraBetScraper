import { ChainablePromiseArray, ElementArray } from "webdriverio"

class betano {

  get teamNames (): ChainablePromiseArray<ElementArray> { return $$('//*[@class="events-list__grid__info__main__participants__participant-name  tw-truncate"]')}
  async getHomeTeamNames(): Promise<any[]>
  {
    let teamsArray = await this.teamNames;

    const gamesData = [];
    const length = teamsArray.length;

    for(let i = 0; i < length; i++) {
      if (i % 2 == 0) {
        gamesData.push(teamsArray[i].getText())
      }
    }
    return gamesData
  }

  async getAwayTeamNames(): Promise<any[]>
  {
    let teamsArray = await this.teamNames;

    const gamesData = [];
    const length = teamsArray.length;

    for(let i = 0; i < length; i++) {
      if (i % 2 != 0) {
        gamesData.push(teamsArray[i].getText())
      }
    }
    return gamesData
  }

  get homeOdds (): ChainablePromiseArray<ElementArray> { return $$('//button[contains(@class, "selections__selection selections__selection--columns-4 GTM-selection-add") and contains(@aria-label, "Bet on 1") ]//span')}
  get tieOdds (): ChainablePromiseArray<ElementArray> { return $$('//button[contains(@class, "selections__selection selections__selection--columns-4 GTM-selection-add") and contains(@aria-label, "Bet on X") ]//span')}
  get awayOdds (): ChainablePromiseArray<ElementArray> { return $$('//button[contains(@class, "selections__selection selections__selection--columns-4 GTM-selection-add") and contains(@aria-label, "Bet on 2") ]//span')}

  async getAllData(): Promise<any[]>
  {
    let homeTeamsArray = await this.getHomeTeamNames();
    let awayTeamsArray = await this.getAwayTeamNames();
    let homeOddsArray = await this.homeOdds;
    let tieOddsArray = await this.tieOdds;
    let awayOddsArray = await this.awayOdds;

    const gamesData = [];
    const length = homeTeamsArray.length;

    for(let i = 0; i < length; i++) {
      const gameEntry = {
        HomeTeam: await homeTeamsArray[i],
        AwayTeam: await awayTeamsArray[i],
        HomeWin: await homeOddsArray[i].getText(),
        Tie: await tieOddsArray[i].getText(),
        AwayWin: await awayOddsArray[i].getText()
      }
      gamesData.push(gameEntry)
    }
    return gamesData
  }

}

export default new betano()