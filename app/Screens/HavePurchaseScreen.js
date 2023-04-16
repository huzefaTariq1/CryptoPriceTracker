import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import Logo from "../assets/logo.svg";
import Mark from "../assets/mark.svg";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import routes from "../constants/routes";
import colors from "../constants/colors";

const HavePurchaseScreen = ({ navigation }) => {
  const [select, setSelect] = useState(false);
  const handleRegistar = () => {
    console.log("back");
    navigation.navigate(routes.CUSTUMIZE_SCREEN);
  };
  return (
    <Screen>
      <TouchableOpacity onPress={handleRegistar}>
        <AppText
          style={{
            color: "#1492E6",
            textAlign: "right",
            paddingTop: 20,
            paddingHorizontal: 10,
          }}
        >
          Skip
        </AppText>
      </TouchableOpacity>
      <View style={styles.mainDiv}>
        <View>
          <View style={styles.logo}>
            <Mark width={180} height={180} />
          </View>
          <View style={{ paddingVertical: 30 }}>
            <AppText style={{ textAlign: "center" }}>
              Have You Purchased{" "}
            </AppText>
            <AppText style={{ textAlign: "center" }}>
              Crypto Currency Before?
            </AppText>
          </View>

          <View>
            <TouchableOpacity
              style={select ? styles.yesButton : styles.button}
              onPress={() => setSelect(!select)}
            >
              <Text style={styles.text}>Yes I have</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("tapped")}
            >
              <Text style={styles.text}>No, I have'nt</Text>
            </TouchableOpacity>
          </View>

          <AppButton
            title="Continoue"
            textcolor="black"
            color="primaryGreen"
            borderColor="#4FFC34"
            onPress={() => navigation.navigate(routes.CUSTUMIZE_SCREEN)}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#30373E",
    borderRadius: 10,
    justifyContent: "center",
    //alignItems: "center",
    padding: 12,
    width: "100%",
    marginVertical: 11,
    borderColor: "#30373E",
    borderWidth: 2,
  },
  yesButton: {
    backgroundColor: colors.primaryGreen,
    borderRadius: 10,
    justifyContent: "center",
    //alignItems: "center",
    padding: 12,
    width: "100%",
    marginVertical: 11,
    borderColor: colors.primaryGreen,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
    fontSize: 15,

    fontWeight: "500",
  },
  mainDiv: {
    paddingHorizontal: 10,
    justifyContent: "center",
    height: "100%",
  },
  logo: {
    alignItems: "center",
  },
});
export default HavePurchaseScreen;
