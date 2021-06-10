import React from "react";
import { StyleSheet, Text, View } from "react-native";
import AppText from "./app/config/AppText";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import WelcomeScreen from "./app/screens/WelcomeScreen";

export default function App() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AppText>
        I love Kent, this is my first react native app lets make this a lot
        longer here is more
      </AppText>
      {/* <ViewImageScreen/> */}
      {/* // <WelcomeScreen /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  
});
