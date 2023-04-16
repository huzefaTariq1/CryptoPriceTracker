import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Entypo } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import routes from "../constants/routes";

const BuyCoins = ({ navigation, route }) => {
  const handleBack = () => {
    console.log("back");
  };

  return (
    <View style={styles.main}>
      <View style={styles.primarybox}></View>
      <View style={styles.secondarybox}>
        {/* cross btn */}
        <View style={styles.btnConatiner}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.HOMEPAGE)}
            style={styles.btn}
          >
            <Entypo name="cross" size={22} color="black" />
          </TouchableOpacity>
        </View>

        {/* image and detail */}
        <View style={styles.detailsConatiner}>
          <View>
            <Image
              style={styles.Image}
              source={require("../assets/hcoin.png")}
            />
          </View>
          <View style={{ paddingLeft: 20 }}>
            <AppText>Buy</AppText>
            <AppText style={styles.text}>
              Buy Crypto with your local currency
            </AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    width: 26,
    height: 26,
    borderRadius: 13,
    backgroundColor: "#B2BDCB",
    justifyContent: "center",
    alignItems: "center",
  },
  btnConatiner: {
    alignItems: "flex-end",
    padding: 10,
    // backgroundColor: "red",
  },
  detailsConatiner: {
    paddingHorizontal: 10,
    flexDirection: "row",
    alignItems: "center",

    justifyContent: "center",
  },
  Image: {
    width: 50,
    height: 50,
  },
  main: {
    flex: 1,
    width: "100%",
    backgroundColor: "#000000",
  },
  primarybox: {
    flex: 4,
    width: "100%",
    backgroundColor: "#000000",
  },

  secondarybox: {
    flex: 1,
    width: "100%",
    backgroundColor: "#171E26",
    paddingHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  text: {
    fontSize: 10,
    color: "#8D8D8D",
  },
});

export default BuyCoins;
