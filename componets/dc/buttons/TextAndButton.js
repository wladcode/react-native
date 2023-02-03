import { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";

const TextAndButton = ({ onPress }) => {
  const [enteredText, setEnteredText] = useState("");

  const handlerInput = (enteredText) => {
    setEnteredText(enteredText);
  };

  const handlerButton = () => {
    onPress(enteredText);
    setEnteredText("");
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.textInput}
        placeholder="Course goal!"
        onChangeText={handlerInput}
        value={enteredText}
      />
      <Button title="Add a Goal!" onPress={handlerButton} />
    </View>
  );
};

export default TextAndButton;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccccc",
    width: "70%",
    marginRight: 8,
    padding: 8,
  },
});
