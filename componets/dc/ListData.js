import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

const ListData = ({ data }) => {
  const renderItem = ({ item }) => {
    return (
      <View style={styles.itemContainer}>
        <Text style={styles.item}>{item.text}</Text>
      </View>
    );
  };

  return (
    <FlatList
      alwaysBounceHorizontal={false}
      style={styles.goalsContainer}
      data={data}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      renderItem={renderItem}
    />
  );
};

export default ListData;

const styles = StyleSheet.create({
  goalsContainer: {},

  itemContainer: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },

  item: {
    color: "white",
  },
});
