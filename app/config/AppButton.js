import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import colors from "./colors";

function AppButton({ title, onPress, color }) {
  return (
    <TouchableOpacity
      style={[styles.container, { backgroundColor: color }]}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 15,
    width: "100%",
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    color: colors.white,
    fontFamily: "Avenir",
    textTransform: "capitalize",
    fontWeight: "bold",
  },
});

export default AppButton;
