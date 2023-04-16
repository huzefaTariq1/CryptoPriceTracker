import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../constants/colors";

const BuyCoins = ({ navigation, route }) => {
  const handleBack = () => {
    console.log("back");
  };

  return (
    <View style={styles.main}>
      <View style={styles.primarybox}></View>
      <View style={styles.secondarybox}></View>
    </View>
  );
};

const styles = StyleSheet.create({
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
});

export default BuyCoins;
