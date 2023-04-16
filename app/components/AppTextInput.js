import React from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../constants/colors";

function AppTextInput({ icon, style, ...otherProps }) {
  return (
    <View style={[styles.container, style]}>
      {icon && (
        <MaterialCommunityIcons
          name={icon}
          size={20}
          color={colors.medium}
          style={styles.icon}
        />
      )}
      <TextInput
        placeholderTextColor="#7D7E81"
        style={styles.text}
        {...otherProps}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#30373E",
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    padding: 9,
    marginVertical: 10,
    borderColor: "#30373E",
    borderWidth: 2,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    fontSize: 12,
    color: "white",
  },
});

export default AppTextInput;
