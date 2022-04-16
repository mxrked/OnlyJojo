// React/Next stuff
import { useEffect } from "react";
import { Component } from "react";

// Custom Imports
import { FadeLeft } from "../../../assets/animations/Fades";
import AddToCartList from "../../../assets/functions/AddToCartList";

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
} from "../../../assets/data/objects/Figures";
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
} from "../../../assets/data/objects/Manga";
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
} from "../../../assets/data/objects/Clothing";

// Library Items
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { FaCartPlus } from "react-icons/fa";

// Styling
import styles from "../../../styles/views/store/Store.module.css";

class ProductsHolder extends Component {
  constructor(props) {
    super(props);

    this.createProduct = this.createProduct.bind(this);
  }

  createProduct(props) {
    return (
      <div
        className={`${styles.products_holder_product} page-transition product col-lg-4 col-md-4 col-sm-12 col-xs-12`}
        data-product-type={props.productType}
      >
        <div className={styles.product_inner}>
          <div className={styles.product_inner_top}>
            <div>
              <span className={`${styles.product_inner_type} product-type`}>
                {props.productTypeSPAN}
              </span>
              <span
                className={`${styles.product_inner_part} product_inner_part`}
              >
                {props.productPartSPAN}
              </span>
            </div>

            <p id={props.productID} className={styles.product_inner_id}>
              #{props.productIDTxt}
            </p>
          </div>

          <div className={styles.product_inner_img_holder}>
            <img
              data-src={props.productImgSRC}
              alt={props.productName}
              className="lazyload"
            />
          </div>

          <div className={styles.product_inner_details}>
            <h3 className="product-name">{props.productName}</h3>
            <h3 className="product-jp-name">{props.productJPName}</h3>

            <div>
              <p>
                $ <strong>{props.productPrice}</strong>
              </p>

              <button
                onClick={() => {
                  AddToCartList(props.cookie, props.object);
                }}
                className="page-transition"
              >
                <FaCartPlus />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      <div id={styles.productsHolder}>
        <div className={`${styles.products_holder_box} container-fluid`}>
          <div className={`${styles.products_holder_row} row`}>
            {/* Phantom Blood */}
            <this.createProduct
              productType="PB_Figure"
              productTypeSPAN={PB_Jonathan.type}
              productPartSPAN={PB_Jonathan.part}
              productID="PB1"
              productIDTxt="PB1"
              productImgSRC={PB_Jonathan.img_src}
              productName={PB_Jonathan.name}
              productJPName={PB_Jonathan.jName}
              productPrice={PB_Jonathan.price}
              cookie="Jonathan Joestar - PB"
              object={PB_Jonathan}
            />
            <this.createProduct
              productType="PB_Figure"
              productTypeSPAN={PB_Will.type}
              productPartSPAN={PB_Will.part}
              productID="PB2"
              productIDTxt="PB2"
              productImgSRC={PB_Will.img_src}
              productName={PB_Will.name}
              productJPName={PB_Will.jName}
              productPrice={PB_Will.price}
              cookie="William-a-Zeppeli - PB"
              object={PB_Will}
            />
            <this.createProduct
              productType="PB_Figure"
              productTypeSPAN={PB_Dio.type}
              productPartSPAN={PB_Dio.part}
              productID="PB3"
              productIDTxt="PB3"
              productImgSRC={PB_Dio.img_src}
              productName={PB_Dio.name}
              productJPName={PB_Dio.jName}
              productPrice={PB_Dio.price}
              cookie="Dio Brando - PB"
              object={PB_Dio}
            />
            <this.createProduct
              productType="PB_Manga"
              productTypeSPAN={PB_Set.type}
              productPartSPAN={PB_Set.part}
              productID="PB4"
              productIDTxt="PB4"
              productImgSRC={PB_Set.img_src}
              productName={PB_Set.name}
              productJPName={PB_Set.jName}
              productPrice={PB_Set.price}
              cookie="Phantom Blood Set"
              object={PB_Set}
            />
            <this.createProduct
              productType="PB_Manga"
              productTypeSPAN={PB_Vol_1.type}
              productPartSPAN={PB_Vol_1.part}
              productID="PB5"
              productIDTxt="PB5"
              productImgSRC={PB_Vol_1.img_src}
              productName={PB_Vol_1.name}
              productJPName={PB_Vol_1.jName}
              productPrice={PB_Vol_1.price}
              cookie="Phantom Blood Vol 1"
              object={PB_Vol_1}
            />
            <this.createProduct
              productType="PB_Manga"
              productTypeSPAN={PB_Vol_2.type}
              productPartSPAN={PB_Vol_2.part}
              productID="PB6"
              productIDTxt="PB6"
              productImgSRC={PB_Vol_2.img_src}
              productName={PB_Vol_2.name}
              productJPName={PB_Vol_2.jName}
              productPrice={PB_Vol_2.price}
              cookie="Phantom Blood Vol 2"
              object={PB_Vol_2}
            />
            <this.createProduct
              productType="PB_Manga"
              productTypeSPAN={PB_Vol_3.type}
              productPartSPAN={PB_Vol_3.part}
              productID="PB7"
              productIDTxt="PB7"
              productImgSRC={PB_Vol_3.img_src}
              productName={PB_Vol_3.name}
              productJPName={PB_Vol_3.jName}
              productPrice={PB_Vol_3.price}
              cookie="Phantom Blood Vol 3"
              object={PB_Vol_3}
            />
            <this.createProduct
              productType="PB_Clothing"
              productTypeSPAN={PB_BLACK_Tshirt.type}
              productPartSPAN={PB_BLACK_Tshirt.part}
              productID="PB8"
              productIDTxt="PB8"
              productImgSRC={PB_BLACK_Tshirt.img_src}
              productName={PB_BLACK_Tshirt.name}
              productJPName={PB_BLACK_Tshirt.jName}
              productPrice={PB_BLACK_Tshirt.price}
              cookie="Phantom Blood Black Tee"
              object={PB_BLACK_Tshirt}
            />
            <this.createProduct
              productType="PB_Clothing"
              productTypeSPAN={PURPLE_JBA_Hat.type}
              productPartSPAN={PURPLE_JBA_Hat.part}
              productID="PB9"
              productIDTxt="PB9"
              productImgSRC={PURPLE_JBA_Hat.img_src}
              productName={PURPLE_JBA_Hat.name}
              productJPName={PURPLE_JBA_Hat.jName}
              productPrice={PURPLE_JBA_Hat.price}
              cookie="Purple JBA Hat"
              object={PURPLE_JBA_Hat}
            />
            {/* Battle Tendency */}
            <this.createProduct
              productType="BT_Figure"
              productTypeSPAN={BT_Joseph.type}
              productPartSPAN={BT_Joseph.part}
              productID="BT1"
              productIDTxt="BT1"
              productImgSRC={BT_Joseph.img_src}
              productName={BT_Joseph.name}
              productJPName={BT_Joseph.jName}
              productPrice={BT_Joseph.price}
              cookie="Joseph Joestar - BT"
              object={BT_Joseph}
            />
            <this.createProduct
              productType="BT_Figure"
              productTypeSPAN={BT_Caesar.type}
              productPartSPAN={BT_Caesar.part}
              productID="BT2"
              productIDTxt="BT2"
              productImgSRC={BT_Caesar.img_src}
              productName={BT_Caesar.name}
              productJPName={BT_Caesar.jName}
              productPrice={BT_Caesar.price}
              cookie="Caesar Zeppeli - BT"
              object={BT_Caesar}
            />
            <this.createProduct
              productType="BT_Figure"
              productTypeSPAN={BT_Kars.type}
              productPartSPAN={BT_Kars.part}
              productID="BT3"
              productIDTxt="BT3"
              productImgSRC={BT_Kars.img_src}
              productName={BT_Kars.name}
              productJPName={BT_Kars.jName}
              productPrice={BT_Kars.price}
              cookie="Kars - BT"
              object={BT_Kars}
            />
            <this.createProduct
              productType="BT_Manga"
              productTypeSPAN={BT_Set.type}
              productPartSPAN={BT_Set.part}
              productID="BT4"
              productIDTxt="BT4"
              productImgSRC={BT_Set.img_src}
              productName={BT_Set.name}
              productJPName={BT_Set.jName}
              productPrice={BT_Set.price}
              cookie="Battle Tendency Set"
              object={BT_Set}
            />
            <this.createProduct
              productType="BT_Manga"
              productTypeSPAN={BT_Vol_1.type}
              productPartSPAN={BT_Vol_1.part}
              productID="BT5"
              productIDTxt="BT5"
              productImgSRC={BT_Vol_1.img_src}
              productName={BT_Vol_1.name}
              productJPName={BT_Vol_1.jName}
              productPrice={BT_Vol_1.price}
              cookie="Battle Tendency Vol 1"
              object={BT_Vol_1}
            />
            <this.createProduct
              productType="BT_Manga"
              productTypeSPAN={BT_Vol_2.type}
              productPartSPAN={BT_Vol_2.part}
              productID="BT6"
              productIDTxt="BT6"
              productImgSRC={BT_Vol_2.img_src}
              productName={BT_Vol_2.name}
              productJPName={BT_Vol_2.jName}
              productPrice={BT_Vol_2.price}
              cookie="Battle Tendency Vol 2"
              object={BT_Vol_2}
            />
            <this.createProduct
              productType="BT_Manga"
              productTypeSPAN={BT_Vol_3.type}
              productPartSPAN={BT_Vol_3.part}
              productID="BT7"
              productIDTxt="BT7"
              productImgSRC={BT_Vol_3.img_src}
              productName={BT_Vol_3.name}
              productJPName={BT_Vol_3.jName}
              productPrice={BT_Vol_3.price}
              cookie="Battle Tendency Vol 3"
              object={BT_Vol_3}
            />
            <this.createProduct
              productType="BT_Manga"
              productTypeSPAN={BT_Vol_4.type}
              productPartSPAN={BT_Vol_4.part}
              productID="BT8"
              productIDTxt="BT8"
              productImgSRC={BT_Vol_4.img_src}
              productName={BT_Vol_4.name}
              productJPName={BT_Vol_4.jName}
              productPrice={BT_Vol_4.price}
              cookie="Battle Tendency Vol 4"
              object={BT_Vol_4}
            />
            <this.createProduct
              productType="BT_Clothing"
              productTypeSPAN={JOSEPH_AND_CAESAR_Tshirt.type}
              productPartSPAN={JOSEPH_AND_CAESAR_Tshirt.part}
              productID="BT9"
              productIDTxt="BT9"
              productImgSRC={JOSEPH_AND_CAESAR_Tshirt.img_src}
              productName={JOSEPH_AND_CAESAR_Tshirt.name}
              productJPName={JOSEPH_AND_CAESAR_Tshirt.jName}
              productPrice={JOSEPH_AND_CAESAR_Tshirt.price}
              cookie="Joseph and Caesar Tshirt"
              object={JOSEPH_AND_CAESAR_Tshirt}
            />
            <this.createProduct
              productType="BT_Clothing"
              productTypeSPAN={CHARACTERS_Tshirt.type}
              productPartSPAN={CHARACTERS_Tshirt.part}
              productID="BT10"
              productIDTxt="BT10"
              productImgSRC={CHARACTERS_Tshirt.img_src}
              productName={CHARACTERS_Tshirt.name}
              productPrice={CHARACTERS_Tshirt.price}
              cookie="Characters Tshirt"
              object={CHARACTERS_Tshirt}
            />
            {/* Stardust Crusaders */}
            <this.createProduct
              productType="SDC_Figure"
              productTypeSPAN={SDC_Jotaro.type}
              productPartSPAN={SDC_Jotaro.part}
              productID="SDC1"
              productIDTxt="SDC1"
              productImgSRC={SDC_Jotaro.img_src}
              productName={SDC_Jotaro.name}
              productJPName={SDC_Jotaro.jName}
              productPrice={SDC_Jotaro.price}
              cookie="Jotaro Kujo - SDC"
              object={SDC_Jotaro}
            />
            <this.createProduct
              productType="SDC_Figure"
              productTypeSPAN={SDC_StarPlatinum.type}
              productPartSPAN={SDC_StarPlatinum.part}
              productID="SDC2"
              productIDTxt="SDC2"
              productImgSRC={SDC_StarPlatinum.img_src}
              productName={SDC_StarPlatinum.name}
              productJPName={SDC_StarPlatinum.jName}
              productPrice={SDC_StarPlatinum.price}
              cookie="Star Platinum - SDC"
              object={SDC_StarPlatinum}
            />
            <this.createProduct
              productType="SDC_Figure"
              productTypeSPAN={SDC_Dio.type}
              productPartSPAN={SDC_Dio.part}
              productID="SDC3"
              productIDTxt="SDC3"
              productImgSRC={SDC_Dio.img_src}
              productName={SDC_Dio.name}
              productJPName={SDC_Dio.jName}
              productPrice={SDC_Dio.price}
              cookie="Dio Brando - SDC"
              object={SDC_Dio}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Set.type}
              productPartSPAN={SDC_Set.part}
              productID="SDC4"
              productIDTxt="SDC4"
              productImgSRC={SDC_Set.img_src}
              productName={SDC_Set.name}
              productJPName={SDC_Set.jName}
              productPrice={SDC_Set.price}
              cookie="Stardust Crusaders Set"
              object={SDC_Set}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_1.type}
              productPartSPAN={SDC_Vol_1.part}
              productID="SDC5"
              productIDTxt="SDC5"
              productImgSRC={SDC_Vol_1.img_src}
              productName={SDC_Vol_1.name}
              productJPName={SDC_Vol_1.jName}
              productPrice={SDC_Vol_1.price}
              cookie="Stardust Crusaders Vol 1"
              object={SDC_Vol_1}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_2.type}
              productPartSPAN={SDC_Vol_2.part}
              productID="SDC6"
              productIDTxt="SDC6"
              productImgSRC={SDC_Vol_2.img_src}
              productName={SDC_Vol_2.name}
              productJPName={SDC_Vol_2.jName}
              productPrice={SDC_Vol_2.price}
              cookie="Stardust Crusaders Vol 2"
              object={SDC_Vol_2}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_3.type}
              productPartSPAN={SDC_Vol_3.part}
              productID="SDC7"
              productIDTxt="SDC7"
              productImgSRC={SDC_Vol_3.img_src}
              productName={SDC_Vol_3.name}
              productJPName={SDC_Vol_3.jName}
              productPrice={SDC_Vol_3.price}
              cookie="Stardust Crusaders Vol 3"
              object={SDC_Vol_3}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_4.type}
              productPartSPAN={SDC_Vol_4.part}
              productID="SDC8"
              productIDTxt="SDC8"
              productImgSRC={SDC_Vol_4.img_src}
              productName={SDC_Vol_4.name}
              productJPName={SDC_Vol_4.jName}
              productPrice={SDC_Vol_4.price}
              cookie="Stardust Crusaders Vol 4"
              object={SDC_Vol_4}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_5.type}
              productPartSPAN={SDC_Vol_5.part}
              productID="SDC9"
              productIDTxt="SDC9"
              productImgSRC={SDC_Vol_5.img_src}
              productName={SDC_Vol_5.name}
              productJPName={SDC_Vol_5.jName}
              productPrice={SDC_Vol_5.price}
              cookie="Stardust Crusaders Vol 5"
              object={SDC_Vol_5}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_6.type}
              productPartSPAN={SDC_Vol_6.part}
              productID="SDC10"
              productIDTxt="SDC10"
              productImgSRC={SDC_Vol_6.img_src}
              productName={SDC_Vol_6.name}
              productJPName={SDC_Vol_6.jName}
              productPrice={SDC_Vol_6.price}
              cookie="Stardust Crusaders Vol 6"
              object={SDC_Vol_6}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_7.type}
              productPartSPAN={SDC_Vol_7.part}
              productID="SDC11"
              productIDTxt="SDC11"
              productImgSRC={SDC_Vol_7.img_src}
              productName={SDC_Vol_7.name}
              productJPName={SDC_Vol_7.jName}
              productPrice={SDC_Vol_7.price}
              cookie="Stardust Crusaders Vol 7"
              object={SDC_Vol_7}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_8.type}
              productPartSPAN={SDC_Vol_8.part}
              productID="SDC12"
              productIDTxt="SDC12"
              productImgSRC={SDC_Vol_8.img_src}
              productName={SDC_Vol_8.name}
              productJPName={SDC_Vol_8.jName}
              productPrice={SDC_Vol_8.price}
              cookie="Stardust Crusaders Vol 8"
              object={SDC_Vol_8}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_9.type}
              productPartSPAN={SDC_Vol_9.part}
              productID="SDC13"
              productIDTxt="SDC13"
              productImgSRC={SDC_Vol_9.img_src}
              productName={SDC_Vol_9.name}
              productJPName={SDC_Vol_9.jName}
              productPrice={SDC_Vol_9.price}
              cookie="Stardust Crusaders Vol 9"
              object={SDC_Vol_9}
            />
            <this.createProduct
              productType="SDC_Manga"
              productTypeSPAN={SDC_Vol_10.type}
              productPartSPAN={SDC_Vol_10.part}
              productID="SDC14"
              productIDTxt="SDC14"
              productImgSRC={SDC_Vol_10.img_src}
              productName={SDC_Vol_10.name}
              productJPName={SDC_Vol_10.jName}
              productPrice={SDC_Vol_10.price}
              cookie="Stardust Crusaders Vol 10"
              object={SDC_Vol_10}
            />
            <this.createProduct
              productType="SDC_Clothing"
              productTypeSPAN={JOTARO_Cap.type}
              productPartSPAN={JOTARO_Cap.part}
              productID="SDC15"
              productIDTxt="SDC15"
              productImgSRC={JOTARO_Cap.img_src}
              productName={JOTARO_Cap.name}
              productJPName={JOTARO_Cap.jName}
              productPrice={JOTARO_Cap.price}
              cookie="Jotaro Kujo Cap"
              object={JOTARO_Cap}
            />
            <this.createProduct
              productType="SDC_Clothing"
              productTypeSPAN={MUDA_PURPLE_Tshirt.type}
              productPartSPAN={MUDA_PURPLE_Tshirt.part}
              productID="SDC16"
              productIDTxt="SDC16"
              productImgSRC={MUDA_PURPLE_Tshirt.img_src}
              productName={MUDA_PURPLE_Tshirt.name}
              productJPName={MUDA_PURPLE_Tshirt.jName}
              productPrice={MUDA_PURPLE_Tshirt.price}
              cookie="Muda Purple Tshirt"
              object={MUDA_PURPLE_Tshirt}
            />
            <this.createProduct
              productType="SDC_Clothing"
              productTypeSPAN={JOTARO_BLUE_Tshirt.type}
              productPartSPAN={JOTARO_BLUE_Tshirt.part}
              productID="SDC17"
              productIDTxt="SDC17"
              productImgSRC={JOTARO_BLUE_Tshirt.img_src}
              productName={JOTARO_BLUE_Tshirt.name}
              productJPName={JOTARO_BLUE_Tshirt.jName}
              productPrice={JOTARO_BLUE_Tshirt.price}
              cookie="Jotaro Blue Tshirt"
              object={JOTARO_BLUE_Tshirt}
            />
            {/* Diamonds are Unbreakable */}
            <this.createProduct
              productType="DAUB_Figure"
              productTypeSPAN={DAUB_Josuke.type}
              productPartSPAN={DAUB_Josuke.part}
              productID="DAUB1"
              productIDTxt="DAUB1"
              productImgSRC={DAUB_Josuke.img_src}
              productName={DAUB_Josuke.name}
              productJPName={DAUB_Josuke.jName}
              productPrice={DAUB_Josuke.price}
              cookie="Josuke Higashikata - DAUB"
              object={DAUB_Josuke}
            />
            <this.createProduct
              productType="DAUB_Figure"
              productTypeSPAN={DAUB_CrazyDiamond.type}
              productPartSPAN={DAUB_CrazyDiamond.part}
              productID="DAUB2"
              productIDTxt="DAUB2"
              productImgSRC={DAUB_CrazyDiamond.img_src}
              productName={DAUB_CrazyDiamond.name}
              productJPName={DAUB_CrazyDiamond.jName}
              productPrice={DAUB_CrazyDiamond.price}
              cookie="Crazy Diamond - DAUB"
              object={DAUB_CrazyDiamond}
            />
            <this.createProduct
              productType="DAUB_Figure"
              productTypeSPAN={DAUB_Kira.type}
              productPartSPAN={DAUB_Kira.part}
              productID="DAUB3"
              productIDTxt="DAUB3"
              productImgSRC={DAUB_Kira.img_src}
              productName={DAUB_Kira.name}
              productJPName={DAUB_Kira.jName}
              productPrice={DAUB_Kira.price}
              cookie="Kira Yoshikage - DAUB"
              object={DAUB_Kira}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Set.type}
              productPartSPAN={DAUB_Set.part}
              productID="DAUB4"
              productIDTxt="DAUB4"
              productImgSRC={DAUB_Set.img_src}
              productName={DAUB_Set.name}
              productJPName={DAUB_Set.jName}
              productPrice={DAUB_Set.price}
              cookie="Diamonds Set"
              object={DAUB_Set}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_1.type}
              productPartSPAN={DAUB_Vol_1.part}
              productID="DAUB5"
              productIDTxt="DAUB5"
              productImgSRC={DAUB_Vol_1.img_src}
              productName={DAUB_Vol_1.name}
              productJPName={DAUB_Vol_1.jName}
              productPrice={DAUB_Vol_1.price}
              cookie="Diamonds are Unbreakable Vol 1"
              object={DAUB_Vol_1}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_2.type}
              productPartSPAN={DAUB_Vol_2.part}
              productID="DAUB6"
              productIDTxt="DAUB6"
              productImgSRC={DAUB_Vol_2.img_src}
              productName={DAUB_Vol_2.name}
              productJPName={DAUB_Vol_2.jName}
              productPrice={DAUB_Vol_2.price}
              cookie="Diamonds are Unbreakable Vol 2"
              object={DAUB_Vol_2}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_3.type}
              productPartSPAN={DAUB_Vol_3.part}
              productID="DAUB7"
              productIDTxt="DAUB7"
              productImgSRC={DAUB_Vol_3.img_src}
              productName={DAUB_Vol_3.name}
              productJPName={DAUB_Vol_3.jName}
              productPrice={DAUB_Vol_3.price}
              cookie="Diamonds are Unbreakable Vol 3"
              object={DAUB_Vol_3}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_4.type}
              productPartSPAN={DAUB_Vol_4.part}
              productID="DAUB8"
              productIDTxt="DAUB8"
              productImgSRC={DAUB_Vol_4.img_src}
              productName={DAUB_Vol_4.name}
              productJPName={DAUB_Vol_4.jName}
              productPrice={DAUB_Vol_4.price}
              cookie="Diamonds are Unbreakable Vol 4"
              object={DAUB_Vol_4}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_5.type}
              productPartSPAN={DAUB_Vol_5.part}
              productID="DAUB9"
              productIDTxt="DAUB9"
              productImgSRC={DAUB_Vol_5.img_src}
              productName={DAUB_Vol_5.name}
              productJPName={DAUB_Vol_5.jName}
              productPrice={DAUB_Vol_5.price}
              cookie="Diamonds are Unbreakable Vol 5"
              object={DAUB_Vol_5}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_6.type}
              productPartSPAN={DAUB_Vol_6.part}
              productID="DAUB10"
              productIDTxt="DAUB10"
              productImgSRC={DAUB_Vol_6.img_src}
              productName={DAUB_Vol_6.name}
              productJPName={DAUB_Vol_6.jName}
              productPrice={DAUB_Vol_6.price}
              cookie="Diamonds are Unbreakable Vol 6"
              object={DAUB_Vol_6}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_7.type}
              productPartSPAN={DAUB_Vol_7.part}
              productID="DAUB11"
              productIDTxt="DAUB11"
              productImgSRC={DAUB_Vol_7.img_src}
              productName={DAUB_Vol_7.name}
              productJPName={DAUB_Vol_7.jName}
              productPrice={DAUB_Vol_7.price}
              cookie="Diamonds are Unbreakable Vol 7"
              object={DAUB_Vol_7}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_8.type}
              productPartSPAN={DAUB_Vol_8.part}
              productID="DAUB12"
              productIDTxt="DAUB12"
              productImgSRC={DAUB_Vol_8.img_src}
              productName={DAUB_Vol_8.name}
              productJPName={DAUB_Vol_8.jName}
              productPrice={DAUB_Vol_8.price}
              cookie="Diamonds are Unbreakable Vol 8"
              object={DAUB_Vol_8}
            />
            <this.createProduct
              productType="DAUB_Manga"
              productTypeSPAN={DAUB_Vol_9.type}
              productPartSPAN={DAUB_Vol_9.part}
              productID="DAUB13"
              productIDTxt="DAUB13"
              productImgSRC={DAUB_Vol_9.img_src}
              productName={DAUB_Vol_9.name}
              productJPName={DAUB_Vol_9.jName}
              productPrice={DAUB_Vol_9.price}
              cookie="Diamonds are Unbreakable Vol 9"
              object={DAUB_Vol_9}
            />
            <this.createProduct
              productType="DAUB_Clothing"
              productTypeSPAN={JOSUKE_AND_KOICHI_Tshirt.type}
              productPartSPAN={JOSUKE_AND_KOICHI_Tshirt.part}
              productID="DAUB14"
              productIDTxt="DAUB14"
              productImgSRC={JOSUKE_AND_KOICHI_Tshirt.img_src}
              productName={JOSUKE_AND_KOICHI_Tshirt.name}
              productJPName={JOSUKE_AND_KOICHI_Tshirt.jName}
              productPrice={JOSUKE_AND_KOICHI_Tshirt.price}
              cookie="Josuke/Koichi Tshirt"
              object={JOSUKE_AND_KOICHI_Tshirt}
            />
            <this.createProduct
              productType="DAUB_Clothing"
              productTypeSPAN={DAUB_BLACK_Tshirt.type}
              productPartSPAN={DAUB_BLACK_Tshirt.part}
              productID="DAUB15"
              productIDTxt="DAUB15"
              productImgSRC={DAUB_BLACK_Tshirt.img_src}
              productName={DAUB_BLACK_Tshirt.name}
              productJPName={DAUB_BLACK_Tshirt.jName}
              productPrice={DAUB_BLACK_Tshirt.price}
              cookie="DAUB Black Tshirt"
              object={DAUB_BLACK_Tshirt}
            />
            {/* Golden Wind */}
            <this.createProduct
              productType="GW_Figure"
              productTypeSPAN={GW_Giorno.type}
              productPartSPAN={GW_Giorno.part}
              productID="GW1"
              productIDTxt="GW1"
              productImgSRC={GW_Giorno.img_src}
              productName={GW_Giorno.name}
              productJPName={GW_Giorno.jName}
              productPrice={GW_Giorno.price}
              cookie="Giorno Giovanna - GW"
              object={GW_Giorno}
            />
            <this.createProduct
              productType="GW_Figure"
              productTypeSPAN={GW_GoldenExperienceR.type}
              productPartSPAN={GW_GoldenExperienceR.part}
              productID="GW2"
              productIDTxt="GW2"
              productImgSRC={GW_GoldenExperienceR.img_src}
              productName={GW_GoldenExperienceR.name}
              productJPName={GW_GoldenExperienceR.jName}
              productPrice={GW_GoldenExperienceR.price}
              cookie="Golden Experience R.- GW"
              object={GW_GoldenExperienceR}
            />
            <this.createProduct
              productType="GW_Figure"
              productTypeSPAN={GW_Diavolo.type}
              productPartSPAN={GW_Diavolo.part}
              productID="GW3"
              productIDTxt="GW3"
              productImgSRC={GW_Diavolo.img_src}
              productName={GW_Diavolo.name}
              productJPName={GW_Diavolo.jName}
              productPrice={GW_Diavolo.price}
              cookie="Diavolo - GW"
              object={GW_Diavolo}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Set.type}
              productPartSPAN={GW_Set.part}
              productID="GW4"
              productIDTxt="GW4"
              productImgSRC={GW_Set.img_src}
              productName={GW_Set.name}
              productJPName={GW_Set.jName}
              productPrice={GW_Set.price}
              cookie="Golden Wind Set"
              object={GW_Set}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_1.type}
              productPartSPAN={GW_Vol_1.part}
              productID="GW5"
              productIDTxt="GW5"
              productImgSRC={GW_Vol_1.img_src}
              productName={GW_Vol_1.name}
              productJPName={GW_Vol_1.jName}
              productPrice={GW_Vol_1.price}
              cookie="Golden Wind Vol 1"
              object={GW_Vol_1}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_2.type}
              productPartSPAN={GW_Vol_2.part}
              productID="GW6"
              productIDTxt="GW6"
              productImgSRC={GW_Vol_2.img_src}
              productName={GW_Vol_2.name}
              productJPName={GW_Vol_2.jName}
              productPrice={GW_Vol_2.price}
              cookie="Golden Wind Vol 2"
              object={GW_Vol_2}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_3.type}
              productPartSPAN={GW_Vol_3.part}
              productID="GW7"
              productIDTxt="GW7"
              productImgSRC={GW_Vol_3.img_src}
              productName={GW_Vol_3.name}
              productJPName={GW_Vol_3.jName}
              productPrice={GW_Vol_3.price}
              cookie="Golden Wind Vol 3"
              object={GW_Vol_3}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_4.type}
              productPartSPAN={GW_Vol_4.part}
              productID="GW8"
              productIDTxt="GW8"
              productImgSRC={GW_Vol_4.img_src}
              productName={GW_Vol_4.name}
              productJPName={GW_Vol_4.jName}
              productPrice={GW_Vol_4.price}
              cookie="Golden Wind Vol 4"
              object={GW_Vol_4}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_5.type}
              productPartSPAN={GW_Vol_5.part}
              productID="GW9"
              productIDTxt="GW9"
              productImgSRC={GW_Vol_5.img_src}
              productName={GW_Vol_5.name}
              productJPName={GW_Vol_5.jName}
              productPrice={GW_Vol_5.price}
              cookie="Golden Wind Vol 5"
              object={GW_Vol_5}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_6.type}
              productPartSPAN={GW_Vol_6.part}
              productID="GW10"
              productIDTxt="GW10"
              productImgSRC={GW_Vol_6.img_src}
              productName={GW_Vol_6.name}
              productJPName={GW_Vol_6.jName}
              productPrice={GW_Vol_6.price}
              cookie="Golden Wind Vol 6"
              object={GW_Vol_6}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_7.type}
              productPartSPAN={GW_Vol_7.part}
              productID="GW11"
              productIDTxt="GW11"
              productImgSRC={GW_Vol_7.img_src}
              productName={GW_Vol_7.name}
              productJPName={GW_Vol_7.jName}
              productPrice={GW_Vol_7.price}
              cookie="Golden Wind Vol 7"
              object={GW_Vol_7}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_8.type}
              productPartSPAN={GW_Vol_8.part}
              productID="GW12"
              productIDTxt="GW12"
              productImgSRC={GW_Vol_8.img_src}
              productName={GW_Vol_8.name}
              productJPName={GW_Vol_8.jName}
              productPrice={GW_Vol_8.price}
              cookie="Golden Wind Vol 8"
              object={GW_Vol_8}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_9.type}
              productPartSPAN={GW_Vol_9.part}
              productID="GW13"
              productIDTxt="GW13"
              productImgSRC={GW_Vol_9.img_src}
              productName={GW_Vol_9.name}
              productJPName={GW_Vol_9.jName}
              productPrice={GW_Vol_9.price}
              cookie="Golden Wind Vol 9"
              object={GW_Vol_9}
            />
            <this.createProduct
              productType="GW_Manga"
              productTypeSPAN={GW_Vol_10.type}
              productPartSPAN={GW_Vol_10.part}
              productID="GW14"
              productIDTxt="GW14"
              productImgSRC={GW_Vol_10.img_src}
              productName={GW_Vol_10.name}
              productJPName={GW_Vol_10.jName}
              productPrice={GW_Vol_10.price}
              cookie="Golden Wind Vol 10"
              object={GW_Vol_10}
            />
            <this.createProduct
              productType="GW_Clothing"
              productTypeSPAN={GW_JOBROS_Tshirt.type}
              productPartSPAN={GW_JOBROS_Tshirt.part}
              productID="GW15"
              productIDTxt="GW15"
              productImgSRC={GW_JOBROS_Tshirt.img_src}
              productName={GW_JOBROS_Tshirt.name}
              productJPName={GW_JOBROS_Tshirt.jName}
              productPrice={GW_JOBROS_Tshirt.price}
              cookie="GW Jobros Tshirt"
              object={GW_JOBROS_Tshirt}
            />
            <this.createProduct
              productType="GW_Clothing"
              productTypeSPAN={GIORNO_Tshirt.type}
              productPartSPAN={GIORNO_Tshirt.part}
              productID="GW16"
              productIDTxt="GW16"
              productImgSRC={GIORNO_Tshirt.img_src}
              productName={GIORNO_Tshirt.name}
              productJPName={GIORNO_Tshirt.jName}
              productPrice={GIORNO_Tshirt.price}
              cookie="Giorno Tshirt"
              object={GIORNO_Tshirt}
            />
            {/* Stone Ocean */}
            <this.createProduct
              productType="SO_Figure"
              productTypeSPAN={SO_Jolyne.type}
              productPartSPAN={SO_Jolyne.part}
              productID="SO1"
              productIDTxt="SO1"
              productImgSRC={SO_Jolyne.img_src}
              productName={SO_Jolyne.name}
              productJPName={SO_Jolyne.jName}
              productPrice={SO_Jolyne.price}
              cookie="Jolyne Kujo - SO"
              object={SO_Jolyne}
            />
            <this.createProduct
              productType="SO_Figure"
              productTypeSPAN={SO_StoneFree.type}
              productPartSPAN={SO_StoneFree.part}
              productID="SO2"
              productIDTxt="SO2"
              productImgSRC={SO_StoneFree.img_src}
              productName={SO_StoneFree.name}
              productJPName={SO_StoneFree.jName}
              productPrice={SO_StoneFree.price}
              cookie="Stone Free - SO"
              object={SO_StoneFree}
            />
            <this.createProduct
              productType="SO_Figure"
              productTypeSPAN={SO_Pucci.type}
              productPartSPAN={SO_Pucci.part}
              productID="SO3"
              productIDTxt="SO3"
              productImgSRC={SO_Pucci.img_src}
              productName={SO_Pucci.name}
              productJPName={SO_Pucci.jName}
              productPrice={SO_Pucci.price}
              cookie="Enrico Pucci - SO"
              object={SO_Pucci}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Set.type}
              productPartSPAN={SO_Set.part}
              productID="SO4"
              productIDTxt="SO4"
              productImgSRC={SO_Set.img_src}
              productName={SO_Set.name}
              productJPName={SO_Set.jName}
              productPrice={SO_Set.price}
              cookie="Stone Ocean Set"
              object={SO_Set}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_1.type}
              productPartSPAN={SO_Vol_1.part}
              productID="SO5"
              productIDTxt="SO5"
              productImgSRC={SO_Vol_1.img_src}
              productName={SO_Vol_1.name}
              productJPName={SO_Vol_1.jName}
              productPrice={SO_Vol_1.price}
              cookie="Stone Ocean Vol 1"
              object={SO_Vol_1}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_2.type}
              productPartSPAN={SO_Vol_2.part}
              productID="SO6"
              productIDTxt="SO6"
              productImgSRC={SO_Vol_2.img_src}
              productName={SO_Vol_2.name}
              productJPName={SO_Vol_2.jName}
              productPrice={SO_Vol_2.price}
              cookie="Stone Ocean Vol 2"
              object={SO_Vol_2}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_3.type}
              productPartSPAN={SO_Vol_3.part}
              productID="SO7"
              productIDTxt="SO7"
              productImgSRC={SO_Vol_3.img_src}
              productName={SO_Vol_3.name}
              productJPName={SO_Vol_3.jName}
              productPrice={SO_Vol_3.price}
              cookie="Stone Ocean Vol 3"
              object={SO_Vol_3}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_4.type}
              productPartSPAN={SO_Vol_4.part}
              productID="SO8"
              productIDTxt="SO8"
              productImgSRC={SO_Vol_4.img_src}
              productName={SO_Vol_4.name}
              productJPName={SO_Vol_4.jName}
              productPrice={SO_Vol_4.price}
              cookie="Stone Ocean Vol 4"
              object={SO_Vol_4}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_5.type}
              productPartSPAN={SO_Vol_5.part}
              productID="SO9"
              productIDTxt="SO9"
              productImgSRC={SO_Vol_5.img_src}
              productName={SO_Vol_5.name}
              productJPName={SO_Vol_5.jName}
              productPrice={SO_Vol_5.price}
              cookie="Stone Ocean Vol 5"
              object={SO_Vol_5}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_6.type}
              productPartSPAN={SO_Vol_6.part}
              productID="SO10"
              productIDTxt="SO10"
              productImgSRC={SO_Vol_6.img_src}
              productName={SO_Vol_6.name}
              productJPName={SO_Vol_6.jName}
              productPrice={SO_Vol_6.price}
              cookie="Stone Ocean Vol 6"
              object={SO_Vol_6}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_7.type}
              productPartSPAN={SO_Vol_7.part}
              productID="SO11"
              productIDTxt="SO11"
              productImgSRC={SO_Vol_7.img_src}
              productName={SO_Vol_7.name}
              productJPName={SO_Vol_7.jName}
              productPrice={SO_Vol_7.price}
              cookie="Stone Ocean Vol 7"
              object={SO_Vol_7}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_8.type}
              productPartSPAN={SO_Vol_8.part}
              productID="SO12"
              productIDTxt="SO12"
              productImgSRC={SO_Vol_8.img_src}
              productName={SO_Vol_8.name}
              productJPName={SO_Vol_8.jName}
              productPrice={SO_Vol_8.price}
              cookie="Stone Ocean Vol 8"
              object={SO_Vol_8}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_9.type}
              productPartSPAN={SO_Vol_9.part}
              productID="SO13"
              productIDTxt="SO13"
              productImgSRC={SO_Vol_9.img_src}
              productName={SO_Vol_9.name}
              productJPName={SO_Vol_9.jName}
              productPrice={SO_Vol_9.price}
              cookie="Stone Ocean Vol 9"
              object={SO_Vol_9}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_10.type}
              productPartSPAN={SO_Vol_10.part}
              productID="SO14"
              productIDTxt="SO14"
              productImgSRC={SO_Vol_10.img_src}
              productName={SO_Vol_10.name}
              productJPName={SO_Vol_10.jName}
              productPrice={SO_Vol_10.price}
              cookie="Stone Ocean Vol 10"
              object={SO_Vol_10}
            />
            <this.createProduct
              productType="SO_Manga"
              productTypeSPAN={SO_Vol_11.type}
              productPartSPAN={SO_Vol_11.part}
              productID="SO15"
              productIDTxt="SO15"
              productImgSRC={SO_Vol_11.img_src}
              productName={SO_Vol_11.name}
              productJPName={SO_Vol_11.jName}
              productPrice={SO_Vol_11.price}
              cookie="Stone Ocean Vol 11"
              object={SO_Vol_11}
            />
            <this.createProduct
              productType="SO_Clothing"
              productTypeSPAN={JOLYNE_Tshirt.type}
              productPartSPAN={JOLYNE_Tshirt.part}
              productID="SO16"
              productIDTxt="SO16"
              productImgSRC={JOLYNE_Tshirt.img_src}
              productName={JOLYNE_Tshirt.name}
              productJPName={JOLYNE_Tshirt.jName}
              productPrice={JOLYNE_Tshirt.price}
              cookie="Jolyne Tshirt"
              object={JOLYNE_Tshirt}
            />
            <this.createProduct
              productType="SO_Clothing"
              productTypeSPAN={JOLYNE_AND_STONE_FREE_Tshirt.type}
              productPartSPAN={JOLYNE_AND_STONE_FREE_Tshirt.part}
              productID="SO17"
              productIDTxt="SO17"
              productImgSRC={JOLYNE_AND_STONE_FREE_Tshirt.img_src}
              productName={JOLYNE_AND_STONE_FREE_Tshirt.name}
              productJPName={JOLYNE_AND_STONE_FREE_Tshirt.jName}
              productPrice={JOLYNE_AND_STONE_FREE_Tshirt.price}
              cookie="Jolyne/Stone-Free Tshirt"
              object={JOLYNE_AND_STONE_FREE_Tshirt}
            />
          </div>
        </div>
      </div>
    );
  }
}

const Products = () => {
  //! Fades
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <div id={styles.products}>
      <motion.div
        className={styles.products_cnt}
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={FadeLeft}
      >
        <ProductsHolder />
      </motion.div>
    </div>
  );
};

export default Products;
