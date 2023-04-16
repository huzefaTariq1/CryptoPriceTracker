import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  Switch,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Platform } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import AppTextInput from "../components/AppTextInput";
import routes from "../constants/routes";

const OrderReminderScree = ({ navigation, route }) => {
  const [email, setEmail] = useState("Anonymous541");

  const [isEnabled, setIsEnabled] = useState(false);
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const toggleSwitch1 = () => setIsEnabled1((previousState) => !previousState);
  const toggleSwitch2 = () => setIsEnabled2((previousState) => !previousState);
  const toggleSwitch3 = () => setIsEnabled3((previousState) => !previousState);

  console.log(email);
  const handleBack = () => {
    console.log("back");
  };

  const height = Platform.OS === "ios" ? 30 : 20;
  const marginBottom = Platform.OS === "ios" ? 8 : 3;

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
                onPress={() => navigation.navigate(routes.PROFILE_SETTING)}
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
              }}
            >
              <AppText style={{ fontSize: 14 }}>
                Order Confirmatiom Reminder
              </AppText>
              <AppText style={{ fontSize: 10, color: "#7E8286" }}>
                Select the order type to turn on your order
              </AppText>
              <AppText style={{ fontSize: 10, color: "#7E8286" }}>
                confirmation reminders for
              </AppText>
            </View>

            {/* toogle buttons */}
            <View style={styles.toogleBtns}>
              <View style={{ alignItems: "flex-start" }}>
                <Switch
                  style={{
                    width: 50,
                    height: height,
                    marginBottom: marginBottom,
                  }}
                  trackColor={{ false: "#767577", true: "#1492E6" }}
                  thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
                  //   ios_backgroundColor="#FFFFFF"
                  onValueChange={toggleSwitch}
                  value={isEnabled}
                />
              </View>
              <AppText style={{ fontSize: 13, paddingLeft: 10 }}>
                Limit Order
              </AppText>
            </View>

            <View style={styles.toogleBtns}>
              <View style={{ alignItems: "flex-start" }}>
                <Switch
                  style={{
                    width: 50,
                    height: height,
                    marginBottom: marginBottom,
                  }}
                  trackColor={{ false: "#767577", true: "#1492E6" }}
                  thumbColor={isEnabled1 ? "#FFFFFF" : "#FFFFFF"}
                  //   ios_backgroundColor="#FFFFFF"
                  onValueChange={toggleSwitch1}
                  value={isEnabled1}
                />
              </View>
              <AppText style={{ fontSize: 13, paddingLeft: 10 }}>
                Market Order
              </AppText>
            </View>

            <View style={styles.toogleBtns}>
              <View style={{ alignItems: "flex-start" }}>
                <Switch
                  style={{
                    width: 50,
                    height: height,
                    marginBottom: marginBottom,
                  }}
                  trackColor={{ false: "#767577", true: "#1492E6" }}
                  thumbColor={isEnabled2 ? "#FFFFFF" : "#FFFFFF"}
                  //   ios_backgroundColor="#FFFFFF"
                  onValueChange={toggleSwitch2}
                  value={isEnabled2}
                />
              </View>
              <AppText style={{ fontSize: 13, paddingLeft: 10 }}>
                Stop Limit Order
              </AppText>
            </View>

            <View style={styles.toogleBtns}>
              <View style={{ alignItems: "flex-start" }}>
                <Switch
                  style={{
                    width: 50,
                    height: height,
                    marginBottom: marginBottom,
                  }}
                  trackColor={{ false: "#767577", true: "#1492E6" }}
                  thumbColor={isEnabled3 ? "#FFFFFF" : "#FFFFFF"}
                  //   ios_backgroundColor="#FFFFFF"
                  onValueChange={toggleSwitch3}
                  value={isEnabled3}
                />
              </View>
              <AppText style={{ fontSize: 13, paddingLeft: 10 }}>
                Auto Borrow/Repay Margin
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
  btn: {
    padding: 10,
    paddingVertical: 6,
    backgroundColor: "#30373E",
    width: "47%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  btn1: {
    padding: 10,
    paddingVertical: 6,
    backgroundColor: "#4FFC34",
    width: "47%",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
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
    flex: 2,
    width: "100%",
    backgroundColor: "#171E26",
    paddingHorizontal: 10,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    overflow: "hidden",
  },
  toogleBtns: {
    flexDirection: "row",
    alignItems: "center",
  },
  workingContainer: {
    padding: 20,
  },
});

export default OrderReminderScree;
