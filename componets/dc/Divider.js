import { StyleSheet, Text, View } from "react-native";
import React from "react";

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
