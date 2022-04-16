// Asset Imports
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
} from "../../data/objects/Figures";

// Custom Imports
import AddToCartList from "../AddToCartList";

export default function AddAllFigures() {
  AddToCartList("Dio Brando - PB", PB_Dio);
  AddToCartList("Jonathan Joestar - PB", PB_Jonathan);
  AddToCartList("William-a-Zeppeli - PB", PB_Will);
  AddToCartList("Joseph Joestar - BT", BT_Joseph);
  AddToCartList("Caesar Zeppeli - BT", BT_Caesar);
  AddToCartList("Kars - BT", BT_Kars);
  AddToCartList("Jotaro Kujo - SDC", SDC_Jotaro);
  AddToCartList("Star Platinum - SDC", SDC_StarPlatinum);
  AddToCartList("Dio Brando - SDC", SDC_Dio);
  AddToCartList("Josuke Higashikata - DAUB", DAUB_Josuke);
  AddToCartList("Crazy Diamond - DAUB", DAUB_CrazyDiamond);
  AddToCartList("Kira Yoshikage - DAUB", DAUB_Kira);
  AddToCartList("Giorno Giovanna - GW", GW_Giorno);
  AddToCartList("Golden Experience R. - GW", GW_GoldenExperienceR);
  AddToCartList("Diavolo - GW", GW_Diavolo);
  AddToCartList("Jolyne Kujo - SO", SO_Jolyne);
  AddToCartList("Stone Free - SO", SO_StoneFree);
  AddToCartList("Enrico Pucci - SO", SO_Pucci);
}
