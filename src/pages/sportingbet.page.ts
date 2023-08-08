//https://sports.sportingbet.com/pt-br/sports/futebol-4/aposta/brasil-33/brasileir%C3%A3o-s%C3%A9rie-a-102838
import { ChainablePromiseArray, ChainablePromiseElement,  ElementArray } from "webdriverio"

class sportingbet {

  get teamNames (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "participant ng-star-inserted")]')}
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

  get allOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "option option-value ng-star-inserted")]//ms-font-resizer')}
  async getHomeOdds(): Promise<any[]>
  {
    let oddsArray = await this.allOdds;

    const gamesData = [];
    const length = oddsArray.length;

    for(let i = 0; i < length; i++) {
      if (i % 1 == 0) {
        gamesData.push(oddsArray[i].getText())
      }
    }
    return gamesData
  }

  async getTieOdds(): Promise<any[]>
  {
    let oddsArray = await this.allOdds;

    const gamesData = [];
    const length = oddsArray.length;

    for(let i = 0; i < length; i++) {
      if (i % 2 == 0) {
        gamesData.push(oddsArray[i].getText())
      }
    }
    return gamesData
  }

  async getAwayOdds(): Promise<any[]>
  {
    let oddsArray = await this.allOdds;

    const gamesData = [];
    const length = oddsArray.length;

    for(let i = 0; i < length; i++) {
      if (i % 3 == 0) {
        gamesData.push(oddsArray[i].getText())
      }
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
        HomeTeam: await homeTeamsArray[i].getText(),
        AwayTeam: await awayTeamsArray[i].getText(),
        HomeWin: await homeOddsArray[i].getText(),
        Tie: await tieOddsArray[i].getText(),
        AwayWin: await awayOddsArray[i].getText()
      }
      gamesData.push(gameEntry)
    }
    return gamesData
  }

  get popupBtn (): ChainablePromiseElement<any> { return $('//*[@id="messages-with-overlay"]/div/vn-content-message/div/span')}
  get waitLabel (): ChainablePromiseElement<any> { return $('//*[contains(@class, "league-heading-title")]')}

}

export default new sportingbet()