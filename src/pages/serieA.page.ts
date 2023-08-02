// https://www.betfair.com/sport/football/brasileiro-s%C3%A9rie-a/13
import { ChainablePromiseArray, ElementArray } from "webdriverio"

class serieA {

  get homeTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor1"]')}
  get awayTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor2"]')}
  get time (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "evdt_date")]')}
  get date (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "evdt_time")]')}

}

export default new serieA()