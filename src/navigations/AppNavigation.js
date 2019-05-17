import React from "react";
import { Text, View } from "react-native";
import {
  createAppContainer,
  createStackNavigator,
  createDrawerNavigator
} from "react-navigation";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
import WelcomScreen from "../screens/WelcomeScreen";
import ItemList from "../screens/ItemListScreen";
import DrawerContainer from "../componets/DrawerContainer";
import Screen2 from "../screens/Screen2.js";

//drawer Stack
const DrawerStack = createDrawerNavigator(
  {
    itemList: { screen: ItemList },
    screen2: { screen: Screen2 }
  },
  {
    gesturesEnabled: false,
    contentComponent: DrawerContainer
  }
);

const drawerButton = navigation => (
  <Text
    style={{ padding: 5, color: "white" }}
    onPress={() => {
      if (navigation.state.index === 0) {
        navigation.navigate("DrawerOpen");
      } else {
        navigation.navigate("DrawerClose");
      }
    }}
  >
    Menu
  </Text>
);

const DrawerNavigation = createStackNavigator(
  {
    DrawerStack: { screen: DrawerStack }
  },
  {
    headerMode: "float",
    navigationOptions: ({ navigation }) => ({
      headerStyle: { backgroundColor: "green" },
      title: "Item List",
      headerTintColor: "white",
      gesturesEnabled: false,
      headerLeft: drawerButton(navigation)
    })
  }
);

//login Stack
const LoginStack = createStackNavigator(
  {
    welcomeScreen: { screen: WelcomScreen },
    loginScreen: {
      screen: LoginScreen,
      navigationOptions: { title: "Login Page" }
    },
    signupScreen: {
      screen: SignupScreen,
      navigationOptions: { title: "Signup Page" }
    }
  },
  {
    headerMode: "float",
    navigationOptions: {
      headerStyle: { backgroundColor: "red" },
      title: "Welcome Page",
      headerTintColor: "white"
    }
  }
);

//Manifest of possible screens
const PrimaryNav = createStackNavigator(
  {
    loginStack: { screen: LoginStack },
    drawerStack: { screen: DrawerNavigation }
  },
  {
    headerMode: "none",
    title: "Main",
    initialRouteName: "loginStack"
  }
);
const AppContainer = createAppContainer(PrimaryNav);

export default AppContainer;
