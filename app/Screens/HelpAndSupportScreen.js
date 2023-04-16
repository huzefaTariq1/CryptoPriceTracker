import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useRef, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../constants/routes";
import Logo from "../assets/logo.svg";
import Email from "../assets/email.svg";
import colors from "../constants/colors";

const HelpAndSupportScreen = ({ navigation }) => {
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
          {/* <TouchableOpacity onPress={handleRegistar}>
            <FontAwesome5 name="headphones-alt" size={24} color="#B2BDCB" />
          </TouchableOpacity> */}
          <AppText style={{ paddingLeft: 10 }}>Request Help</AppText>
        </View>

        <View style={styles.animationContainer}>
          <LottieView
            autoPlay
            ref={animation}
            style={{
              width: "100%",
              height: 250,
              backgroundColor: "#171E26",
            }}
            source={require("../assets/41676.json")}
          />
        </View>

        <View style={styles.logo}>
          <Logo width={100} height={50} />
        </View>

        <AppText style={{ textAlign: "center", paddingVertical: 10 }}>
          How Can we Help You
        </AppText>
        <AppText style={styles.smallText}>
          Its Look Like You are Experiancing Problem
        </AppText>
        <AppText style={styles.smallText}>
          with our process.We are here to hepl
        </AppText>
        <AppText style={styles.smallText}>
          So please get in Touch with it
        </AppText>

        <View style={styles.boxContainer}>
          <View style={styles.box}>
            <Email width={90} height={30} />
            <AppText style={{ fontSize: 12, paddingTop: 10 }}>Email Us</AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
};

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
  },
  boxContainer: {
    alignItems: "center",
    paddingTop: 20,
  },
  box: {
    height: 145,
    width: 200,
    backgroundColor: "#1F2630",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
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

    padding: 0,
  },

  main: {
    paddingHorizontal: 20,
  },
  smallText: {
    color: colors.smallText,
    fontSize: 11,
    textAlign: "center",
    lineHeight: 16,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 10,
  },
});
