// https://www.betfair.com/sport/football/brasileiro-s%C3%A9rie-a/13
import { ChainablePromiseArray, ElementArray } from "webdriverio"

class betfair {

  get teamNames (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "team-name")]')}
  get allOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "unner-list-selections")]//li//a//span')}
  // you want the last two in the in the rows of 5
}

export default new betfair()