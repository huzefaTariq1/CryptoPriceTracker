import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import routes from "../constants/routes";
import AppText from "../components/AppText";
import colors from "../constants/colors";
import CountryDropDown from "../components/CountryDropDown";
import AppButton from "../components/AppButton";

const VerifyAccountScreen = ({ navigation }) => {
  const handleBack = () => {
    console.log("back");
    navigation.navigate(routes.TABBAR);
  };
  return (
    <Screen>
      <View style={styles.main}>
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          {/* <AppText style={styles.backbtnText}>&lt;</AppText> */}
          <Ionicons name="chevron-back" size={29} color="black" />
        </TouchableOpacity>

        <AppText style={{ paddingTop: 30, fontSize: 17, fontWeight: "500" }}>
          Select Country Of Residence
        </AppText>

        <View style={{ paddingVertical: 10 }}>
          <AppText style={styles.smallText}>
            Please Ensure Your Country of Residence Matches Your Valid ID.Your
            Preveliges Could Change Based On the Selection Learm More in the{" "}
            <AppText style={styles.greenText}>Verification Center</AppText>
          </AppText>
        </View>

        <View style={{ paddingVertical: 30 }}>
          <CountryDropDown />
        </View>

        <View>
          <AppText>Verification Process</AppText>
        </View>

        <View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="numeric-1-circle"
              size={24}
              color={colors.primaryGreen}
            />
            <AppText>Identity Verification</AppText>
          </View>

          {/* line breker */}
          <View
            style={{
              height: 70,

              marginLeft: 10,
              borderWidth: 2,
              borderLeftColor: "#707070",
              borderTopColor: "#171E26",
              borderBottomColor: "#171E26",
              borderRightColor: "#171E26",
              paddingTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              <AntDesign name="idcard" size={24} color="#8D8D8D" />
              <AppText style={styles.verySmallText}>
                Governmental Issue ID
              </AppText>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              <FontAwesome name="user-circle-o" size={24} color="#8D8D8D" />
              <AppText style={styles.verySmallText}>
                Facial Verification
              </AppText>
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <MaterialCommunityIcons
              name="numeric-2-circle"
              size={24}
              color={colors.primaryGreen}
            />
            <AppText>Verified Plus</AppText>
          </View>

          {/* line break */}
          <View
            style={{
              marginLeft: 10,

              paddingTop: 8,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                paddingLeft: 20,
              }}
            >
              <MaterialIcons name="place" size={24} color="#8D8D8D" />
              <AppText style={styles.verySmallText}>Proof of Address</AppText>
            </View>
          </View>
        </View>

        {/* Verification end */}

        <AppButton
          title="Continoue"
          textcolor="black"
          color="primaryGreen"
          borderColor="#4FFC34"
          onPress={() => navigation.navigate(routes.VERIFY_ACCOUNT)}
        />
      </View>
    </Screen>
  );
};

export default VerifyAccountScreen;

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
  greenText: {
    color: colors.primaryGreen,
    fontSize: 14,
  },
  main: {
    paddingHorizontal: 15,
  },
  smallText: {
    color: colors.smallText,
    fontSize: 14,
    lineHeight: 23,
  },
  verySmallText: {
    color: "#8D8D8D",
    fontSize: 11,
    paddingLeft: 10,
  },
});
