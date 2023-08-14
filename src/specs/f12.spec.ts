import f12Page from "../pages/f12.page";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

describe('Web scraping betting site', () => {
  it('Scrape F12 betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://f12.bet/prejogo/#league/2417-undefined');
    await browser.pause(2000)

    // Verify Data
    const gamesData = await f12Page.getAllData();
    console.log("F12")
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
    await set(ref(db, 'f12/'), gamesData);
    // Close the session
    await browser.deleteSession();
  });
});
