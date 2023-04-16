import { StyleSheet, Text, View, Button } from "react-native";
import React, { useRef, useEffect } from "react";
import Screen from "../components/Screen";
import Logo from "../assets/logo.svg";
import LottieView from "lottie-react-native";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import routes from "../constants/routes";
import { ScrollView } from "react-native";

const LoginRegistarScreen = ({ navigation }) => {
  const animation = useRef(null);
  return (
    <Screen>
      <View style={styles.logo}>
        <Logo width={150} height={150} />
      </View>
      <View style={styles.animationContainer}>
        <LottieView
          autoPlay
          ref={animation}
          style={{
            width: 320,
            height: 250,
            backgroundColor: "#171E26",
          }}
          source={require("../assets/69760.json")}
        />
      </View>

      <ScrollView>
        <View style={styles.mainDiv}>
          <AppButton
            title="Login"
            textcolor="black"
            color="primaryGreen"
            borderColor="#4FFC34"
            onPress={() => navigation.navigate(routes.LOGIN)}
          />
          <AppButton
            title="Registar"
            textcolor="white"
            color="buttonBlack"
            borderColor="#16181D"
            onPress={() => navigation.navigate(routes.REGISTER)}
          />

          <View style={styles.textContainer}>
            <AppText style={styles.smallText}>
              By Precedding You Agree to Our
            </AppText>
            <AppText style={styles.smallBoldText}>Term & Condition </AppText>
            <AppText style={styles.smallText}>
              and Confirm You Are Atleast 13 Years Old{" "}
            </AppText>
          </View>
        </View>
      </ScrollView>
    </Screen>
  );
};

const styles = StyleSheet.create({
  mainDiv: {
    paddingHorizontal: 10,
  },
  animationContainer: {
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
  },
  smallText: {
    fontSize: 12,
    textAlign: "center",
    paddingVertical: 10,
  },
  smallBoldText: {
    fontSize: 17,
    textAlign: "center",
    fontWeight: "bold",
  },
  textContainer: {
    marginTop: 20,
  },
});
export default LoginRegistarScreen;
