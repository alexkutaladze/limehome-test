import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { appColors } from "../../styles";

const RoomTypes = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Room types available in this location</Text>
      {[1, 2, 3].map((_, index) => (
        <RoomType key={index} />
      ))}
    </View>
  );
};

const RoomType = () => {
  return (
    <View style={styles.roomTypeContainer}>
      <Text>3x1 Bedroom suites</Text>
    </View>
  );
};

export default RoomTypes;

const styles = StyleSheet.create({
  title: { paddingTop: 8, fontSize: 16, fontWeight: "bold" },

  container: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  roomTypeContainer: {
    marginTop: 8,
    backgroundColor: appColors.greenPale,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginRight: 8,
  },
});
