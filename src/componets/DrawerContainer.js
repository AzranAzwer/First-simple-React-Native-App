import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationActions } from "react-navigation";

export default class DrawerContainer extends Component {
  // logout = () => {
  //   const actionToDispatch = NavigationActions.reset({
  //     index: 0,
  //     key: null,
  //     actions: [NavigationActions.navigate({ routeName: "LoginStack" })]
  //   });
  //   this.props.navigation.dispatch(actionToDispatch);
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text
          onPress={() => this.props.navigation.navigate("itemList")}
          style={styles.uglyDrawerItem}
        >
          Item List
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("screen2")}
          style={styles.uglyDrawerItem}
        >
          Screen 2
        </Text>
        <Text
          onPress={() => this.props.navigation.navigate("welcomeScreen")}
          style={styles.uglyDrawerItem}
        >
          Log out
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f6f6f6",
    paddingTop: 40,
    paddingHorizontal: 20
  },
  uglyDrawerItem: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#E73536",
    padding: 15,
    margin: 5,
    borderRadius: 2,
    borderColor: "#E73536",
    borderWidth: 1,
    textAlign: "center"
  }
});
