import { useEffect } from "react";

// Asset Imports
import {
  ABOUT_US_jp,
  ALL_jp,
  BATTLE_TENDENCY_jp,
  CLOSE_jp,
  CLOTHING_jp,
  DIAMONDS_ARE_UNBREAKABLE_jp,
  FIGURES_jp,
  GOLDEN_WIND_jp,
  HOME_jp,
  MANGA_jp,
  OUR_STORE_jp,
  OUR_SUPPORT_jp,
  PHANTOM_BLOOD_jp,
  PRODUCTS_jp,
  SEARCH_jp,
  STARDUST_CRUSADERS_jp,
  STONE_OCEAN_jp,
  VIEWS_jp,
  LEARN_MORE_jp,
  SEARCH_HOME_jp,
  SEARCH_ABOUT_jp,
  SEARCH_SUPPORT_jp,
  SEARCH_PRODUCTS_jp,
  SEARCH_PHANTOM_BLOOD_jp,
  SEARCH_BATTLE_TENDENCY_jp,
  SEARCH_STARDUST_CRUSADERS_jp,
  SEARCH_DIAMONDS_ARE_UNBREAKABLE_jp,
  SEARCH_GOLDEN_WIND_jp,
  SEARCH_STONE_OCEAN_jp,
} from "../../assets/data/translations/Japanese";

// Global Japanese Text
const GlobalJP = () => {
  useEffect(() => {
    if (sessionStorage.getItem("Translate Japanese")) {
      //! This WOULD switch all search features to japanese text
      //SearchJPK();

      // Hides the search and its toggler on japanese translations... i just dont want to mess with Japanese translations for search
      document.getElementById("searchToggler").style.display = "none";
      document.getElementById("search").style.display = "none";

      // All
      document.querySelectorAll(".jp_PHANTOM_BLOOD").forEach((pb) => {
        pb.innerHTML = PHANTOM_BLOOD_jp;
      });
      document.querySelectorAll(".jp_BATTLE_TENDENCY").forEach((bt) => {
        bt.innerHTML = BATTLE_TENDENCY_jp;
      });
      document.querySelectorAll(".jp_STARDUST_CRUSADERS").forEach((sdcs) => {
        sdcs.innerHTML = STARDUST_CRUSADERS_jp;
      });
      document
        .querySelectorAll(".jp_DIAMONDS_ARE_UNBREAKABLE")
        .forEach((daub) => {
          daub.innerHTML = DIAMONDS_ARE_UNBREAKABLE_jp;
        });
      document.querySelectorAll(".jp_GOLDEN_WIND").forEach((gw) => {
        gw.innerHTML = GOLDEN_WIND_jp;
      });
      document.querySelectorAll(".jp_STONE_OCEAN").forEach((so) => {
        so.innerHTML = STONE_OCEAN_jp;
      });
      document.querySelectorAll(".jp_HOME").forEach((home) => {
        home.innerHTML = HOME_jp;
      });
      document.querySelectorAll(".jp_ABOUT_US").forEach((about) => {
        about.innerHTML = ABOUT_US_jp;
      });
      document.querySelectorAll(".jp_OUR_STORE").forEach((store) => {
        store.innerHTML = OUR_STORE_jp;
      });
      document.querySelectorAll(".jp_OUR_SUPPORT").forEach((support) => {
        support.innerHTML = OUR_SUPPORT_jp;
      });
      document.querySelectorAll(".jp_CLOSE").forEach((close) => {
        close.innerHTML = CLOSE_jp;
      });
      document.querySelectorAll(".jp_FIGURES").forEach((figure) => {
        figure.innerHTML = FIGURES_jp;
      });
      document.querySelectorAll(".jp_MANGA").forEach((manga) => {
        manga.innerHTML = MANGA_jp;
      });
      document.querySelectorAll(".jp_CLOTHING").forEach((clothing) => {
        clothing.innerHTML = CLOTHING_jp;
      });
      document.querySelectorAll(".jp_LEARN_MORE").forEach((learn) => {
        learn.innerHTML = LEARN_MORE_jp;
      });
      document.querySelectorAll(".jp_VIEWS").forEach((views) => {
        views.innerHTML = VIEWS_jp;
      });
      document.querySelectorAll(".jp_PRODUCTS").forEach((products) => {
        products.innerHTML = PRODUCTS_jp;
      });

      // Nav Menu
      document.querySelectorAll(".jp_ALL").forEach((all) => {
        all.innerHTML = ALL_jp;
      });

      // Search
      document.querySelector(".jp_SEARCH").innerHTML = SEARCH_jp;
      document.querySelector(".jp_SEARCH_HOME").innerHTML = SEARCH_HOME_jp;
      document.querySelector(".jp_SEARCH_ABOUT").innerHTML = SEARCH_ABOUT_jp;
      document.querySelector(".jp_SEARCH_SUPPORT").innerHTML =
        SEARCH_SUPPORT_jp;
      document.querySelector(".jp_SEARCH_PRODUCTS").innerHTML =
        SEARCH_PRODUCTS_jp;
      document.querySelector(".jp_SEARCH_PHANTOM_BLOOD").innerHTML =
        SEARCH_PHANTOM_BLOOD_jp;
      document.querySelector(".jp_SEARCH_BATTLE_TENDENCY").innerHTML =
        SEARCH_BATTLE_TENDENCY_jp;
      document.querySelector(".jp_SEARCH_STARDUST_CRUSADERS").innerHTML =
        SEARCH_STARDUST_CRUSADERS_jp;
      document.querySelector(".jp_SEARCH_STARDUST_CRUSADERS").innerHTML =
        SEARCH_STARDUST_CRUSADERS_jp;
      document.querySelector(".jp_SEARCH_DIAMONDS_ARE_UNBREAKABLE").innerHTML =
        SEARCH_DIAMONDS_ARE_UNBREAKABLE_jp;
      document.querySelector(".jp_SEARCH_GOLDEN_WIND").innerHTML =
        SEARCH_GOLDEN_WIND_jp;
      document.querySelector(".jp_SEARCH_STONE_OCEAN").innerHTML =
        SEARCH_STONE_OCEAN_jp;
    }
  }, []);

  return "";
};

export default GlobalJP;
