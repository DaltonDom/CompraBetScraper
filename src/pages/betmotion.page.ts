import { ChainablePromiseArray, ElementArray } from "webdriverio"

class pixbet {

  get teamNames (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "asb-text _asb_events-table-row-competitors-inline-competitor-name ")]//div')}
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

  get allOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "asb-flex-cc asb-unshrink _asb_price-block-content-price")]')}
  async getHomeOdds(): Promise<any[]>
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
  async getTieOdds(): Promise<any[]>
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
  async getAwayOdds(): Promise<any[]>
  {
    let oddsArray = await this.allOdds;

    const gamesData = [];
    const length = oddsArray.length;

    for(let i = 0; i < length; i++) {
      if (i % 4 == 0) {
        gamesData.push(oddsArray[i].getText())
      }
    }
    return gamesData
  }
}

export default new pixbet()