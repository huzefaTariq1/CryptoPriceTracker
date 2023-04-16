import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import routes from "../constants/routes";

const ProfileSettingScreen = ({ navigation }) => {
  const handleBack = () => {
    //console.log("backedd");
    navigation.navigate(routes.SIDE_DRAWER);
  };
  return (
    <Screen>
      <View style={styles.main}>
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          {/* <AppText style={styles.backbtnText}>&lt;</AppText> */}
          <Ionicons name="chevron-back" size={29} color="black" />
        </TouchableOpacity>

        <AppText>Profilr Seeting</AppText>
      </View>
    </Screen>
  );
};

export default ProfileSettingScreen;

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
  main: {
    paddingHorizontal: 20,
  },
});
