//https://pixbet.com/prejogo/#league/2417-undefined
import { ChainablePromiseArray, ElementArray } from "webdriverio"

class pixbet {

  get homeTeams (): ChainablePromiseArray<ElementArray> { return $$('')}
  get awayTeams (): ChainablePromiseArray<ElementArray> { return $$('')}
  get homeOdds (): ChainablePromiseArray<ElementArray> { return $$('')}
  get tieOdds (): ChainablePromiseArray<ElementArray> { return $$('')}
  get awayOdds (): ChainablePromiseArray<ElementArray> { return $$('')}

}

export default new pixbet()