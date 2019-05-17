import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

class WelcomScreen extends Component {
  render() {
    //console.log("this props", this.props.navigation);

    return (
      <View style={styles.container}>
        {/* <Text>{this.props.gift}</Text> */}
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("loginScreen")}
        >
          <Text style={styles.welcome}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("signupScreen")}
        >
          <Text style={styles.welcome}>Signup</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() => this.props.navigation.navigate("itemList")}
        >
          <Text style={styles.welcome}>AfterLogin</Text>
        </TouchableOpacity> */}
      </View>
    );
  }
}
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

const mapStateToProps = state => {
  return {
    gift: state.auth.giftCardData
  };
};

export default connect(mapStateToProps)(WelcomScreen);
