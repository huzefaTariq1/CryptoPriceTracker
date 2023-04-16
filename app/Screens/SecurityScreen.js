import { StyleSheet, Text, View, TouchableOpacity, Switch } from "react-native";
import React, { useRef, useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import LottieView from "lottie-react-native";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../constants/routes";
const SecurityScreen = ({ navigation }) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  const animation = useRef(null);
  const handleBack = () => {
    console.log("backedd");
    navigation.navigate(routes.SIDE_DRAWER);
  };
  return (
    <Screen>
      <View style={styles.pmBox}>
        <View style={styles.main}>
          <View style={styles.topContainer}>
            <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
              {/* <AppText style={styles.backbtnText}>&lt;</AppText> */}
              <Ionicons name="chevron-back" size={29} color="black" />
            </TouchableOpacity>
            {/* <TouchableOpacity onPress={handleRegistar}>
            <FontAwesome5 name="headphones-alt" size={24} color="#B2BDCB" />
          </TouchableOpacity> */}
          </View>

          <AppText style={{ paddingTop: 10 }}>Security</AppText>

          <View style={styles.animationContainer}>
            <LottieView
              autoPlay
              ref={animation}
              style={{
                width: "100%",
                height: 150,
                backgroundColor: "#171E26",
              }}
              source={require("../assets/94451.json")}
            />
          </View>
        </View>
      </View>

      <View style={styles.pmBox1}>
        {/* chage password */}
        <View style={styles.btn11}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(routes.CHANGE_PASSWORD)}
          >
            <View style={styles.iconBtn}>
              <View style={{ flexDirection: "row", alignItems: "center" }}>
                <Text style={styles.text}>Change Password</Text>
              </View>
              <View>
                <AntDesign name="arrowright" size={24} color="#4FFC34" />
              </View>
            </View>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          style={styles.button1}
          onPress={() => console.log("tapped")}
        >
          <View style={styles.iconBtn}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text style={styles.text}>Two Factor Verification</Text>
            </View>
            <View
              style={{
                padding: 0,
                margin: 0,
              }}
            >
              <Switch
                trackColor={{ false: "#767577", true: "#4FFC34" }}
                thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                ios_backgroundColor="#FFFFFF"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default SecurityScreen;

const styles = StyleSheet.create({
  btn11: {
    paddingTop: 80,
  },
  button: {
    backgroundColor: "#171E26",
    borderRadius: 8,
    justifyContent: "center",
    //alignItems: "center",
    padding: 10,
    width: "100%",
    marginVertical: 9,
    borderColor: "#171E26",
    borderWidth: 2,
  },
  button1: {
    backgroundColor: "#171E26",
    borderRadius: 8,
    justifyContent: "center",
    //alignItems: "center",
    padding: 6,
    width: "100%",
    marginVertical: 9,
    borderColor: "#171E26",
    borderWidth: 2,
  },
  pmBox: {
    paddingHorizontal: 10,
    width: "100%",
    // backgroundColor: "#2c62e2",
  },
  pmBox1: {
    paddingHorizontal: 10,
    width: "100%",
    backgroundColor: "#1F2630",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
    height: "100%",
  },
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
  iconBtn: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  main: {
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: "white",
  },
});
