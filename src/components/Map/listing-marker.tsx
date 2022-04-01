import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  withTiming,
} from "react-native-reanimated";
import { appColors } from "../../styles";

interface Props {
  selected: boolean;
}

const ListingMarker = (props: Props) => {
  const { selected } = props;
  const animatedStyle = useAnimatedStyle(() => {
    return {
      borderRadius: selected ? withTiming(8) : withTiming(2),
      backgroundColor: selected ? appColors.orangeBrown : appColors.black,
      transform: [{ scale: selected ? withTiming(1.1) : withTiming(1) }],
    };
  }, [selected]);
  return (
    <>
      <Animated.View style={[styles.container, animatedStyle]}>
        <Text style={styles.price}>$50</Text>
      </Animated.View>
      <View style={[styles.triangle, selected && styles.triangleSelected]} />
    </>
  );
};

export default ListingMarker;

const styles = StyleSheet.create({
  container: {
    height: 30,
    width: 30,
    alignItems: "center",
    justifyContent: "center",
  },
  price: {
    color: "#fff",
    fontSize: 12,
    lineHeight: 14,
  },
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
