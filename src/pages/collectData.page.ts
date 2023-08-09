
class collectData {

  filePath() {
    return ['./src/specs/betano.spec.ts',
    './src/specs/betfair.spec.ts',
    './src/specs/betmotion.spec.ts',
    './src/specs/copaDoBrasil.spec.ts',
    './src/specs/f12.spec.ts',
    './src/specs/pixbet.spec.ts',
    './src/specs/serieA.spec.ts']
  }

  const collectedData = [];

  runCollectionSpecs() {
    this.filePath().forEach(specPath => {
      const specData = browser.call(() => {
        // Run the spec and collect data
        // You can use browser.call to execute code in the browser context
        // and return the data you need
        return require(specPath).collectData();
      });

      collectedData.push(specData);
    });
  }

  // Write collected data to a JSON file
  fs.writeFileSync('collectedData.json', JSON.stringify(collectedData, null, 2));
}

export default new collectData()