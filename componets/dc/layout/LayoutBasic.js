import React from "react";
import { StyleSheet, View } from "react-native";

const LayoutBasic = ({ children }) => {
  return <View style={styles.appContainer}>{children}</View>;
};

export default LayoutBasic;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085e",
  },
});
