// Asset Imports
import {
  CHARACTERS_Tshirt,
  DAUB_BLACK_Tshirt,
  GIORNO_Tshirt,
  GW_JOBROS_Tshirt,
  JOLYNE_AND_STONE_FREE_Tshirt,
  JOLYNE_Tshirt,
  JOSEPH_AND_CAESAR_Tshirt,
  JOSUKE_AND_KOICHI_Tshirt,
  JOTARO_BLUE_Tshirt,
  JOTARO_Cap,
  MUDA_PURPLE_Tshirt,
  PB_BLACK_Tshirt,
  PURPLE_JBA_Hat,
} from "../../data/objects/Clothing";

// Custom Imports
import AddToCartList from "../AddToCartList";

export default function AddAllClothing() {
  AddToCartList("Purple JBA Hat", PURPLE_JBA_Hat);
  AddToCartList("Phantom Blood Black Tee", PB_BLACK_Tshirt);
  AddToCartList("Joseph/Caesar Tshirt", JOSEPH_AND_CAESAR_Tshirt);
  AddToCartList("Characters Tshirt", CHARACTERS_Tshirt);
  AddToCartList("Jotaro Blue Tshirt", JOTARO_BLUE_Tshirt);
  AddToCartList("Muda Purple Tshirt", MUDA_PURPLE_Tshirt);
  AddToCartList("Jotaro Kujo Cap", JOTARO_Cap);
  AddToCartList("Josuke/Koichi Tshirt", JOSUKE_AND_KOICHI_Tshirt);
  AddToCartList("DAUB Black Tshirt", DAUB_BLACK_Tshirt);
  AddToCartList("GW Jobros Tshirt", GW_JOBROS_Tshirt);
  AddToCartList("Giorno Tshirt", GIORNO_Tshirt);
  AddToCartList("Jolyne Tshirt", JOLYNE_Tshirt);
  AddToCartList("Jolyne/Stone-Free Tshirt", JOLYNE_AND_STONE_FREE_Tshirt);
}
