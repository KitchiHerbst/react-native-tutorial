import React from "react";
import { StyleSheet, View } from "react-native";

import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppCard from "./app/config/AppCard";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessagesScreen from "./app/screens/MessagesScreen";
import colors from "./app/config/colors";

export default function App() {
  return (
    <View style={styles.container}>
      <MessagesScreen />
      {/* <ListingDetailsScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,

    flex: 1,
  },
});
