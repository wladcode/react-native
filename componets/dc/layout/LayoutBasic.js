import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LayoutBasic = ({ children }) => {
  return <View style={styles.appContainer}>{children}</View>;
};

export default LayoutBasic;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
  },
});
