import React, { useRef, useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import { StyleSheet, View } from "react-native";

function ActivityIndicator() {
  const animation = useRef(null);

  return (
    <View style={styles.animationContainer}>
      <LottieView
        autoPlay
        ref={animation}
        style={{
          width: "100%",
          height: 150,
          backgroundColor: "#171E26",
        }}
        source={require("../assets/v-3.json")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ActivityIndicator;
