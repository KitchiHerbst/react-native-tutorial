import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import colors from "../config/colors";

function ViewImageScreen(props) {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons
        style={styles.closeIcon}
        name="close"
        size={35}
        color="white"
      />
      <MaterialCommunityIcons
        style={styles.deleteIcon}
        name="trash-can-outline"
        size={35}
        color="white"
      />
      <Image
        resizeMode={"contain"}
        source={require("../assets/chair.jpg")}
        style={styles.chair}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  chair: {
    height: "100%",
    width: "100%",
  },
  container: {
    backgroundColor: colors.black,
    flex: 1,
  },
  closeIcon: {
    position: "absolute",
    top: 75,
    left: 20,
  },
  deleteIcon: {
    position: "absolute",
    top: 75,
    right: 20,
  },
});

export default ViewImageScreen;
