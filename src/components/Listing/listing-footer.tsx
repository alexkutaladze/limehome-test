import { View, Text, StyleSheet, Pressable, SafeAreaView } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { appColors } from "../../styles";

const ListingFooter = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <Text>From $55.00/Night</Text>
        <Pressable style={styles.btn}>
          <Text adjustsFontSizeToFit style={styles.btnText}>
            Explore
          </Text>
          <MaterialIcons name="chevron-right" color="white" size={20} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default ListingFooter;

const styles = StyleSheet.create({
  safeArea: {
    flex: 0.3,
    backgroundColor: appColors.greenPale,
  },
  container: {
    flexDirection: "row",
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 8,
    justifyContent: "space-between",
    alignItems: "center",
  },
  btnText: {
    fontSize: 16,
    color: "white",
    fontWeight: "300",
    textTransform: "uppercase",
    letterSpacing: 1,
    paddingRight: 8,
  },
  btn: {
    backgroundColor: appColors.green,
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 4,
    paddingHorizontal: 8,
    height: "75%",
  },
});
