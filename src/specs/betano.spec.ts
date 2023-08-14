import betanoPage from "../pages/betano.page";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, set } from "firebase/database";

describe('Web scraping betting site', () => {
  it('Scrape Betano betting', async () => {

    // Navigate to the website you want to scrape
    await browser.url('https://br.betano.com/sport/futebol/brasil/brasileirao-serie-a/10016/');
    await browser.pause(2000)
    //Close out pop-up
    const btn = betanoPage.popupBtn;
    await btn.click();
    //Scroll Page to get all of data
    const scrollElement = betanoPage.scrollElement
    scrollElement.scrollIntoView()
    // Verify Data
    const gamesData = await betanoPage.getAllData();
    console.log("Betano")
    console.log("-------")
    console.log(gamesData)

    const firebaseConfig = {
      databaseURL: "https://betchecker-ca000-default-rtdb.firebaseio.com/",
    };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    // Initialize Realtime Database and get a reference to the service
    const db = getDatabase(app);
    // Set the new capture data to f12 in data
    await set(ref(db, 'betano/'), gamesData);
    // Close the session
    await browser.deleteSession();
  });
});
