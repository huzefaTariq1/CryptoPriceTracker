import * as React from "react";
import { Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomePageScreen from "../Screens/HomePageScreen";
import TotalBalanceScreen from "../Screens/TotalBalanceScreen";
import routes from "../constants/routes";
import { Octicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import BuyCoins from "../Screens/BuyCoins";

const Tab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#4FFC34",
        tabBarInactiveTintColor: "#B2BDCB",
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            display: "flex",
            backgroundColor: "#1F2630",
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name={routes.HOMEPAGE}
        component={HomePageScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <Octicons name="graph" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={routes.BUY_COINS}
        component={BuyCoins}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="compare-arrows" size={size} color={color} />
          ),
        }}
      />

      <Tab.Screen
        name={routes.TOTALBALANCE}
        component={TotalBalanceScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialCommunityIcons
              name="wallet-outline"
              size={size}
              color={color}
            />
          ),
        }}
      />

      <Tab.Screen
        name="test2"
        component={HomePageScreen}
        options={{
          tabBarIcon: ({ size, color }) => (
            <MaterialIcons name="stars" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
