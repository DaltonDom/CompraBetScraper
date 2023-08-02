// https://f12.bet/prejogo/#league/2417-undefined
import { ChainablePromiseArray, ElementArray } from "webdriverio"

class copaDoBrasil {

  get homeTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor1"]')}
  get awayTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor2"]')}
  get time (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "evdt_date")]')}
  get date (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "evdt_time")]')}

}

export default new copaDoBrasil()