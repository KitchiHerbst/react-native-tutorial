import React from "react";
import { Image, View, StyleSheet } from "react-native";
import AppText from "../config/AppText";
import colors from "../config/colors";
import ListItem from "../config/ListItem";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket for sale</AppText>
        <AppText style={styles.price}>$60</AppText>
        <View style={styles.userContainer}>
          <ListItem
            image={require("../assets/mosh.jpg")}
            title="Mosh Hamedani"
            subtitle="5 Listings"
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: "100%",
    height: 300,
  },
  price: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.secondary,
    marginVertical: 10,
    marginLeft: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  userContainer: {
    marginVertical: 40
  }
});

export default ListingDetailsScreen;
