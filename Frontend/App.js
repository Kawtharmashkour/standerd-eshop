import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Toast from "react-native-toast-message";

import Colors from "./constants/Colors.js";

//Redux
import { Provider } from "react-redux";
import store from "./Redux/store";

//Context API
import Auth from "./Context/store/Auth.js";

//Navigators
import MainNavigator from "./Navigators/MainNavigator";
import CheckoutNavigator from "./Navigators/CheckoutNavigator";

//Screens
//import MainScreen from './screens/MainScreen';
const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
});

export default function App() {
  return (
    <Auth>
      <Provider store={store}>
        <NavigationContainer>
          <SafeAreaView style={styles.safeArea}>
            <MainNavigator />
            {/* <CheckoutNavigator/> */}
            <Toast />
            <StatusBar style="auto" />
          </SafeAreaView>
        </NavigationContainer>
      </Provider>
    </Auth>
  );
}
