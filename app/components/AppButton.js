import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../constants/colors";

function AppButton({
  title,
  onPress,
  color = "primaryBlue",
  textcolor,
  borderColor,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        { backgroundColor: colors[color], borderColor: borderColor },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.text, { color: colors[textcolor] }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primaryBlue,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    padding: 8,
    width: "100%",
    marginVertical: 11,
    borderColor: colors.primaryBlue,
    borderWidth: 2,
  },
  text: {
    color: colors.white,
    fontSize: 15,
    textTransform: "capitalize",
    fontWeight: "500",
  },
});

export default AppButton;
