import React, { Component } from "react";
import { Provider } from "react-redux";
import configureStore from "./src/config/configureStore";
import AppNavigation from "./src/navigations/AppNavigation";

const store = configureStore();

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigation />
      </Provider>
    );
  }
}
