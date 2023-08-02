import { ChainablePromiseArray, ElementArray } from "webdriverio"

class f12 {

  get homeTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor1"]')}
  get awayTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor2"]')}
  get homeOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "_1 odd")]//a//span')}
  get tieOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "_2 odd")]//a//span')}
  get awayOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "_3 odd")]//a//span')}

  async getAllData(): Promise<any[]>
  {
    let homeTeamsArray = await this.homeTeams;
    let awayTeamsArray = await this.awayTeams;
    let homeOddsArray = await this.homeOdds;

    const gamesData = [];
    const length = homeTeamsArray.length;

    for(let i = 0; i < length; i++) {
      const gameEntry = {
        HomeTeam: await homeTeamsArray[i].getText(),
        AwayTeam: await awayTeamsArray[i].getText(),
        HomeWin: await homeOddsArray[i].getText()
      }
      gamesData.push(gameEntry)
    }
    return gamesData
  }
}

export default new f12()