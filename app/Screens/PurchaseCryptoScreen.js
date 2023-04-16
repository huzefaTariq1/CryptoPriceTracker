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
import { Entypo } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import routes from "../constants/routes";

const PurchaseCryptoScreen = ({ navigation, route }) => {
  const handleBack = () => {
    console.log("back");
  };

  return (
    <View style={styles.main}>
      <View style={styles.primarybox}></View>
      <View style={styles.secondarybox}>
        <ScrollView>
          <View style={styles.workingContainer}>
            {/* backbtn */}
            <View
              style={{
                alignItems: "flex-end",

                zIndex: 1,
              }}
            >
              <TouchableOpacity
                onPress={navigation.navigate(routes.COIN_DETAIL)}
                style={styles.backBtn}
              >
                <Entypo name="cross" size={24} color="white" />
              </TouchableOpacity>
            </View>

            {/* display text */}
            <View
              style={{
                position: "relative",
                bottom: 20,
                alignItems: "center",
              }}
            >
              <AppText style={{ fontSize: 14 }}>Enter Amount</AppText>
              <AppText style={{ fontSize: 10, color: "#7E8286" }}>
                Select the order type to turn on your order
              </AppText>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  backBtn: {
    height: 32,
    width: 33,
    backgroundColor: "#30373E",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
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
    flex: 3,
    width: "100%",
    backgroundColor: "#171E26",
    paddingHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
});

export default PurchaseCryptoScreen;
