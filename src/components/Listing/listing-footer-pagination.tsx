import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  SharedValue,
  useAnimatedStyle,
} from "react-native-reanimated";
import { appColors } from "../../styles";

interface Props {
  length: number;
  scrollX: SharedValue<number>;
}

const { width } = Dimensions.get("screen");

const Pagination = (props: Props) => {
  const { length, scrollX } = props;
  const circleStyle = (index: number) =>
    useAnimatedStyle(() => {
      return {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: interpolateColor(
          scrollX.value / width,
          [index - 1, index, index + 1],
          [appColors.pale, appColors.black, appColors.pale]
        ),
        marginHorizontal: 2,
        transform: [
          {
            scale: interpolate(
              scrollX.value / width,
              [index - 1, index, index + 1],
              [1, 1.5, 1],
              Extrapolate.CLAMP
            ),
          },
        ],
      };
    }, [scrollX]);
  return (
    <View style={styles.container}>
      {Array(length)
        .fill(1)
        .map((_, index) => (
          <Animated.View key={index.toString()} style={circleStyle(index)} />
        ))}
    </View>
  );
};

export default Pagination;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 10,
    width: "100%",
    justifyContent: "center",
    flexDirection: "row",
  },
});
