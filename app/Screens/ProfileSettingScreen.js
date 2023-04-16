import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import Avatar from "../assets/avatar.svg";
import { Dimensions } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import routes from "../constants/routes";
import colors from "../constants/colors";
import EditNameModal from "../components/EditNameModal";

const ProfileSettingScreen = ({ navigation }) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(false);
  };

  const windowHeight = Dimensions.get("window").height;

  console.log(windowHeight + " mobue hieht");

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

        <View style={styles.setting}>
          <Ionicons
            name="md-settings-sharp"
            size={24}
            color={colors.primaryGreen}
          />
          <AppText style={{ paddingLeft: 12, fontSize: 20 }}>
            Profile Seetings
          </AppText>
        </View>
        {/* 
          <View style={styles.nickNameContainer}>
            <View style={styles.insideNickname}>
              <Avatar width={25} height={25} />

              <View style={{ backgroundColor: "pink", paddingLeft: 10 }}>
                <View>
                  <AppText>Nick Name</AppText>
                  <AppText style={styles.verySmallText}>
                    Set a custumized nickname for your profile
                  </AppText>
                </View>

                <View style={styles.nestedContainer}>
                  <AppText>Anonynomous 547</AppText>
                  <View>
                    <TouchableOpacity
                      style={styles.smallBtn}
                      onPress={handleBack}
                    >
                      <AppText style={{ color: "#1492E6", fontSize: 13 }}>
                        Edit
                      </AppText>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>

          <View
            style={{
              backgroundColor: "green",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <View style={{ backgroundColor: "pink" }}>
                <Avatar width={25} height={25} />
              </View>

              <View style={{ backgroundColor: "blue" }}>
                <View>
                  <AppText>Change profile setting</AppText>
                  <AppText style={styles.verySmallText}>
                    select a profile to personilize your account
                  </AppText>
                </View>

                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    backgroundColor: "yellow",
                  }}
                >
                  <Avatar width={25} height={25} />
                  <Avatar width={25} height={25} />
                </View>
              </View>
            </View>
          </View> */}

        <EditNameModal
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />

        <ScrollView height={windowHeight - 130}>
          {/* name */}
          <View style={styles.mainSettingContainer}>
            <View>
              <Avatar width={25} height={25} />
            </View>

            <View style={styles.insideMainSetingCont}>
              <View>
                <AppText>Nick Name</AppText>
                <AppText style={styles.verySmallText}>
                  Set a custumized nickname for your profile
                </AppText>
              </View>
              <View style={styles.nestedSetingCont}>
                <AppText>Anonynomous 547</AppText>
                <View style={styles.smallBtn}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(routes.EDIT_NAME)}
                  >
                    <AppText style={{ fontSize: 12, color: "#1492E6" }}>
                      edit
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* profile picture */}
          <View style={styles.mainSettingContainer}>
            <View>
              <FontAwesome
                name="user-circle"
                size={23}
                color={colors.primaryGreen}
              />
            </View>

            <View style={styles.insideMainSetingCont}>
              <View>
                <AppText>Change Profile Picture</AppText>
                <AppText style={styles.verySmallText}>
                  select a profile to personilize your account
                </AppText>
              </View>
              <View style={styles.nestedSetingCont}>
                <Avatar width={25} height={25} />
                <View style={styles.smallBtn}>
                  <TouchableOpacity onPress={() => console.log("tapped")}>
                    <AppText style={{ fontSize: 12, color: "#1492E6" }}>
                      edit
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* p2p setting */}
          <View style={styles.mainSettingContainer}>
            <View>
              <FontAwesome name="user-circle" size={23} color="#B2BDCB" />
            </View>

            <View style={styles.insideMainSetingCont}>
              <View>
                <AppText>Change Profile Picture</AppText>
                <AppText style={styles.verySmallText}>
                  select a profile to personilize your account
                </AppText>
              </View>
              <View style={{ alignItems: "flex-end", paddingVertical: 10 }}>
                <View style={styles.smallBtn}>
                  <TouchableOpacity onPress={() => console.log("tapped")}>
                    <AppText style={{ fontSize: 12, color: "#1492E6" }}>
                      Manage
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* order reminder */}
          <View style={styles.mainSettingContainer}>
            <View>
              <MaterialCommunityIcons
                name="clipboard-text-outline"
                size={24}
                color="#B2BDCB"
              />
            </View>

            <View style={styles.insideMainSetingCont}>
              <View>
                <AppText>Order Confirmation Reminders</AppText>
                <AppText style={styles.verySmallText}>
                  if order reminder function is enables, it will needs to be
                  reconfirmed every time an order is submitted
                </AppText>
              </View>
              <View style={styles.nestedSetingCont}>
                <View
                  style={{
                    flexDirection: "row",

                    width: "55%",
                  }}
                >
                  <AntDesign
                    name="checkcircle"
                    size={24}
                    color={colors.primaryGreen}
                  />
                  <View
                    style={{
                      width: "100%",
                      marginLeft: 4,
                    }}
                  >
                    <AppText style={{ fontSize: 14 }}>
                      Stop Limit Order,Auto Borrow/Repay for Margin
                    </AppText>
                  </View>
                </View>
                <View style={styles.smallBtn}>
                  <TouchableOpacity
                    onPress={() => navigation.navigate(routes.ORDER_REMINDER)}
                  >
                    <AppText style={{ fontSize: 12, color: "#1492E6" }}>
                      Manage
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* notification */}

          <View style={styles.mainSettingContainer}>
            <View>
              <Ionicons
                name="notifications-outline"
                size={24}
                color="#B2BDCB"
              />
            </View>

            <View style={styles.insideMainSetingCont}>
              <View>
                <AppText>Notifications</AppText>
                <AppText style={styles.verySmallText}>
                  Email and App Push notification seeting
                </AppText>
              </View>
              <View style={styles.nestedSetingCont}>
                <View
                  style={{
                    flexDirection: "row",

                    width: "55%",
                  }}
                >
                  <AntDesign
                    name="checkcircle"
                    size={24}
                    color={colors.primaryGreen}
                  />
                  <View
                    style={{
                      width: "100%",
                      marginLeft: 4,
                    }}
                  >
                    <AppText style={{ fontSize: 14 }}>on</AppText>
                  </View>
                </View>
                <View style={styles.smallBtn}>
                  <TouchableOpacity onPress={() => console.log("tapped")}>
                    <AppText style={{ fontSize: 12, color: "#1492E6" }}>
                      Disable
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* analytics */}
          <View style={styles.mainSettingContainer}>
            <View>
              <Entypo name="bar-graph" size={24} color="#B2BDCB" />
            </View>

            <View style={styles.insideMainSetingCont}>
              <View>
                <AppText>Analytics</AppText>
                <AppText style={styles.verySmallText}>
                  All technology may share usage data to 3rd party to third
                  party analytics platform to help imporove our products and
                  marketing
                </AppText>
              </View>
              <View style={styles.nestedSetingCont}>
                <View
                  style={{
                    flexDirection: "row",

                    width: "55%",
                  }}
                >
                  <AntDesign
                    name="checkcircle"
                    size={24}
                    color={colors.primaryGreen}
                  />
                  <View
                    style={{
                      width: "100%",
                      marginLeft: 4,
                    }}
                  >
                    <AppText style={{ fontSize: 14 }}>on</AppText>
                  </View>
                </View>
                <View style={styles.smallBtn}>
                  <TouchableOpacity onPress={() => console.log("tapped")}>
                    <AppText style={{ fontSize: 12, color: "#1492E6" }}>
                      Disable
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          {/* marketing */}

          <View style={styles.mainSettingContainer}>
            <View>
              <Entypo name="bar-graph" size={24} color="#B2BDCB" />
            </View>

            <View style={styles.insideMainSetingCont}>
              <View>
                <AppText>Marketing</AppText>
                <AppText style={styles.verySmallText}>
                  All technology may share usage data to 3rd party to third
                  party analytics platform to help imporove our products and
                  marketing
                </AppText>
              </View>
              <View style={styles.nestedSetingCont}>
                <View
                  style={{
                    flexDirection: "row",

                    width: "55%",
                  }}
                >
                  <AntDesign
                    name="checkcircle"
                    size={24}
                    color={colors.primaryGreen}
                  />
                  <View
                    style={{
                      width: "100%",
                      marginLeft: 4,
                    }}
                  >
                    <AppText style={{ fontSize: 14 }}>on</AppText>
                  </View>
                </View>
                <View style={styles.smallBtn}>
                  <TouchableOpacity onPress={() => console.log("tapped")}>
                    <AppText style={{ fontSize: 12, color: "#1492E6" }}>
                      Disable
                    </AppText>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default ProfileSettingScreen;

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
  insideMainSetingCont: { width: "90%", padding: 4, paddingTop: 0 },

  main: {
    paddingHorizontal: 20,
  },
  mainSettingContainer: {
    flexDirection: "row",
    borderWidth: 2,
    borderBottomColor: "#30373E",
    borderTopColor: "#171E26",
    borderLeftColor: "#171E26",
    borderRightColor: "#171E26",
  },
  nestedSetingCont: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingBottom: 6,
    paddingVertical: 10,
  },
  setting: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 24,
    paddingBottom: 12,
  },
  smallBtn: {
    backgroundColor: colors.smallBtn,
    paddingHorizontal: 13,
    paddingVertical: 6,
    borderRadius: 7,
  },
  verySmallText: {
    color: "#8D8D8D",
    fontSize: 10,
    //paddingLeft: 10,
  },
});
