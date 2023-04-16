import React, { useState } from "react";
import { Button, Text, TouchableOpacity, View, StyleSheet } from "react-native";
import Modal from "react-native-modal";
import AppText from "./AppText";
import { Entypo } from "@expo/vector-icons";

import Hlogo from "../assets/hlogo.svg";
import Qrcode from "../assets/qrcode.svg";

const EditNameModal = ({ isModalVisible, toggleModal }) => {
  // const [isModalVisible, setModalVisible] = useState(false);

  // const toggleModal = () => {
  //   setModalVisible(false);
  // };

  console.log(isModalVisible);
  return (
    <View style={{ flex: 1 }}>
      {/* <Button title="Show modal" onPress={toggleModal} /> */}

      <Modal animationIn={"fadeInUp"} isVisible={isModalVisible}>
        {/* <View style={{}}>
          <AppText>hello</AppText>

          <Button title="Hide modal" onPress={toggleModal} />
        </View> */}
        <View style={styles.main}>
          {/* logo container */}
          <View style={styles.logoContainer}>
            <Hlogo width={200} height={70} />
            <TouchableOpacity style={styles.closeBtn} onPress={toggleModal}>
              <Entypo name="cross" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default EditNameModal;

const styles = StyleSheet.create({
  closeBtn: {
    backgroundColor: "#30373E",
    height: 33,
    width: 32,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  logoContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  main: {
    width: "100%",
    height: 450,
    backgroundColor: "#1F2630",
    borderRadius: 40,
    paddingHorizontal: 20,
    paddingVertical: 16,
  },
});
