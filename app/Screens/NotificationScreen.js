import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../constants/routes";
import Notify from "../assets/notify.svg";

const NotificationScreen = ({ navigation }) => {
  const handleBack = () => {
    //console.log("backedd");
    navigation.navigate(routes.SIDE_DRAWER);
  };

  const handleRegistar = () => {
    console.log("notify");
  };
  return (
    <Screen>
      <View style={styles.main}>
        <View style={styles.topContainer}>
          <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
            {/* <AppText style={styles.backbtnText}>&lt;</AppText> */}
            <Ionicons name="chevron-back" size={29} color="black" />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleRegistar}>
            <FontAwesome5 name="edit" size={24} color="#B2BDCB" />
          </TouchableOpacity>
        </View>
        <AppText style={{ paddingTop: 20, fontSize: 20 }}>
          Notifications
        </AppText>

        <View style={styles.centerIcon}>
          <Notify width={100} height={100} />
        </View>
        <AppText style={{ textAlign: "center" }}>
          No Notifications found
        </AppText>
      </View>
    </Screen>
  );
};

export default NotificationScreen;

const styles = StyleSheet.create({
  backBtn: {
    height: 32,
    width: 33,
    backgroundColor: "white",
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  centerIcon: {
    alignItems: "center",
    paddingTop: 180,
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
