import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Screen2 extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Screen2 Page</Text>
      </View>
    );
  }
}
export default Screen2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  }
});
