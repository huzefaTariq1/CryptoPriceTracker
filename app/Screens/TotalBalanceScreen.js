import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React, { useCallback } from "react";
import Screen from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import Avatar from "../assets/avatar.svg";
import Downhand from "../assets/downhand.svg";
import colors from "../constants/colors";

import { useFonts } from "expo-font";

import AppButton from "../components/AppButton";

import routes from "../constants/routes";

const TotalBalanceScreen = ({ navigation }) => {
  const [fontsLoaded] = useFonts({
    Popins: require("../assets/fonts/Comfortaa-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Screen>
      <View style={styles.main}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.SIDE_DRAWER)}
          >
            <Avatar width={40} height={40} />
          </TouchableOpacity>
          <View style={styles.insideTopBar}>
            <View style={{ marginRight: 20 }}>
              <AntDesign name="search1" size={24} color="#7D7E81" />
            </View>
            <Ionicons name="scan" size={24} color="#7D7E81" />
          </View>
        </View>

        {/* balance text */}
        <View style={styles.balanceText}>
          <AppText style={{ marginRight: 10 }}>Total Balance</AppText>
          <AntDesign name="eye" size={24} color="#7D7E81" />
        </View>

        {/* balance Conatiner */}
        <View style={styles.balanceConatiner}>
          <AppText style={{ textAlign: "center", fontSize: 30 }}>$0.00</AppText>
        </View>

        <View style={styles.logo}>
          <Downhand width={150} height={150} />
        </View>

        <AppText style={{ textAlign: "center" }}>
          Buy Your First Crypto Currency
        </AppText>

        <AppText style={styles.smallText}>
          Your Accout Has No asstes Yet.Please
        </AppText>
        <AppText style={styles.smallText}>Deposit OR Buy Crypto</AppText>

        {/* two button */}

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => console.log("tapped")}
          >
            <Text style={styles.text}>Deposit</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button1}
            onPress={() => console.log("tapped")}
          >
            <Text style={styles.text1}>Buy With Cash</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#30373E",
    borderRadius: 8,
    justifyContent: "center",
    //alignItems: "center",
    padding: 12,
    width: "43%",
    marginVertical: 11,
    borderColor: "#30373E",
    borderWidth: 2,
  },
  button1: {
    backgroundColor: "#4FFC34",
    borderRadius: 8,
    justifyContent: "center",
    //alignItems: "center",
    padding: 12,
    width: "43%",
    marginVertical: 11,
    borderColor: "#4FFC34",
    borderWidth: 2,
  },
  balanceConatiner: {
    width: "100%",
    backgroundColor: "#4FFC34",
    paddingVertical: 50,
    borderRadius: 35,
  },
  balanceText: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 23,
  },
  heading: {
    fontFamily: "Popins",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },

  insideTopBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  logo: {
    alignItems: "center",
    paddingVertical: 25,
  },
  main: {
    paddingHorizontal: 10,
    justifyContent: "center",
  },
  smallText: {
    color: colors.smallText,
    fontSize: 14,
    textAlign: "center",
  },
  text: {
    color: colors.primaryGreen,
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
  },
  text1: {
    color: "#16181D",
    fontSize: 15,
    textAlign: "center",
    fontWeight: "500",
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default TotalBalanceScreen;
