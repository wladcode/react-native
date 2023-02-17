import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

const ItemList = ({ item, onDeleteItem }) => {
  return (
    <View style={styles.itemContainer}>
      <Pressable
        android_ripple={{ color: "#dddddd" }}
        onPress={() => onDeleteItem(item)}
      >
        <Text style={styles.item}>{item.text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  item: {
    color: "white",
    padding: 8,
  },
});

export default ItemList;
