import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";

import AppText from "./AppText";

const CoinDetail = ({ coin, percent, price, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.ledger}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "50%",
          }}
        >
          <Image style={styles.img} source={image} />
          <AppText>
            {coin.length > 10 ? (coin = coin.substring(0, 10)) : coin}
          </AppText>
        </View>
        <View style={styles.insideLedger}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              width: "40%",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: 64,
                justifyContent: "space-between",
              }}
            >
              {percent < 0 ? (
                <AntDesign name="caretdown" size={12} color="red" />
              ) : (
                <AntDesign name="caretup" size={12} color="#8BD197" />
              )}

              <AppText style={percent < 0 ? styles.perc : styles.green}>
                {percent.toFixed(3)}
              </AppText>
            </View>
          </View>
          <AppText style={percent < 0 ? styles.perc : styles.green}>
            ${price.toFixed(2)}
          </AppText>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 37,
    height: 37,
    marginRight: 10,
  },
  insideLedger: {
    flexDirection: "row",
    width: "50%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  ledger: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 6,
    paddingHorizontal: 10,
  },
  perc: {
    color: "red",
  },
  green: {
    color: "#8BD197",
  },
});

export default CoinDetail;
