import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";
import routes from "../constants/routes";
const Home1 = ({ navigation }) => {
  return (
    <View>
      <Text>Home1</Text>
      <Button
        title="change"
        onPress={() => navigation.navigate(routes.PROFILE)}
      />
    </View>
  );
};

export default Home1;

const styles = StyleSheet.create({});
