import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { appColors } from "../../styles";

interface Props {
  selected: boolean;
}

const ListingMarker = (props: Props) => {
  const { selected } = props;
  return (
    <>
      <View style={[styles.container, selected && styles.selected]}>
        <Text style={styles.price}>$50</Text>
      </View>
      <View style={[styles.triangle, selected && styles.triangleSelected]} />
    </>
  );
};

export default ListingMarker;

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    backgroundColor: appColors.black,
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 14,
  },
  selected: { backgroundColor: appColors.orangeBrown },
  triangle: {
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderStyle: "solid",
    borderLeftWidth: 4,
    borderRightWidth: 4,
    borderTopWidth: 4,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: appColors.black,
    alignSelf: "center",
  },
  triangleSelected: {
    borderTopColor: appColors.orangeBrown,
  },
});
