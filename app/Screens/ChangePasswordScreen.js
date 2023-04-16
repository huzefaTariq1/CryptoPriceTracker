import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState, useRef } from "react";
import { Ionicons } from "@expo/vector-icons";

import AppText from "../components/AppText";
import Screen from "../components/Screen";
import routes from "../constants/routes";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import CompleteScreen from "./CompleteScreen";

const validationSchema = Yup.object().shape({
  // email: Yup.string().required().email().label("Email"),
  // password: Yup.string().required().label("Password"),
});

const ChangePasswordScreen = ({ navigation }) => {
  const [modalVisibled, setModalVisibled] = useState(false);
  const handleBack = () => {
    //console.log("backedd");
    navigation.navigate(routes.SECURTY);
  };

  const handleSubmit = (val) => {
    console.log(val);
    console.log("click");
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
          {/* <TouchableOpacity onPress={handleRegistar}>
            <FontAwesome5 name="headphones-alt" size={24} color="#B2BDCB" />
          </TouchableOpacity> */}
        </View>

        <AppText style={{ paddingTop: 10, fontSize: 20 }}>
          Change Password
        </AppText>

        <View style={styles.formConatiner}>
          <AppForm
            initialValues={{ email: "", password: "", cpassword: "" }}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            <AppText style={styles.text}>Current Password</AppText>

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="abc@gmail.com"
              textContentType="emailAddress"
            />

            <AppText style={styles.text}>New Password</AppText>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <AppText style={styles.text}>Confirm Password</AppText>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="cpassword"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <View style={styles.by}>
              <SubmitButton title="Register" />
            </View>
          </AppForm>
        </View>
        <CompleteScreen
          modalVisibled={modalVisibled}
          setModalVisibled={setModalVisibled}
        />
      </View>
    </Screen>
  );
};

export default ChangePasswordScreen;

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
  formConatiner: {
    paddingTop: 25,
  },
  main: {
    paddingHorizontal: 20,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});
