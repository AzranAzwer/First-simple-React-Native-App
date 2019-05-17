import React, { Component } from "react";
import {
  TextInput,
  View,
  Button,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { signup } from "../actions/Auth";
import { API_URL } from "../config/const";
import { SIGNUP_ERRORS } from "../actions/ActionTypes";

class SignupScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      emailId: "",
      password: ""
    };
  }

  async _signup() {
    const { firstName, emailId, password } = this.state;
    const signUpData = {
      first_name: firstName,
      email: emailId,
      password: password,
      referral_code: null,
      tac: true,
      timeZoneId: "Asia/Colombo"
    };
    await fetch(API_URL + "v2/users", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(signUpData)
    })
      .then(response => response.json())
      .then(response => {
        if (!response.error) {
          this.props.navigation.navigate("itemList");
        } else {
          alert(response.message);
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  render() {
    const { firstName, emailId, password } = this.state;
    return (
      <View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          //onSubmitEditing={() => this.passwodInput.focus()}
          autoCorrect={false}
          returnKeyType="next"
          placeholder="First Name"
          placeholderTextColor="#808080"
          value={firstName}
          onChangeText={firstName => this.setState({ firstName })}
        />
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          //onSubmitEditing={() => this.passwodInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email ID"
          placeholderTextColor="#808080"
          name="emailId"
          value={emailId}
          onChangeText={emailId => this.setState({ emailId })}
        />
        <TextInput
          style={styles.input}
          //ref={input => (this.passwordInput = input)}
          placeholder="Password"
          returnKeyType="done"
          placeholderTextColor="#808080"
          secureTextEntry={true}
          name="password"
          value={password}
          onChangeText={password => this.setState({ password })}
        />

        <Button
          title="Submit"
          color="#0000FF"
          onPress={this._signup.bind(this)}
        />
        <Button title="Cancel" color="#FF0000" />
        <Button
          title="Login"
          color="#0000FF"
          onPress={() => this.props.navigation.navigate("loginScreen")}
        />
        <Button
          title="Home"
          color="#008000"
          onPress={() => this.props.navigation.navigate("welcomeScreen")}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  input: {
    height: 40,
    backgroundColor: "rgba(225,225,225,0.2)",
    marginBottom: 10,
    padding: 10
    //color: "#fff"
  }
});
export default SignupScreen;
