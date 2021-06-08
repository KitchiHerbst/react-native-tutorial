import React from "react";
import { View, Text, StatusBar, StyleSheet } from "react-native";

export default function App() {
  return (
    <View
    nativeID='container'
      style={{
        backgroundColor: "#fff",
        flex: 1,
        flexDirection: "row", // changes main axis
        justifyContent: "center", //main axis
        alignItems: "center", // secondary axis
        alignContent: 'center',
        flexWrap: 'wrap'
      }}
    >
      <StatusBar style="auto" />
      <View style={{
        backgroundColor: 'dodgerblue',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'gold',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'tomato',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'green',
        width: 100,
        height: 100
      }}/>
      <View style={{
        backgroundColor: 'grey',
        width: 100,
        height: 100
      }}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
