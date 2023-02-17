import { Formik } from "formik";
import { useState } from "react";
import { Button, Image, Modal, StyleSheet, View } from "react-native";
import {
  Button as PaperButton,
  HelperText,
  TextInput
} from "react-native-paper";
import * as yup from "yup";

const TextAndButton = ({ onPress, viewModal, onCancel, values }) => {
  const [enteredText, setEnteredText] = useState("");

  const handlerButton = (values) => {
    onPress(values.goal);
    setEnteredText("");
    onCancel();
  };

  const loginValidationSchema = yup.object().shape({
    goal: yup
      .string()
      .min(8, ({ min }) => `Goal name must be at least ${min} characters`)
      .required("Goal name  is Required"),
  });

  return (
    <Modal visible={viewModal} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../../../assets/images/goal.png")}
        />
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{ goal: "" }}
          onSubmit={(values) => handlerButton(values)}
        >
          {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            isValid,
          }) => (
            <>
              <TextInput
                name="goal"
                label="Goal name"
                style={styles.textInput}
                placeholder="Course goal!"
                onChangeText={handleChange("goal")}
                value={values.goal}
              />
              <HelperText
                type="error"
                visible={errors.goal}
                style={styles.helperText}
              >
                {errors.goal}
              </HelperText>

              <View style={styles.buttonContainer}>
                <View style={styles.button}>
                  <Button title="Cancel" onPress={onCancel} color="#f31282" />
                </View>
                <PaperButton
                  icon="plus"
                  mode="contained"
                  onPress={isValid && handleSubmit}
                  buttonColor={!isValid && "red"}
                >
                  Add a Goal!
                </PaperButton>
              </View>
            </>
          )}
        </Formik>
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
    backgroundColor: "#311b6c",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    backgroundColor: "#e4d0ff",
    color: "#120438",
    width: "100%",
  },
  helperText: { fontSize: 14, color: "red", textAlign: "left" },
  buttonContainer: {
    marginTop: 16,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
