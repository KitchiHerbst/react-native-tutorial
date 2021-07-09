import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

function ListItemDelete({deleteHandler}) {
  return (
    <TouchableOpacity style={styles.container} onPress={deleteHandler}>
      <MaterialCommunityIcons
        name="trash-can-outline"
        size={50}
        style={styles.trashcan}
        color='white'
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    width: 70,
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  trashcan: {},
});

export default ListItemDelete;
