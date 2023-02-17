import { useState } from "react";
import {
  Button,
  Image,
  Modal,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const TextAndButton = ({ onPress, viewModal, onCancel }) => {
  const [enteredText, setEnteredText] = useState("");

  const handlerInput = (enteredText) => {
    setEnteredText(enteredText);
  };

  const handlerButton = () => {
    onPress(enteredText);
    setEnteredText("");
    onCancel();
  };

  return (
    <Modal visible={viewModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/goal.png")}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Course goal!"
          onChangeText={handlerInput}
          value={enteredText}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onCancel} color="#f31282" />
          </View>
          <View style={styles.button}>
            <Button
              title="Add a Goal!"
              onPress={handlerButton}
              color="#b180f0"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default TextAndButton;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    borderRadius: 8,
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
    padding: 16,
  },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
