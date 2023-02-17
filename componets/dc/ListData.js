import React from "react";
import { FlatList, StyleSheet } from "react-native";
import ItemList from "./ItemList";

const ListData = ({ data, deleteGoalHandler }) => {
  return (
    <FlatList
      alwaysBounceHorizontal={false}
      style={styles.goalsContainer}
      data={data}
      keyExtractor={(item, index) => {
        return item.id;
      }}
      renderItem={(itemData) => {
        return (
          <ItemList item={itemData.item} onDeleteItem={deleteGoalHandler} />
        );
      }}
    />
  );
};

export default ListData;

const styles = StyleSheet.create({
  goalsContainer: {
    flex:5
  },
});
