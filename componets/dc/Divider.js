import React from "react";
import { StyleSheet, View } from "react-native";

export default function Divider() {
  return <View style={styles.divider}></View>;
}

const styles = StyleSheet.create({
  divider: {
    borderTopWidth: 1,
    marginTop: 10,
    marginBottom: 10,
  },
});
