import { ChainablePromiseArray, ElementArray } from "webdriverio"

class betano {

  get teamNames (): ChainablePromiseArray<ElementArray> { return $$('//*[@class="events-list__grid__info__main__participants__participant-name  tw-truncate"]')}
  get homeOdds (): ChainablePromiseArray<ElementArray> { return $$('//button[contains(@class, "selections__selection selections__selection--columns-4 GTM-selection-add") and contains(@aria-label, "Bet on 1") ]//span')}
  get tieOdds (): ChainablePromiseArray<ElementArray> { return $$('//button[contains(@class, "selections__selection selections__selection--columns-4 GTM-selection-add") and contains(@aria-label, "Bet on X") ]//span')}
  get awayOdds (): ChainablePromiseArray<ElementArray> { return $$('//button[contains(@class, "selections__selection selections__selection--columns-4 GTM-selection-add") and contains(@aria-label, "Bet on 2") ]//span')}

}

export default new betano()