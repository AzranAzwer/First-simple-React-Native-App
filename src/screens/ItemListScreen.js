import React, { Component } from "react";
import {
  View,
  TextInput,
  Button,
  Text,
  FlatList,
  StyleSheet
} from "react-native";

class ItemList extends Component {
  static navigationOptions = {
    drawerLabel: "Item List",
    drawerIcon: () => (
      <Image
        source={{ uri: `https://dummyimage.com/60x60/000/fff.jpg&text=1` }}
        style={{ width: 30, height: 30, borderRadius: 15 }}
      />
    )
  };

  state = {
    item: [],
    showName: false,
    text: "",
    searchText: "",
    search: []
  };

  buttonClickListner = e => {
    const { text, item } = this.state;
    text !== " " && item.push({ name: text.toString() });
    this.setState({
      text: ""
    });
  };

  updateSearch = e => {
    let item = this.state.item;
    var search = this.state.search;

    let searchObj = item.find(val => {
      if (val.name == e) {
        search.push(val);
        // this.setState({ item: search });
        return true; // stop searching
      }
    });
    console.log("obj ", searchObj);
    return searchObj;
  };

  render() {
    const { item, text, searchText, search } = this.state;
    console.log("state-aaray", this.state.item);
    console.log(
      "state-aaray",
      item.map((obj, k) => <Text key={k}>{obj.name}</Text>)
    );

    return (
      <View style={{ padding: 10 }}>
        <View>
          <TextInput
            style={{ height: 100 }}
            placeholder="Enter Item Names"
            onChangeText={val => this.setState({ text: val })}
            value={text}
          />
          <Button
            onPress={this.buttonClickListner}
            title="Submit"
            color="#008000"
          />
        </View>

        <View style={{ height: 80 }}>
          <Text style={{ height: 30 }}>Search Items :</Text>
          {/* <TextInput placeholder="Search Name" /> */}
          <TextInput
            // onChangeText={e => this.asdupdateSearch(e)}
            onChangeText={val => {
              this.setState({ searchText: val });
              this.updateSearch(val);
            }}
            value={searchText}
            placeholder="Search Here"
          />
        </View>
        <View style={{ height: 50 }}>
          {/* {item.map(val,k)=>(search.map((obj,k)=>))} */}
          {/* {item.map((value, k) => {
            search.map((obj, ke) => {
              if (value === obj) {
                {
                  search.map((obj, ke) => <Text key={ke}>{obj.name}</Text>);
                }
              } else {
                {
                  item.map((value, k) => <Text key={k}>{obj.name}</Text>);
                }
              }
            });
          })} */}

          {/* {searchResult ? searchResult : addResult} */}

          {search.length > 0
            ? search.map((val, k) => <Text key={k}>{val.name}</Text>)
            : item.map((obj, k) => <Text key={k}>{obj.name}</Text>)}
        </View>
      </View>
    );
  }
}

export default ItemList;
