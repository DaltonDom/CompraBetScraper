import { ChainablePromiseArray, ElementArray } from "webdriverio"

class pixbet {

  get teamNames (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "asb-text _asb_events-table-row-competitors-inline-competitor-name ")]//div')}
  get allOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "asb-flex-cc asb-unshrink _asb_price-block-content-price")]')}

}

export default new pixbet()