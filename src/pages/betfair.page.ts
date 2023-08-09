// https://www.betfair.com/sport/football/brasileiro-s%C3%A9rie-a/13
import { ChainablePromiseArray, ElementArray } from "webdriverio"

class betfair {

  get teamNames (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "team-name")]')}
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

  get allOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "ui-runner-price")]')}

  async getHomeOdds(): Promise<any[]>
  {
    let oddsArray = await this.allOdds;

    const gamesData = [];
    const length = oddsArray.length;

    for(let i = 2; i < length; i = i + 5) {
      gamesData.push(oddsArray[i].getText())
    }
    return gamesData
  }
  async getTieOdds(): Promise<any[]>
  {
    let oddsArray = await this.allOdds;

    const gamesData = [];
    const length = oddsArray.length;

    for(let i = 3; i < length; i = i + 5) {
      gamesData.push(oddsArray[i].getText())
    }
    return gamesData
  }
  async getAwayOdds(): Promise<any[]>
  {
    let oddsArray = await this.allOdds;

    const gamesData = [];
    const length = oddsArray.length;

    for(let i = 4; i < length; i = i + 5) {
      gamesData.push(oddsArray[i].getText())
    }
    return gamesData
  }

  async getAllData(): Promise<any[]>
  {
    let homeTeamsArray = await this.getHomeTeamNames();
    let awayTeamsArray = await this.getAwayTeamNames();
    let homeOddsArray = await this.getHomeOdds();
    let tieOddsArray = await this.getTieOdds();
    let awayOddsArray = await this.getAwayOdds();

    const gamesData = [];
    const length = homeTeamsArray.length;

    for(let i = 0; i < length; i++) {
      const gameEntry = {
        HomeTeam: await homeTeamsArray[i],
        AwayTeam: await awayTeamsArray[i],
        HomeWin: await homeOddsArray[i],
        Tie: await tieOddsArray[i],
        AwayWin: await awayOddsArray[i]
      }
      gamesData.push(gameEntry)
    }
    return gamesData
  }

}

export default new betfair()