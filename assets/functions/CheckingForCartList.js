// Asset Imports
import { CartList } from "../data/arrays/CartList";
import {
  CHARACTERS_Tshirt,
  DAUB_BLACK_Tshirt,
  GIORNO_Tshirt,
  GW_JOBROS_Tshirt,
  JOLYNE_Tshirt,
  JOLYNE_AND_STONE_FREE_Tshirt,
  JOSEPH_AND_CAESAR_Tshirt,
  JOSUKE_AND_KOICHI_Tshirt,
  JOTARO_BLUE_Tshirt,
  JOTARO_Cap,
  MUDA_PURPLE_Tshirt,
  PB_BLACK_Tshirt,
  PURPLE_JBA_Hat,
} from "../data/objects/Clothing";
import {
  BT_Caesar,
  BT_Joseph,
  BT_Kars,
  DAUB_CrazyDiamond,
  DAUB_Josuke,
  DAUB_Kira,
  GW_Diavolo,
  GW_Giorno,
  GW_GoldenExperienceR,
  PB_Dio,
  PB_Jonathan,
  PB_Will,
  SDC_Dio,
  SDC_Jotaro,
  SDC_StarPlatinum,
  SO_Jolyne,
  SO_Pucci,
  SO_StoneFree,
} from "../data/objects/Figures";
import {
  BT_Set,
  BT_Vol_1,
  BT_Vol_2,
  BT_Vol_3,
  BT_Vol_4,
  DAUB_Set,
  DAUB_Vol_1,
  DAUB_Vol_2,
  DAUB_Vol_3,
  DAUB_Vol_4,
  DAUB_Vol_5,
  DAUB_Vol_6,
  DAUB_Vol_7,
  DAUB_Vol_8,
  DAUB_Vol_9,
  GW_Set,
  GW_Vol_1,
  GW_Vol_10,
  GW_Vol_2,
  GW_Vol_3,
  GW_Vol_4,
  GW_Vol_5,
  GW_Vol_6,
  GW_Vol_7,
  GW_Vol_8,
  GW_Vol_9,
  PB_Set,
  PB_Vol_1,
  PB_Vol_2,
  PB_Vol_3,
  SDC_Set,
  SDC_Vol_1,
  SDC_Vol_10,
  SDC_Vol_2,
  SDC_Vol_3,
  SDC_Vol_4,
  SDC_Vol_5,
  SDC_Vol_6,
  SDC_Vol_7,
  SDC_Vol_8,
  SDC_Vol_9,
  SO_Set,
  SO_Vol_1,
  SO_Vol_10,
  SO_Vol_11,
  SO_Vol_2,
  SO_Vol_3,
  SO_Vol_4,
  SO_Vol_5,
  SO_Vol_6,
  SO_Vol_7,
  SO_Vol_8,
  SO_Vol_9,
} from "../data/objects/Manga";

const ISSERVER = typeof window === "undefined"; // Prevents defined error

// This will be used to grab each individual item
function checkForCartItem(cookie, object) {
  if (localStorage.getItem(cookie) && !CartList.indexOf(object) > -1) {
    CartList.push(object);
  }
}

// Creating a console total price
var i, consoleTotalPrice;
function getConsoleTotalPrice() {
  const consolePrices = [];

  for (i = 0; i < CartList.length; i++) {
    consolePrices.push(CartList[i].price);
  }

  consoleTotalPrice = 0;
  for (i = 0; i < consolePrices.length; i++) {
    consoleTotalPrice += consolePrices[i];
  }

  return consoleTotalPrice;
}

// Displaying the console total price
function logConsoleTotal() {
  const finalConsoleTotal = Math.round(consoleTotalPrice * 100) / 100;
  console.log("Current Cart Total: $" + finalConsoleTotal);
}

export default function CheckingForCartList() {
  if (!ISSERVER) {
    CartList.length = 0; // This will prevent increasing when routing and will help refresh

    // Figures
    checkForCartItem("Dio Brando - PB", PB_Dio);
    checkForCartItem("Jonathan Joestar - PB", PB_Jonathan);
    checkForCartItem("William-a-Zeppeli - PB", PB_Will);
    checkForCartItem("Joseph Joestar - BT", BT_Joseph);
    checkForCartItem("Caesar Zeppeli - BT", BT_Caesar);
    checkForCartItem("Kars - BT", BT_Kars);
    checkForCartItem("Jotaro Kujo - SDC", SDC_Jotaro);
    checkForCartItem("Star Platinum - SDC", SDC_StarPlatinum);
    checkForCartItem("Dio Brando - SDC", SDC_Dio);
    checkForCartItem("Josuke Higashikata - DAUB", DAUB_Josuke);
    checkForCartItem("Crazy Diamond - DAUB", DAUB_CrazyDiamond);
    checkForCartItem("Kira Yoshikage - DAUB", DAUB_Kira);
    checkForCartItem("Giorno Giovanna - GW", GW_Giorno);
    checkForCartItem("Golden Experience R. - GW", GW_GoldenExperienceR);
    checkForCartItem("Diavolo - GW", GW_Diavolo);
    checkForCartItem("Jolyne Kujo - SO", SO_Jolyne);
    checkForCartItem("Stone Free - SO", SO_StoneFree);
    checkForCartItem("Enrico Pucci - SO", SO_Pucci);

    // Manga
    checkForCartItem("Phantom Blood Set", PB_Set);
    checkForCartItem("Phantom Blood Vol 1", PB_Vol_1);
    checkForCartItem("Phantom Blood Vol 2", PB_Vol_2);
    checkForCartItem("Phantom Blood Vol 3", PB_Vol_3);
    checkForCartItem("Battle Tendency Set", BT_Set);
    checkForCartItem("Battle Tendency Vol 1", BT_Vol_1);
    checkForCartItem("Battle Tendency Vol 2", BT_Vol_2);
    checkForCartItem("Battle Tendency Vol 3", BT_Vol_3);
    checkForCartItem("Battle Tendency Vol 4", BT_Vol_4);
    checkForCartItem("Stardust Crusaders Set", SDC_Set);
    checkForCartItem("Stardust Crusaders Vol 1", SDC_Vol_1);
    checkForCartItem("Stardust Crusaders Vol 2", SDC_Vol_2);
    checkForCartItem("Stardust Crusaders Vol 3", SDC_Vol_3);
    checkForCartItem("Stardust Crusaders Vol 4", SDC_Vol_4);
    checkForCartItem("Stardust Crusaders Vol 5", SDC_Vol_5);
    checkForCartItem("Stardust Crusaders Vol 6", SDC_Vol_6);
    checkForCartItem("Stardust Crusaders Vol 7", SDC_Vol_7);
    checkForCartItem("Stardust Crusaders Vol 8", SDC_Vol_8);
    checkForCartItem("Stardust Crusaders Vol 9", SDC_Vol_9);
    checkForCartItem("Stardust Crusaders Vol 10", SDC_Vol_10);
    checkForCartItem("Diamonds Set", DAUB_Set);
    checkForCartItem("Diamonds are Unbreakable Vol 1", DAUB_Vol_1);
    checkForCartItem("Diamonds are Unbreakable Vol 2", DAUB_Vol_2);
    checkForCartItem("Diamonds are Unbreakable Vol 3", DAUB_Vol_3);
    checkForCartItem("Diamonds are Unbreakable Vol 4", DAUB_Vol_4);
    checkForCartItem("Diamonds are Unbreakable Vol 5", DAUB_Vol_5);
    checkForCartItem("Diamonds are Unbreakable Vol 6", DAUB_Vol_6);
    checkForCartItem("Diamonds are Unbreakable Vol 7", DAUB_Vol_7);
    checkForCartItem("Diamonds are Unbreakable Vol 8", DAUB_Vol_8);
    checkForCartItem("Diamonds are Unbreakable Vol 9", DAUB_Vol_9);
    checkForCartItem("Golden Wind Set", GW_Set);
    checkForCartItem("Golden Wind Vol 1", GW_Vol_1);
    checkForCartItem("Golden Wind Vol 2", GW_Vol_2);
    checkForCartItem("Golden Wind Vol 3", GW_Vol_3);
    checkForCartItem("Golden Wind Vol 4", GW_Vol_4);
    checkForCartItem("Golden Wind Vol 5", GW_Vol_5);
    checkForCartItem("Golden Wind Vol 6", GW_Vol_6);
    checkForCartItem("Golden Wind Vol 7", GW_Vol_7);
    checkForCartItem("Golden Wind Vol 8", GW_Vol_8);
    checkForCartItem("Golden Wind Vol 9", GW_Vol_9);
    checkForCartItem("Golden Wind Vol 10", GW_Vol_10);
    checkForCartItem("Stone Ocean Set", SO_Set);
    checkForCartItem("Stone Ocean Vol 1", SO_Vol_1);
    checkForCartItem("Stone Ocean Vol 2", SO_Vol_2);
    checkForCartItem("Stone Ocean Vol 3", SO_Vol_3);
    checkForCartItem("Stone Ocean Vol 4", SO_Vol_4);
    checkForCartItem("Stone Ocean Vol 5", SO_Vol_5);
    checkForCartItem("Stone Ocean Vol 6", SO_Vol_6);
    checkForCartItem("Stone Ocean Vol 7", SO_Vol_7);
    checkForCartItem("Stone Ocean Vol 8", SO_Vol_8);
    checkForCartItem("Stone Ocean Vol 9", SO_Vol_9);
    checkForCartItem("Stone Ocean Vol 10", SO_Vol_10);
    checkForCartItem("Stone Ocean Vol 11", SO_Vol_11);

    // Clothing
    checkForCartItem("Purple JBA Hat", PURPLE_JBA_Hat);
    checkForCartItem("Phantom Blood Black Tee", PB_BLACK_Tshirt);
    checkForCartItem("Joseph/Caesar Tshirt", JOSEPH_AND_CAESAR_Tshirt);
    checkForCartItem("Characters Tshirt", CHARACTERS_Tshirt);
    checkForCartItem("Jotaro Blue Tshirt", JOTARO_BLUE_Tshirt);
    checkForCartItem("Muda Purple Tshirt", MUDA_PURPLE_Tshirt);
    checkForCartItem("Jotaro Kujo Cap", JOTARO_Cap);
    checkForCartItem("Josuke/Koichi Tshirt", JOSUKE_AND_KOICHI_Tshirt);
    checkForCartItem("DAUB Black Tshirt", DAUB_BLACK_Tshirt);
    checkForCartItem("GW Jobros Tshirt", GW_JOBROS_Tshirt);
    checkForCartItem("Giorno Tshirt", GIORNO_Tshirt);
    checkForCartItem("Jolyne Tshirt", JOLYNE_Tshirt);
    checkForCartItem("Jolyne/Stone-Free Tshirt", JOLYNE_AND_STONE_FREE_Tshirt);

    getConsoleTotalPrice();
    logConsoleTotal();
  }
}
