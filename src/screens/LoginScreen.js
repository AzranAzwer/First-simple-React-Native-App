import React, { Component } from "react";
import { login } from "../actions/Auth";
import { CLIENT_ID, CLIENT_SECRET, API_URL_AUTH } from "../config/const";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  AsyncStorage
} from "react-native";
import { connect } from "react-redux";

class LoginScreen extends Component {
  state = {
    emailId: "",
    Password: "",
    submitted: false
  };

  // componentDidMount() {
  //   this._loadInitialState().done();
  // }

  // _loadInitialState = async () => {
  //   var value = await AsyncStorage.getItem("user");
  //   if (value !== null) {
  //     this.props.navigation.navigate("itemList");
  //   }
  // };

  // submit = () => {
  //   if (emailId === "" || Password === "") {
  //     showMessage({
  //       message: ""
  //     });
  //   }
  //   return false;
  // };

  // _login = () => {
  //   const { dispatch } = this.props;
  //   const { emailId, Password } = this.state;
  //   const data = { emailId, Password };
  //   dispatch(login(data));
  //   //this.props.login(data);
  // };

  async _login() {
    const { emailId, Password } = this.state;
    const loginData = {
      username: emailId,
      password: Password,
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      grant_type: "password"
    };
    await fetch(API_URL_AUTH + "oauth/token", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(async response => {
        if (!response.error) {
          this.props.navigation.navigate("itemList");
        } else {
          console.log("error", response);
          alert(response.message);
        }
      })
      .catch(error => {
        console.log("error", error);
      });
  }

  // _login = () => {
  //   console.log("click");
  //   //const { dispatch } = this.props;
  //   const { emailId, Password } = this.state;
  //   const data = { emailId, Password };
  //   this.props.dispatch(login(data));
  // };

  render() {
    const { emailId, Password } = this.state;
    return (
      <View>
        <TextInput
          style={styles.input}
          autoCapitalize="none"
          onSubmitEditing={() => this.passwordInput.focus()}
          autoCorrect={false}
          keyboardType="email-address"
          returnKeyType="next"
          placeholder="Email ID"
          placeholderTextColor="#808080"
          value={emailId}
          onChangeText={emailId => this.setState({ emailId })}
        />
        <TextInput
          style={styles.input}
          returnKeyType="go"
          ref={input => (this.passwordInput = input)}
          placeholder="Password"
          placeholderTextColor="#808080"
          secureTextEntry
          value={Password}
          onChangeText={Password => this.setState({ Password })}
        />
        <Button
          title="Login"
          color="#0000FF"
          onPress={this._login.bind(this)}
        />
        <Button title="Cancel" color="#FF0000" />
        <Button
          title="Signup"
          color="#0000FF"
          onPress={() => this.props.navigation.navigate("signupScreen")}
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
  }
});

const mapDispatchToProps = {
  login
};
export default connect(
  null,
  mapDispatchToProps
)(LoginScreen);
