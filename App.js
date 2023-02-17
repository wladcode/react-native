import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { Button, StyleSheet } from "react-native";
import { Button as PaperButton, Provider as PaperProvider } from "react-native-paper";
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
      <PaperProvider>
        <LayoutBasic>

          <PaperButton
            icon="plus"
            mode="contained"
            onPress={startAddGoalHandler}
          >
            Add new 
          </PaperButton>

          <TextAndButton
            viewModal={viewModal}
            onPress={handlerButton}
            onCancel={endGoalHandler}
          />

          <Divider />

          <ListData data={listData} deleteGoalHandler={deleteGoalHandler} />
        </LayoutBasic>
      </PaperProvider>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {},
});
