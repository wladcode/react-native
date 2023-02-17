import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import TextAndButton from "./componets/dc/buttons/TextAndButton";
import Divider from "./componets/dc/Divider";
import LayoutBasic from "./componets/dc/layout/LayoutBasic";
import ListData from "./componets/dc/ListData";

export default function App() {
  const [viewModal, setViewModal] = useState(false);
  const [listData, setListData] = useState([]);

  function startAddGoalHandler() {
    setViewModal(true);
  }

  function endGoalHandler() {
    setViewModal(false);
  }

  function handlerButton(enteredText) {
    setListData((currentListData) => [
      ...currentListData,
      { text: enteredText.toUpperCase(), id: Math.random().toString() },
    ]);
  }

  function deleteGoalHandler(item) {
    console.log("delete ", item);
    setListData((currentListData) => {
      return currentListData.filter((goal) => goal.id !== item.id);
    });
  }

  return (
    <>
      <StatusBar style="light" />
      <LayoutBasic>
        <Button
          title="Add new item!"
          color="#5e0acc"
          onPress={startAddGoalHandler}
        />

        <TextAndButton
          viewModal={viewModal}
          onPress={handlerButton}
          onCancel={endGoalHandler}
        />

        <Divider />

        <ListData data={listData} deleteGoalHandler={deleteGoalHandler} />
      </LayoutBasic>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
