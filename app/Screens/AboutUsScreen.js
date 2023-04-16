import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Logo1 from "../assets/logo1.svg";
import Twitter from "../assets/twitter.svg";
import Fb from "../assets/fb.svg";
import LottieView from "lottie-react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../constants/routes";

const AboutUsScreen = ({ navigation }) => {
  const animation = useRef(null);
  const handleBack = () => {
    //console.log("backedd");
    navigation.navigate(routes.SIDE_DRAWER);
  };
  return (
    <Screen>
      <View style={styles.main}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
            {/* <AppText style={styles.backbtnText}>&lt;</AppText> */}
            <Ionicons name="chevron-back" size={29} color="black" />
          </TouchableOpacity>
        </View>
        <AppText style={{ fontSize: 20, paddingTop: 10 }}>About Us</AppText>

        {/* logo */}
        <View style={styles.logo}>
          <Logo1 width={150} height={90} />
        </View>

        {/* version */}
        <AppText style={{ textAlign: "center" }}>v1.26.2</AppText>

        {/* icons */}
        <View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 20,
              justifyContent: "space-around",
            }}
          >
            <Fb width={25} height={25} />
            <AppText style={{ fontSize: 13 }}>Like Us On FaceBook</AppText>
          </View>
          <View
            style={{
              flexDirection: "row",
              paddingTop: 25,
              justifyContent: "space-around",
            }}
          >
            <Twitter width={25} height={25} />
            <AppText style={{ fontSize: 13 }}>Follow Us On Twitter</AppText>
          </View>
        </View>
        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: "100%",
              height: 300,
              backgroundColor: "#171E26",
            }}
            source={require("../assets/76220.json")}
          />
        </View>
      </View>
    </Screen>
  );
};

export default AboutUsScreen;

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
  },
  backBtn: {
    height: 32,
    width: 33,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  logo: {
    alignItems: "center",
    paddingVertical: 20,
  },
  main: {
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
