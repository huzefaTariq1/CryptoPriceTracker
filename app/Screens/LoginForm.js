import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import Screen from "../components/Screen";
import AppText from "../components/AppText";
import { Ionicons } from "@expo/vector-icons";
import routes from "../constants/routes";
import Logo from "../assets/logo.svg";
import * as Yup from "yup";

import AppFormField from "../components/AppFormField";
import SubmitButton from "../components/SubmitButton";
import AppForm from "../components/AppForm";
import colors from "../constants/colors";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().label("Password"),
});

const LoginForm = ({ navigation }) => {
  const handleBack = () => {
    console.log("back");
    navigation.navigate(routes.LOGIN_SIGNUP);
  };

  const handleRegistar = () => {
    console.log("back");
    navigation.navigate(routes.REGISTER);
  };

  const handleSubmit = (val) => {
    console.log(val);
    navigation.navigate(routes.TABBAR);
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
            <AppText style={{ color: "#1492E6" }}>Registar</AppText>
          </TouchableOpacity>
        </View>
        <View style={styles.logo}>
          <Logo width={150} height={150} />
        </View>

        <View>
          <AppText style={styles.heading}>Login</AppText>

          <AppForm
            initialValues={{ email: "", password: "" }}
            onSubmit={(values) => handleSubmit(values)}
            validationSchema={validationSchema}
          >
            <AppText style={styles.text}>Email</AppText>

            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="email"
              keyboardType="email-address"
              name="email"
              placeholder="abc@gmail.com"
              textContentType="emailAddress"
            />

            <AppText style={styles.text}>Password</AppText>
            <AppFormField
              autoCapitalize="none"
              autoCorrect={false}
              icon="lock"
              name="password"
              placeholder="Password"
              secureTextEntry
              textContentType="password"
            />

            <View style={styles.by}>
              <SubmitButton title="Login" />
            </View>
          </AppForm>
          <View style={styles.ab}>
            <AppText style={styles.forgotText}>Forgot Password?</AppText>
          </View>
        </View>
      </View>
    </Screen>
  );
};

const styles = StyleSheet.create({
  ab: {
    width: "100%",
  },
  by: {
    paddingTop: 20,
    paddingBottom: 10,
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
  forgotText: {
    color: "white",
    textAlign: "right",
    fontSize: 14,
    fontWeight: "600",
  },
  heading: { fontSize: 24, color: colors.primaryGreen, paddingVertical: 20 },
  logo: {
    alignItems: "center",
  },
  main: {
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
});

export default LoginForm;
