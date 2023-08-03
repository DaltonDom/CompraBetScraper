// https://www.betfair.com/sport/football/brasileiro-s%C3%A9rie-a/13
import { ChainablePromiseArray, ElementArray } from "webdriverio"

class serieA {

  get homeTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor1"]')}
  get awayTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor2"]')}
  get time (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "evdt_date")]')}
  get date (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "evdt_time")]')}

  async getAllData(): Promise<any[]>
  {
    let homeTeamsArray = await this.homeTeams;
    let awayTeamsArray = await this.awayTeams;
    let timeArray = await this.time;
    let dateArray = await this.date;

    const gamesData = [];
    const length = homeTeamsArray.length;

    for(let i = 0; i < length; i++) {
      const gameEntry = {
        HomeTeam: await homeTeamsArray[i].getText(),
        AwayTeam: await awayTeamsArray[i].getText(),
        Time: await timeArray[i].getText(),
        Date: await dateArray[i].getText(),
      }
      gamesData.push(gameEntry)
    }
    return gamesData
  }
}

export default new serieA()