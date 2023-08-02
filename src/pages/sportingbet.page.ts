//https://sports.sportingbet.com/pt-br/sports/futebol-4/aposta/brasil-33/brasileir%C3%A3o-s%C3%A9rie-a-102838
import { ChainablePromiseArray, ElementArray } from "webdriverio"

class sportingbet {

  get teamNames (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "participant ng-star-inserted")]')}
  get allOdds (): ChainablePromiseArray<ElementArray> { return $$('//*[contains(@class, "option option-value ng-star-inserted")]//ms-font-resizer')}

}

export default new sportingbet()