import { createStackNavigator } from "@react-navigation/stack";
import Home from "../Screens/Home";
import Home1 from "../Screens/Home1";
import Home2 from "../Screens/Home2";
import CountrySelectScreen from "../Screens/CountrySelectScreen";
import routes from "../constants/routes";
import LoginRegistarScreen from "../Screens/LoginRegistarScreen";
import LoginForm from "../Screens/LoginForm";
import RegistarScreen from "../Screens/RegistarScreen";
import HavePurchaseScreen from "../Screens/HavePurchaseScreen";
import CustomizeScreen from "../Screens/CustomizeScreen";
import HomePageScreen from "../Screens/HomePageScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import VerifyAccountScreen from "../Screens/VerifyAccountScreen";
import SideDrawerScreen from "../Screens/SideDrawerScreen";
import ProfileSettingScreen from "../Screens/ProfileSettingScreen";
import HelpAndSupportScreen from "../Screens/HelpAndSupportScreen";
import SecurityScreen from "../Screens/SecurityScreen";
import AboutUsScreen from "../Screens/AboutUsScreen";
import NotificationScreen from "../Screens/NotificationScreen";
import ChangePasswordScreen from "../Screens/ChangePasswordScreen";
import ReferFriendScreen from "../Screens/ReferFriendScreen";
import PaymentSettingScreen from "../Screens/PaymentSettingScreen";
import CoinDetailScreen from "../Screens/CoinDetailScreen";
import EditNameScreen from "../Screens/EditNameScreen";
import OrderReminderScree from "../Screens/OrderReminderScree";
import PurchaseCryptoScreen from "../Screens/PurchaseCryptoScreen";

const Stack = createStackNavigator();

function AuthNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen
        name={routes.SELECT_COUNTRY}
        component={CountrySelectScreen}
      />
      <Stack.Screen
        name={routes.LOGIN_SIGNUP}
        component={LoginRegistarScreen}
      />
      <Stack.Screen name={routes.LOGIN} component={LoginForm} />
      <Stack.Screen name={routes.REGISTER} component={RegistarScreen} />
      <Stack.Screen name={routes.HavePurchase} component={HavePurchaseScreen} />
      <Stack.Screen
        name={routes.CUSTUMIZE_SCREEN}
        component={CustomizeScreen}
      />
      <Stack.Screen name={routes.TABBAR} component={BottomTabNavigator} />

      <Stack.Screen
        name={routes.VERIFY_ACCOUNT}
        component={VerifyAccountScreen}
      />
      <Stack.Screen name={routes.SIDE_DRAWER} component={SideDrawerScreen} />
      <Stack.Screen
        name={routes.PROFILE_SETTING}
        component={ProfileSettingScreen}
      />

      <Stack.Screen name={routes.EDIT_NAME} component={EditNameScreen} />
      <Stack.Screen
        name={routes.ORDER_REMINDER}
        component={OrderReminderScree}
      />

      <Stack.Screen
        name={routes.HELP_AND_SUPPROT}
        component={HelpAndSupportScreen}
      />
      <Stack.Screen name={routes.SECURTY} component={SecurityScreen} />

      <Stack.Screen name={routes.ABOUT} component={AboutUsScreen} />
      <Stack.Screen
        name={routes.NOTIFICATIONS}
        component={NotificationScreen}
      />

      <Stack.Screen name={routes.REFER_FREIND} component={ReferFriendScreen} />

      <Stack.Screen
        name={routes.PAYMENT_SETTING}
        component={PaymentSettingScreen}
      />

      <Stack.Screen
        name={routes.CHANGE_PASSWORD}
        component={ChangePasswordScreen}
      />

      <Stack.Screen name={routes.COIN_DETAIL} component={CoinDetailScreen} />

      <Stack.Screen
        name={routes.PURCHASED_CRYPTO}
        component={PurchaseCryptoScreen}
      />
    </Stack.Navigator>
  );
}

export default AuthNavigator;
