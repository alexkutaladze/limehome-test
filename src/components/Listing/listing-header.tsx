import {
  StyleSheet,
  Image,
  View,
  Pressable,
  FlatList,
  Dimensions,
} from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { appColors } from "../../styles";
import { useNavigation } from "@react-navigation/native";
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from "react-native-reanimated";
import Pagination from "./listing-footer-pagination";

interface Props {
  firstImage: string;
  images: string[];
}

const { width } = Dimensions.get("screen");

const ListingHeader = (props: Props) => {
  const { firstImage, images } = props;

  const navigation = useNavigation();
  const scrollX = useSharedValue(0);

  const handlePressClose = () => navigation.goBack();

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollX.value = event.contentOffset.x;
  });

  return (
    <View style={styles.container}>
      {images ? (
        <Animated.FlatList
          style={{ flex: 1 }}
          data={[firstImage, ...images.slice(1)]}
          onScroll={scrollHandler}
          horizontal
          snapToInterval={width}
          keyExtractor={(item) => item}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={({ item, index }) => (
            <Image
              key={`${item}-${index}`}
              style={styles.img}
              source={{ uri: item }}
            />
          )}
        />
      ) : (
        <Image style={styles.img} source={{ uri: firstImage }} />
      )}
      <Pressable onPress={handlePressClose} style={styles.closeBtn}>
        <MaterialIcons name="close" size={20} color={appColors.black} />
      </Pressable>
      {images && <Pagination length={images.length} scrollX={scrollX} />}
    </View>
  );
};

export default ListingHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  img: { width, height: "100%" },
  closeBtn: {
    position: "absolute",
    top: 40,
    left: 20,
    width: 30,
    height: 30,
    borderRadius: 2,
    backgroundColor: appColors.pale,
    alignItems: "center",
    justifyContent: "center",
  },
});
