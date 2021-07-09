import React, { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

import ListItem from "../config/ListItem";
import ListItemDelete from "../config/ListItemDelete";
import ListItemSeparator from "../config/ListItemSeparator";
import Screen from "../config/Screen";

const defaultMessages = [
  {
    id: 1,
    title: "T1",
    description: "D1",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 2,
    title: "T2",
    description: "D2",
    image: require("../assets/mosh.jpg"),
  },
  {
    id: 3,
    title: "T3",
    description: "D3",
    image: require("../assets/mosh.jpg"),
  },
];

const swipeRightHandler = (id) => {
  console.log(id)
  return <ListItemDelete deleteHandler={deleteHandler} />
};

const deleteHandler = () => {
  console.log("deleted");
};

function MessagesScreen(props) {
  const [messages, setMessages] = useState(defaultMessages);

  return (
    <Screen>
      <FlatList
        data={messages}
        keyExtractor={(message) => message.id.toString()}
        renderItem={({ item }) => (
          <ListItem
            id={item.id}
            title={item.title}
            subtitle={item.description}
            image={item.image}
            onPress={() => console.log("Message", item)}
            right={swipeRightHandler}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({});

export default MessagesScreen;
