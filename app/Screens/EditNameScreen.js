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
import AppTextInput from "../components/AppTextInput";
import routes from "../constants/routes";

const EditNameScreen = ({ navigation, route }) => {
  const [email, setEmail] = useState("Anonymous541");

  console.log(email);
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
              <AppText>Edit Nick Name</AppText>
              <AppText style={{ fontSize: 10 }}>
                Set a custumized nickname for your profile
              </AppText>
            </View>

            {/* name input */}
            <View>
              <AppText>Nick Name</AppText>
              <AppTextInput
                style={{ padding: 5 }}
                autoCapitalize="none"
                autoCorrect={false}
                //icon="email"
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => setEmail(text)}
                name={email}
                placeholder="example@gmail.com"
                textContentType="emailAddress"
              />
            </View>

            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate(routes.PROFILE_SETTING)}
              >
                <AppText style={{ color: "#8D8D8D" }}>Cancel</AppText>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn1}
                onPress={() => console.log("tapped")}
              >
                <AppText style={{ color: "#171E26" }}>Save</AppText>
              </TouchableOpacity>
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
  workingContainer: {
    padding: 20,
  },
});

export default EditNameScreen;
