import { AsyncStorage } from "react-native";
import { CLIENT_ID, CLIENT_SECRET, API_URL_AUTH } from "../config/const";

// export const signUp = () => {
//   const signUpData = {
//     first_name: this.state.firstName,
//     email: this.state.email,
//     password: this.state.password,
//     referral_code: null,
//     tac: true,
//     timeZoneId: "Asia/Colombo"
//   };
//   //dispatch({ type: FETCHING });
//   fetch(API_URL + "v2/users", {
//     headers: {
//       accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     method: "POST",
//     body: JSON.stringify(signUpData)
//   })
//     .then(response => response.json())
//     .then(res => {
//       if (res.success === true) {
//         AsyncStorage.setItem("user", res.user);
//         this.props.navigation.navigate("ItemList");
//       } else {
//         alert(res.message);
//       }
//     });
// };

// export const login = data => {
//   const { emailId, Password } = this.state;
//   const loginData = {
//     username: emailId,
//     password: Password,
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET,
//     grant_type: "password"
//   };
//   fetch(API_URL_AUTH + "oauth/token", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify(loginData)
//   })
//     .then(response => response.json())
//     .then(response => {
//       if (!response.error) {
//         this.props.navigation.navigate("itemList");
//       } else {
//         console.log("error", response);
//         alert(response.message);
//       }
//     })
//     .catch(error => {
//       console.log("error", error);
//     });
// };
