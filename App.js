import { useState } from "react";
import { StyleSheet } from "react-native";
import TextAndButton from "./componets/dc/buttons/TextAndButton";
import Divider from "./componets/dc/Divider";
import LayoutBasic from "./componets/dc/layout/LayoutBasic";
import ListData from "./componets/dc/ListData";

export default function App() {
  
  const [listData, setListData] = useState([]);

  function handlerButton(enteredText) {
    setListData((currentListData) => [
      ...currentListData,
      { text: enteredText.toUpperCase(), id: Math.random().toString() },
    ]);
  }

  return (
    <LayoutBasic>
      <TextAndButton onPress={handlerButton} />

      <Divider />

      <ListData data={listData} />
    </LayoutBasic>
  );
}

const styles = StyleSheet.create({});
