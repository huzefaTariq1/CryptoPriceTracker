import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import React, { useCallback, useState, useEffect } from "react";
import Screen from "../components/Screen";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import AppText from "../components/AppText";
import Avatar from "../assets/avatar.svg";
import Hand from "../assets/hand.svg";
import { useFonts } from "expo-font";

import AppButton from "../components/AppButton";
import CoinDetail from "../components/CoinDetail";
import routes from "../constants/routes";
//import ActivityIndicator from "../components/ActivityIndicator";

const listings = [
  {
    id: 1,
    coin: "BitCoin",
    percent: "2.16%",
    price: 1000,
    image: require("../assets/bitcoin.png"),
  },
  {
    id: 2,
    coin: "Ethreium",
    percent: "0.99%",
    price: 1000,
    image: require("../assets/tcoin.png"),
  },
  {
    id: 3,
    coin: "Tehter",
    percent: "0.2%",
    price: 1000,
    image: require("../assets/eather.png"),
  },
  {
    id: 4,
    coin: "BitCoin",
    percent: "2.16%",
    price: 1000,
    image: require("../assets/bitcoin.png"),
  },
  {
    id: 5,
    coin: "Ethreium",
    percent: "0.99%",
    price: 1000,
    image: require("../assets/tcoin.png"),
  },
  {
    id: 6,
    coin: "Tehter",
    percent: "0.2%",
    price: 1000,
    image: require("../assets/eather.png"),
  },
];

const HomePageScreen = ({ navigation }) => {
  const [coins, setCoins] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
        );
        const json = await response.json();
        if (!response.ok) {
          console.log(json);
        }
        setLoading(false);
        setCoins(json);
      } catch (error) {
        setError("could not getch");
        setLoading(false);
      }
    };
    // setLoading(true);
    // fetch("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setCoins(data);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     setError(true);
    //   });
    // setLoading(false);
    fetchData();
  }, []);

  const [fontsLoaded] = useFonts({
    Popins: require("../assets/fonts/Comfortaa-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <Screen>
      <View style={styles.main}>
        <View style={styles.topBar}>
          <TouchableOpacity
            onPress={() => navigation.navigate(routes.SIDE_DRAWER)}
          >
            <Avatar width={40} height={40} />
          </TouchableOpacity>
          <View style={styles.insideTopBar}>
            <View style={{ marginRight: 20 }}>
              <AntDesign name="search1" size={24} color="#7D7E81" />
            </View>
            <Ionicons name="scan" size={24} color="#7D7E81" />
          </View>
        </View>

        <View style={styles.handImage}>
          <Hand width={150} height={150} />
        </View>

        <AppText style={{ textAlign: "center" }}>Complete Your Account</AppText>
        <AppText
          style={{
            color: "#7E8286",
            fontSize: 12,
            textAlign: "center",
          }}
        >
          Enable Trading With a few Steps
        </AppText>

        <AppButton
          title="Verify Account"
          textcolor="primaryGreen"
          color="lightblack"
          borderColor="#1F2630"
          onPress={() => navigation.navigate(routes.VERIFY_ACCOUNT)}
        />

        <AppText style={styles.heading}>Markets</AppText>
      </View>

      <View style={styles.ledger}>
        <View>
          <AppText>Name</AppText>
        </View>
        <View style={styles.insideLedger}>
          <AppText>24H</AppText>
          <AppText>Price</AppText>
        </View>
      </View>

      {/* {loading && <ActivityIndicator />} */}

      <ActivityIndicator animating={loading} size="large" />

      <FlatList
        data={coins}
        keyExtractor={(listing) => listing.id}
        renderItem={({ item }) => (
          //  <Card
          //    title={item.title}
          //    subTitle={"$" + item.price}
          //    image={item.image}
          //  />
          <CoinDetail
            coin={item.name}
            percent={item.price_change_percentage_24h}
            price={item.current_price}
            image={{ uri: item.image }}
            onPress={() => navigation.navigate(routes.COIN_DETAIL, item)}
          />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontFamily: "Popins",
    fontWeight: "bold",
    fontSize: 20,
    paddingBottom: 10,
  },
  handImage: {
    alignItems: "center",
    justifyContent: "center",
  },
  insideTopBar: {
    flexDirection: "row",
    alignItems: "center",
  },
  insideLedger: {
    flexDirection: "row",
    width: "45%",
    justifyContent: "space-between",
  },
  ledger: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    borderTopColor: "white",
    borderBottomColor: "white",
    borderWidth: 2,
    paddingHorizontal: 10,
  },
  main: {
    paddingHorizontal: 10,
  },
  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default HomePageScreen;
