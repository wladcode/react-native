import {
  ActivityIndicator,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function Basics() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>test</Text>
      <Text
        style={{ margin: 16, borderWidth: 1, borderColor: "blue", padding: 16 }}
      >
        Testing the text component
      </Text>
      <Button title="Ingresar"></Button>

      <ScrollView style={styles.scrollView}>
        <Text>
          It is not recommended for use on list It is only recommended for use
          on articles or disclaimers
        </Text>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book.
        </Text>

        <Text>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderBottomColor: "red",
  },

  text: {
    margin: 16,
    borderWidth: 2,
    borderColor: "red",
    padding: 8,
    fontSize: 20,
  },

  scrollView: {
    height: 30,
  },
});
