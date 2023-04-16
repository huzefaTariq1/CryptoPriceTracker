import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Avatar from "../assets/avatar.svg";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import AppButton from "../components/AppButton";
import colors from "../constants/colors";
import SmallLogo from "../assets/smallLogo.svg";
import routes from "../constants/routes";
import LogOutScreen from "./LogOutScreen";

const SideDrawerScreen = ({ navigation }) => {
  const [modalVisibled, setModalVisibled] = useState(false);
  const handleBack = () => {
    //console.log("backedd");
    navigation.navigate(routes.TABBAR);
  };

  const handleRegistar = () => {
    navigation.navigate(routes.HELP_AND_SUPPROT);
  };

  const handleLogOut = () => {
    // navigation.navigate(routes.HavePurchase);
    setModalVisibled(true);
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
            <FontAwesome5 name="headphones-alt" size={24} color="#B2BDCB" />
          </TouchableOpacity>
        </View>

        {/* user info card */}
        <View
          style={{
            flexDirection: "row",
            borderWidth: 2,
            borderBottomColor: "#30373E",
            borderTopColor: "#171E26",
            borderRightColor: "#171E26",
            borderLeftColor: "#171E26",
            paddingVertical: 10,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Avatar width={40} height={40} />
            <TouchableWithoutFeedback
              onPress={() => navigation.navigate(routes.PROFILE_SETTING)}
            >
              <View style={{ marginLeft: 10 }}>
                <AppText style={{ fontSize: 12 }}>Anonynomus 541</AppText>
                <AppText style={{ fontSize: 10 }}>ID 54128378</AppText>
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View
            style={{
              flexDirection: "row",

              alignItems: "center",
            }}
          >
            <AntDesign name="idcard" size={24} color="#1492E6" />
            <AppText
              style={{ fontSize: 10, paddingLeft: 12, color: "#1492E6" }}
            >
              Unverified
            </AppText>
          </View>
        </View>

        {/* other card */}
        <View
          style={{
            borderWidth: 2,
            borderBottomColor: "#30373E",
            borderTopColor: "#171E26",
            borderRightColor: "#171E26",
            borderLeftColor: "#171E26",
            marginBottom: 9,
          }}
        >
          <View
            style={{
              flexDirection: "row",

              paddingVertical: 10,
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Avatar width={40} height={40} />
              <View style={{ marginLeft: 10 }}>
                <AppText style={{ fontSize: 12 }}>Anonynomus 541</AppText>
                <AppText style={{ fontSize: 10 }}>ID 54128378</AppText>
              </View>
            </View>
          </View>

          <AppButton
            title="Verify Account"
            textcolor="primaryGreen"
            color="lightblack"
            borderColor="#1F2630"
            onPress={() => console.log("tappeddd")}
          />
        </View>

        {/* icon buttons listing */}
        <ScrollView height={400}>
          <View>
            {/* referal btn */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(routes.REFER_FREIND)}
            >
              <View style={styles.iconBtn}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <AntDesign name="adduser" size={24} color="white" />
                  <Text style={styles.text}>Refferal</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            {/* notification */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(routes.NOTIFICATIONS)}
            >
              <View style={styles.iconBtn}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <Entypo name="notification" size={24} color="white" />
                  <Text style={styles.text}>Notifications</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            {/* Payment seeting*/}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(routes.PAYMENT_SETTING)}
            >
              <View style={styles.iconBtn}>
                <View style={{ flexDirection: "row", alignItems: "center" }}>
                  <MaterialIcons name="payment" size={24} color="white" />
                  <Text style={styles.text}>Payment Setting</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            {/* security Setting */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(routes.SECURTY)}
            >
              <View style={styles.iconBtn}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons name="finger-print" size={24} color="white" />
                  <Text style={styles.text}>Securty</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            {/* help and support */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(routes.HELP_AND_SUPPROT)}
            >
              <View style={styles.iconBtn}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <FontAwesome5 name="headset" size={24} color="white" />
                  <Text style={styles.text}>Help & Support</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            {/* about us */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate(routes.ABOUT)}
            >
              <View style={styles.iconBtn}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <Ionicons
                    name="md-information-circle-outline"
                    size={24}
                    color="white"
                  />
                  <Text style={styles.text}>About Us</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            {/* Share all */}
            <TouchableOpacity
              style={styles.button}
              onPress={() => console.log("tapped")}
            >
              <View style={styles.iconBtn}>
                <View
                  style={{
                    flexDirection: "row",
                    alignItems: "center",
                  }}
                >
                  <SmallLogo width={27} height={27} />
                  <Text style={styles.text}>Share All Technology App</Text>
                </View>
                <View>
                  <Entypo name="triangle-right" size={24} color="white" />
                </View>
              </View>
            </TouchableOpacity>

            <AppButton
              title="Logout"
              textcolor="white"
              color="logoutbtn"
              borderColor="#1F2630"
              onPress={() => handleLogOut()}
            />
          </View>
        </ScrollView>

        <LogOutScreen
          modalVisibled={modalVisibled}
          setModalVisibled={setModalVisibled}
        />
      </View>
    </Screen>
  );
};

export default SideDrawerScreen;

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#30373E",
    borderRadius: 8,
    justifyContent: "center",
    //alignItems: "center",
    padding: 8,
    width: "100%",
    marginVertical: 9,
    borderColor: "#30373E",
    borderWidth: 2,
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
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  text: {
    color: colors.white,
    fontSize: 15,
    // textAlign: "center",
    fontWeight: "500",
    marginLeft: 10,
  },
});
