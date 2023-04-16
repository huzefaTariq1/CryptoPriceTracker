import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Screen from "../components/Screen";
import Logo from "../assets/logo.svg";
import Mark from "../assets/mark.svg";
import Tick from "../assets/tick.svg";
import AppButton from "../components/AppButton";
import AppText from "../components/AppText";
import routes from "../constants/routes";
import colors from "../constants/colors";

const CustomizeScreen = ({ navigation }) => {
  const [select, setSelect] = useState(false);
  const handleBackToHome = () => {
    console.log("back");
    navigation.navigate(routes.TABBAR);
  };
  return (
    <Screen>
      <View style={styles.mainDiv}>
        <View>
          <View style={styles.logo}>
            <Tick width={180} height={180} />
          </View>
          <View style={{ paddingVertical: 30 }}>
            <AppText
              style={{ textAlign: "center", fontWeight: "bold", fontSize: 22 }}
            >
              Customization Complete!
            </AppText>
            <AppText
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: 22,
                paddingTop: 10,
                paddingBottom: 25,
              }}
            >
              Varify Your Account!
            </AppText>
            {/* <AppText style={styles.terms}>
              We Are required to Verify Your Identity
            </AppText>
            <AppText style={styles.terms}>
              to help protect your account from fraud and{" "}
            </AppText>
            <AppText style={styles.terms}>
              Identify theft.You May start Trading{" "}
            </AppText>
            <AppText style={styles.terms}>After this Step</AppText> */}

            {/* <AppText style={styles.smallText}>
              We Are required to Verify Your Identity
            </AppText>
            <AppText style={styles.smallText}>
              to help protect your account from fraud and
            </AppText>
            <AppText style={styles.smallText}>
              Identify theft.You May start Trading
            </AppText>
            <AppText style={styles.smallText}>After this Step</AppText> */}

            <AppText style={styles.smallText}>
              We Are required to Verify Your Identity to help protect your
              account from fraud and Identify theft.You May start Trading After
              this Step
            </AppText>
          </View>

          <AppButton
            title="Continoue"
            textcolor="black"
            color="primaryGreen"
            borderColor="#4FFC34"
            onPress={() => navigation.navigate(routes.VERIFY_ACCOUNT)}
          />

          <TouchableOpacity onPress={handleBackToHome}>
            <AppText
              style={{
                color: colors.primaryGreen,
                textAlign: "center",
                paddingTop: 20,
                paddingHorizontal: 10,
              }}
            >
              Back to HomePage
            </AppText>
          </TouchableOpacity>
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
  smallText: {
    color: colors.smallText,
    fontSize: 13,
    lineHeight: 30,
  },
  terms: {
    color: "#7E8286",
    paddingBottom: 20,
    fontSize: 14,
  },
});
export default CustomizeScreen;
