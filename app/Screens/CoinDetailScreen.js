import {
  StyleSheet,
  Text,
  Button,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from "react-native";
import React, { useState, useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { LineChart } from "react-native-chart-kit";
import { Dimensions } from "react-native";

import Screen from "../components/Screen";
import AppText from "../components/AppText";
import routes from "../constants/routes";
import { ScrollView } from "react-native-gesture-handler";
import colors from "../constants/colors";

const CoinDetailScreen = ({ navigation, route }) => {
  const coin = route.params;
  const coinName = coin.id;
  const coinImage = coin.image;
  const PriceChange = coin.price_change_percentage_24h;
  // graph works
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [period, setPeriod] = useState("1d");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=1`
    )
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.prices) {
          setData(jsonData.prices);
        }
      });
    setIsLoading(false);
  }, []);

  const handleClick = (numberOfDays) => {
    setIsLoading(true);
    fetch(
      `https://api.coingecko.com/api/v3/coins/${coinName}/market_chart?vs_currency=usd&days=${numberOfDays}`
    )
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.prices) {
          setData(jsonData.prices);
        }
      });
    setIsLoading(false);
  };

  const handleClick1 = (numberOfHours) => {
    fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&hours=${numberOfHours}`
    )
      .then((response) => response.json())
      .then((jsonData) => {
        if (jsonData.prices) {
          setData(jsonData.prices);
        }
      });
  };

  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  const chartData = {
    //labels: data.map((d) => new Date(d[0]).toLocaleTimeString()),
    datasets: [
      {
        data: data.map((d) => d[1]),
      },
    ],
  };

  const windowwidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;

  const handleBack = () => {
    //console.log("backedd");
    navigation.navigate(routes.HOMEPAGE);
  };
  return (
    <Screen>
      <View style={styles.main}>
        <TouchableOpacity style={styles.backBtn} onPress={handleBack}>
          {/* <AppText style={styles.backbtnText}>&lt;</AppText> */}
          <Ionicons name="chevron-back" size={29} color="black" />
        </TouchableOpacity>

        <ScrollView height={windowHeight - 100}>
          {/* image */}
          <View
            style={{ paddingTop: 30, paddingBottom: 10, alignItems: "center" }}
          >
            <View style={styles.image}>
              <Image
                style={styles.img}
                source={{
                  uri: coinImage,
                }}
              />
            </View>
          </View>

          {/* coin details */}
          <AppText style={styles.text}>{coinName}</AppText>
          <AppText style={styles.text}>{coin.symbol}</AppText>
          <AppText style={{ textAlign: "center" }}>
            $ {coin.current_price}
          </AppText>
          <AppText
            style={
              coin.price_change_percentage_24h < 0
                ? styles.redText
                : styles.text
            }
          >
            {coin.price_change_percentage_24h.toFixed(3)}
          </AppText>

          {/* buy btn */}
          <View style={{ alignItems: "center" }}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => console.log("tapped")}
            >
              <AppText style={{ color: "white" }}>Buy</AppText>
            </TouchableOpacity>
          </View>

          {/* garph */}
          <View style={{ marginTop: 10 }}>
            <View>
              {isLoading && <AppText>loading...</AppText>}
              {data.length > 0 && !isLoading ? (
                <LineChart
                  data={chartData}
                  width={windowwidth - 45}
                  height={220}
                  chartConfig={{
                    backgroundColor: "#171E26",
                    backgroundGradientFrom: "#1F2630",
                    backgroundGradientTo: "#1F2630",
                    decimalPlaces: 3,
                    color: (opacity = 1) => `rgba(115, 243, 64, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: "0",
                      strokeWidth: "0",
                      stroke: "white",
                    },

                    hideXAxisLabels: true,
                    propsForBackgroundLines: {
                      stroke: "transparent",
                    },
                  }}
                  bezier
                  style={{
                    marginVertical: 8,
                    borderRadius: 16,
                  }}
                />
              ) : (
                <AppText style={{ textAlign: "center", paddingVertical: 7 }}>
                  loading ....
                </AppText>
              )}
            </View>

            {/* btn container */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-around" }}
            >
              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.btn1}
                  onPress={() => handleClick(1)}
                >
                  <AppText style={{ color: "#9A9CB8", fontSize: 11 }}>
                    1 Day
                  </AppText>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.btn1}
                  onPress={() => handleClick(3)}
                >
                  <AppText style={{ color: "#9A9CB8", fontSize: 11 }}>
                    3 Day
                  </AppText>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center" }}>
                <TouchableOpacity
                  style={styles.btn1}
                  onPress={() => handleClick(7)}
                >
                  <AppText style={{ color: "#9A9CB8", fontSize: 11 }}>
                    7 Day
                  </AppText>
                </TouchableOpacity>
              </View>

              <View style={{ alignItems: "center", fontSize: 11 }}>
                <TouchableOpacity
                  style={styles.btn1}
                  onPress={() => handleClick(10)}
                >
                  <AppText style={{ color: "#9A9CB8", fontSize: 11 }}>
                    10 Day
                  </AppText>
                </TouchableOpacity>
              </View>
            </View>

            {/* chart end */}
            {/* coin detial */}
            <View style={styles.coinDetail}>
              <View style={styles.mainSettingContainer}>
                <View>
                  <AppText style={{ fontSize: 11 }}>Market Cap Rank</AppText>
                </View>
                <View>
                  <AppText style={{ fontSize: 11 }}>
                    # {coin.market_cap_rank}
                  </AppText>
                </View>
              </View>

              <View style={styles.mainSettingContainer}>
                <View>
                  <AppText style={{ fontSize: 11 }}>Market Cap</AppText>
                </View>
                <View>
                  <AppText style={{ fontSize: 11 }}>{coin.market_cap}</AppText>
                </View>
              </View>

              <View style={styles.mainSettingContainer}>
                <View>
                  <AppText style={{ fontSize: 11 }}>
                    Fully Diluted Valuation
                  </AppText>
                </View>
                <View>
                  <AppText style={{ fontSize: 11 }}>
                    {coin.fully_diluted_valuation}
                  </AppText>
                </View>
              </View>

              <View style={styles.mainSettingContainer}>
                <View>
                  <AppText style={{ fontSize: 11 }}>Circulating Supply</AppText>
                </View>
                <View>
                  <AppText style={{ fontSize: 11 }}>
                    {coin.circulating_supply}
                  </AppText>
                </View>
              </View>

              <View style={styles.mainSettingContainer}>
                <View>
                  <AppText style={{ fontSize: 11 }}>Total Supply</AppText>
                </View>
                <View>
                  <AppText style={{ fontSize: 11 }}>
                    {coin.total_supply}
                  </AppText>
                </View>
              </View>

              <View style={styles.mainSettingContainer}>
                <View>
                  <AppText style={{ fontSize: 11 }}>24H High</AppText>
                </View>
                <View>
                  <AppText style={{ fontSize: 11 }}>{coin.high_24h}</AppText>
                </View>
              </View>

              <View style={styles.mainSettingContainer}>
                <View>
                  <AppText style={{ fontSize: 11 }}>24H Low</AppText>
                </View>
                <View>
                  <AppText style={{ fontSize: 11 }}>{coin.low_24h}</AppText>
                </View>
              </View>
            </View>

            {/* end */}
          </View>
        </ScrollView>
      </View>
    </Screen>
  );
};

export default CoinDetailScreen;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.primaryGreen,
    width: 110,
    paddingVertical: 7,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  btn1: {
    backgroundColor: "#F5F6FA",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
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
  coinDetail: {
    marginTop: 20,
    backgroundColor: "#1F2630",
    borderRadius: 10,
    padding: 15,
  },
  img: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
  },
  image: {
    width: 90,
    height: 90,
    backgroundColor: "#F4F5F9",
    borderRadius: 45,
    overflow: "hidden",
    borderColor: "#F4F5F9",
    borderWidth: 10,
  },
  mainSettingContainer: {
    paddingVertical: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    borderWidth: 2,
    borderBottomColor: "#30373E",
    borderTopColor: "#1F2630",
    borderLeftColor: "#1F2630",
    borderRightColor: "#1F2630",
  },
  main: {
    paddingHorizontal: 20,
  },
  redText: {
    color: "red",
    textAlign: "center",
  },
  text: {
    textTransform: "capitalize",
    textAlign: "center",
  },
});

// //      //working code
// import React, { useState, useEffect } from "react";
// import { View, Text, Button } from "react-native";
// import { LineChart, Grid } from "react-native-chart-kit";

// const CoinDetailScreen = () => {
//   const [data, setData] = useState([]);
//   const [selectedRange, setSelectedRange] = useState("1h");

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await fetch(
//           `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1`
//         );
//         const result = await response.json();
//         setData(result.prices);
//       } catch (error) {
//         console.error(error);
//       }
//     };

//     fetchData();
//   }, []);

//   console.log(data);
//   const handleRangeSelection = (range) => {
//     setSelectedRange(range);
//   };

//   const filteredData = data.filter((item) => {
//     const date = new Date(item[0]);
//     const currentDate = new Date();
//     switch (selectedRange) {
//       case "1h":
//         return currentDate.getTime() - date.getTime() < 60 * 60 * 1000;
//       case "1d":
//         return currentDate.getTime() - date.getTime() < 24 * 60 * 60 * 1000;
//       case "3d":
//         return currentDate.getTime() - date.getTime() < 3 * 24 * 60 * 60 * 1000;
//       default:
//         return true;
//     }
//   });

//   return (
//     <View>
//       <Text>Price CoinDetailScreen</Text>
//       <Button title="1 Hour" onPress={() => handleRangeSelection("1h")} />
//       <Button title="1 Day" onPress={() => handleRangeSelection("1d")} />
//       <Button title="3 Days" onPress={() => handleRangeSelection("3d")} />
//       {filteredData.length > 0 ? (
//         // insert chart component here
//         <LineChart
//           data={filteredData}
//           width={400}
//           height={220}
//           yAxisLabel="$"
//           chartConfig={{
//             backgroundColor: "#1cc910",
//             backgroundGradientFrom: "#eff3ff",
//             backgroundGradientTo: "#efefef",
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//           bezier
//         />
//       ) : (
//         // <Text>CoinDetailScreen component goes here</Text>
//         <Text>Loading...</Text>
//       )}
//     </View>
//   );
// };

// export default CoinDetailScreen;

// full working code
// import React, { useState, useEffect } from "react";
// import { View, Text, Button } from "react-native";
// import { LineChart } from "react-native-chart-kit";

// const CoinDetailScreen = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [period, setPeriod] = useState("1d");

//   useEffect(() => {
//     fetch(
//       "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1"
//     )
//       .then((response) => response.json())
//       .then((jsonData) => {
//         if (jsonData.prices) {
//           setData(jsonData.prices);
//         }
//       });
//   }, []);

//   const handleClick = (numberOfDays) => {
//     fetch(
//       `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${numberOfDays}`
//     )
//       .then((response) => response.json())
//       .then((jsonData) => {
//         if (jsonData.prices) {
//           setData(jsonData.prices);
//         }
//       });
//   };

//   if (error) {
//     return <Text>Error: {error.message}</Text>;
//   }

//   if (isLoading) {
//     return <Text>Loading...</Text>;
//   }

//   const chartData = {
//     labels: data.map((d) => d[0]),
//     datasets: [
//       {
//         data: data.map((d) => d[1]),
//       },
//     ],
//   };

//   return (
//     <View>
//       <View style={{ flexDirection: "row" }}>
//         <Button title="1 Day" onPress={() => handleClick(1)} />
//         <Button title="3 Days" onPress={() => handleClick(3)} />
//         <Button title="7 Days" onPress={() => handleClick(7)} />
//         <Button title="10 Days" onPress={() => handleClick(-60)} />
//       </View>
//       {data.length > 0 && (
//         <LineChart
//           data={chartData}
//           width={300}
//           height={220}
//           chartConfig={{
//             backgroundColor: "#e26a00",
//             backgroundGradientFrom: "#fb8c00",
//             backgroundGradientTo: "#ffa726",
//             decimalPlaces: 2,
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//           }}
//           bezier
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />
//       )}
//     </View>
//   );
// };

// export default CoinDetailScreen;

//     // final working chart
// import React, { useState, useEffect } from "react";
// import { View, Text, Button } from "react-native";
// import { LineChart } from "react-native-chart-kit";

// const CoinDetailScreen = () => {
//   const [data, setData] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [period, setPeriod] = useState("1d");

//   useEffect(() => {
//     fetch(
//       "https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=1"
//     )
//       .then((response) => response.json())
//       .then((jsonData) => {
//         if (jsonData.prices) {
//           setData(jsonData.prices);
//         }
//       });
//   }, []);

//   const handleClick = (numberOfDays) => {
//     fetch(
//       `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&days=${numberOfDays}`
//     )
//       .then((response) => response.json())
//       .then((jsonData) => {
//         if (jsonData.prices) {
//           setData(jsonData.prices);
//         }
//       });
//   };

//   const handleClick1 = (numberOfHours) => {
//     fetch(
//       `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=usd&hours=${numberOfHours}`
//     )
//       .then((response) => response.json())
//       .then((jsonData) => {
//         if (jsonData.prices) {
//           setData(jsonData.prices);
//         }
//       });
//   };

//   if (error) {
//     return <Text>Error: {error.message}</Text>;
//   }

//   if (isLoading) {
//     return <Text>Loading...</Text>;
//   }

//   const chartData = {
//     //labels: data.map((d) => new Date(d[0]).toLocaleTimeString()),
//     datasets: [
//       {
//         data: data.map((d) => d[1]),
//       },
//     ],
//   };

//   return (
//     <View>
//       <View style={{ flexDirection: "row" }}>
//         <Button title="1 Day" onPress={() => handleClick(1)} />
//         <Button title="3 Days" onPress={() => handleClick(3)} />
//         <Button title="7 Days" onPress={() => handleClick(7)} />
//         <Button title="10 Days" onPress={() => handleClick1(1)} />
//       </View>
//       {data.length > 0 && (
//         <LineChart
//           data={chartData}
//           width={300}
//           height={220}
//           chartConfig={{
//             backgroundColor: "#e26a00",
//             backgroundGradientFrom: "#fb8c00",
//             backgroundGradientTo: "#ffa726",
//             decimalPlaces: 3,
//             color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
//             style: {
//               borderRadius: 16,
//             },
//             propsForDots: {
//               r: "4",
//               strokeWidth: "1",
//               stroke: "#ffa726",
//             },
//             hideXAxisLabels: true,
//           }}
//           bezier
//           style={{
//             marginVertical: 8,
//             borderRadius: 16,
//           }}
//         />
//       )}
//     </View>
//   );
// };

// export default CoinDetailScreen;
