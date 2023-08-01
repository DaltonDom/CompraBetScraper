import { ChainablePromiseArray, ElementArray } from "webdriverio"

class f12 {

  get homeTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor1"]')}
  get awayTeams (): ChainablePromiseArray<ElementArray> { return $$('//a[starts-with(@href, "#event/") and not(@id) and not(@class)]//span[@class="competitor2"]')}
  get homeOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[starts-with(@class, "ev_sel_odd odd_")]//a//span[@class="odd"]')}
  get tieOdds (): ChainablePromiseArray<ElementArray> { return $$('')}
  get awayOdds (): ChainablePromiseArray<ElementArray> { return $$('')}

}

export default new f12()