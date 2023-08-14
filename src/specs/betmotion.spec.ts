import betmotion from "../pages/betmotion.page";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

describe('Web scraping betting site', () => {
  it('Scrape Betmotion betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://www.betmotion.com/en/sports-betting#/tree/all/66/0/11318/0/odds/byleague');
    await browser.pause(2000)

    // Verify Data
    const gamesData = await betmotion.getAllData();
    console.log("Betmotion")
    console.log("-------")
    console.log(gamesData);

    const firebaseConfig = {
      databaseURL: "https://betchecker-ca000-default-rtdb.firebaseio.com/",
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
    const db = getDatabase(app);
    // Set the new capture data to f12 in data
    await set(ref(db, 'betmotion/'), gamesData);
    // Close the session
    await browser.deleteSession();
  });
});
