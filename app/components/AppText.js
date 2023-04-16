import React, { useCallback } from "react";
import { Platform, Text, StyleSheet } from "react-native";
import { useFonts } from "expo-font";

function AppText({ children, style }) {
  const [fontsLoaded] = useFonts({
    Popins: require("../assets/fonts/Comfortaa-Regular.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return <Text style={[styles.text, style]}>{children}</Text>;
}

const styles = StyleSheet.create({
  text: {
    fontSize: 16,
    //fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    fontFamily: "Popins",
    color: "white",
  },
});
export default AppText;
