import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Screen from "../components/Screen";
//import * as Svg from 'react-native-svg';
import Svg, { Circle, Rect } from "react-native-svg";
import Sale from "../assets/sale.svg";
import World from "../assets/world.svg";
import Glo from "../assets/glo.svg";
import AppText from "../components/AppText";
import CountryDropDown from "../components/CountryDropDown";
import AppButton from "../components/AppButton";
import routes from "../constants/routes";

const CountrySelectScreen = ({ navigation }) => {
  return (
    <Screen>
      <View style={styles.main}>
        <View style={styles.globe}>
          <Glo width={200} height={180} />
        </View>
        <AppText style={styles.text}>
          Before We Start, We'll Have To Known Your Current Location Of
          Residence
        </AppText>

        <CountryDropDown />
        <View style={styles.btn}>
          <AppButton
            title="Create An Account"
            textcolor="black"
            color="primaryGreen"
            onPress={() => navigation.navigate(routes.LOGIN_SIGNUP)}
          />
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginTop: 10,
  },
  main: {
    paddingHorizontal: 10,
  },
  globe: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
  },
  text: {
    fontSize: 22,
    marginBottom: 30,
  },
});

export default CountrySelectScreen;
