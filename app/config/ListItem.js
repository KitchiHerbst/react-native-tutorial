import React from "react";
import { Image, View, StyleSheet, TouchableHighlight } from "react-native";
import AppText from "./AppText";
import colors from "./colors";

function ListItem({ image, title, subtitle, onPress }) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        <Image source={image} style={styles.image} />

        <View style={styles.details}>
          <AppText style={styles.title}>{title}</AppText>
          <AppText style={styles.subtitle}>{subtitle}</AppText>
        </View>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: 15,
  },
  details: {
    marginTop: 2,
  },
  image: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 10,
  },
  subtitle: {
    fontWeight: "100",
    opacity: 0.6,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
