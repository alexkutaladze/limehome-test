import { View, StyleSheet } from "react-native";
import React from "react";
import { appColors } from "../../styles";

const Divider = () => {
  return <View style={styles.container} />;
};

export default Divider;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 1,
    backgroundColor: appColors.black,
  },
});
