import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import AppText from "./AppText";
import colors from "./colors";

function AppCard({ title, subtitle, image }) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.image} />
      <View style={styles.textContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subtitle}>{subtitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    marginBottom: 20,
    borderRadius: 15,
    overflow: "hidden",
  },
  image: {
    width: "100%",
    height: 200,
  },
  subtitle: {
    color: colors.secondary,
    fontWeight: "bold",
  },
  textContainer: {
    padding: 20,
  },
  title: {
    marginBottom: 5,
  },
});

export default AppCard;
