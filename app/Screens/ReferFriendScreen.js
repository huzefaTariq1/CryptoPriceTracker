import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import routes from "../constants/routes";
import Qr from "../assets/qr.svg";
import InviteQr from "../components/InviteQr";

const ReferFriendScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(false);
  };

  const handleBack = () => {
    //console.log("backedd");
    navigation.navigate(routes.SIDE_DRAWER);
  };
  return (
    <Screen>
      <View style={styles.main}>
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          {/* <AppText style={styles.backbtnText}>&lt;</AppText> */}
          <Ionicons name="chevron-back" size={29} color="black" />
        </TouchableOpacity>

        <View style={{ paddingVertical: 20 }}>
          <AppText style={styles.heading}>
            Refers Friends.Earn Crypto Together
          </AppText>
        </View>

        {/* container */}
        <View style={{ alignItems: "center" }}>
          <View style={styles.container}>
            <AppText style={{ textAlign: "center" }}>Refferal</AppText>

            {/* share detail */}
            <View style={styles.shareDetail}>
              <View>
                <AppText style={styles.smallText}>You Receive</AppText>
                <AppText style={styles.smallText}>20%</AppText>
              </View>
              <View>
                <AppText style={styles.smallText}>Friend Receive</AppText>
                <AppText style={styles.smallText}>0%</AppText>
              </View>
            </View>

            {/* refer id */}
            <View style={styles.shareDetail}>
              <View>
                <AppText style={styles.smallText}>Referal ID</AppText>
              </View>
              <View style={styles.nestedDetail}>
                <AppText style={styles.smallText}>5439612</AppText>
                <MaterialCommunityIcons
                  name="vector-combine"
                  size={19}
                  color="#B2BDCB"
                />
              </View>
            </View>

            {/* refer link */}
            <View style={styles.shareDetail}>
              <View>
                <AppText style={styles.smallText}>Referal Link</AppText>
              </View>
              <View style={styles.nestedDetail1}>
                <AppText style={styles.smallText}>https://asb.com</AppText>
                <MaterialCommunityIcons
                  name="vector-combine"
                  size={19}
                  color="#B2BDCB"
                />
              </View>
            </View>

            {/* button qr */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingVertical: 10,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#4FFC34",
                  paddingVertical: 7,
                  borderRadius: 7,
                  width: "80%",
                  justifyContent: "center",
                }}
                onPress={() => setModalVisible(true)}
              >
                <AppText style={{ color: "black", textAlign: "center" }}>
                  Invite Friends
                </AppText>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => setModalVisible(true)}>
                <Qr width={40} height={40} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

        {/* qr modal */}
        <InviteQr isModalVisible={isModalVisible} toggleModal={toggleModal} />
      </View>
    </Screen>
  );
};

export default ReferFriendScreen;

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
  container: {
    backgroundColor: "#1F2630",
    height: 300,
    width: 300,
    borderRadius: 40,
    padding: 15,
  },
  heading: {
    fontSize: 20,
  },
  main: {
    paddingHorizontal: 20,
  },
  nestedDetail: {
    flexDirection: "row",
    width: "40%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  nestedDetail1: {
    flexDirection: "row",
    width: "55%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  shareDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 10,
    backgroundColor: "#30373E",
    borderRadius: 10,
    paddingVertical: 7,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  smallText: {
    fontSize: 12,
  },
});
