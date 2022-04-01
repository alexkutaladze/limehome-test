import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import { IListing } from "../../hooks/queries/queries.types";
import { MotiView } from "moti";
import { MaterialIcons } from "@expo/vector-icons";
import { appColors } from "../../styles";
import { SharedElement } from "react-navigation-shared-element";
import { useNavigation } from "@react-navigation/native";

interface Props {
  listing?: IListing;
}

const ITEM_HEIGHT = 100;
const BOTTOM = 40;

const ListingCard = (props: Props) => {
  const { listing } = props;
  const navigation = useNavigation();

  if (!listing) return null;

  const handlePress = () => {
    navigation.navigate("Listing", {
      id: listing.id,
      image: listing.images[0].url,
      title: listing.name,
      distance: listing.distance,
    });
  };

  return (
    <MotiView
      from={{ bottom: BOTTOM - ITEM_HEIGHT }}
      animate={{ bottom: BOTTOM }}
      transition={{ type: "timing", duration: 250 }}
      style={styles.container}
    >
      <Pressable onPress={handlePress} style={styles.listing}>
        <SharedElement
          style={styles.imgContainer}
          id={`listing.${listing.id}.photo`}
        >
          <View style={styles.imgContainer}>
            <Image style={styles.img} source={{ uri: listing.images[0].url }} />
            <View style={styles.rating}>
              <Text style={styles.ratingText}>4.5</Text>
              <MaterialIcons name="star" color={appColors.orangeBrown} />
            </View>
          </View>
        </SharedElement>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{listing.name}</Text>
          <View style={styles.locationContainer}>
            <MaterialIcons
              name="location-on"
              size={20}
              color={appColors.orangeBrown}
            />
            <Text style={styles.distance}>
              {listing.distance.toFixed(1)}km from city center
            </Text>
          </View>
          <View style={styles.divider} />
          <Text style={styles.priceWrapper}>
            From{" "}
            <Text style={styles.price}>
              <Text style={styles.priceBold}>$55.00</Text>/Night
            </Text>
          </Text>
        </View>
      </Pressable>
    </MotiView>
  );
};

export default ListingCard;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: BOTTOM,
    width: "100%",
  },
  listing: {
    height: ITEM_HEIGHT,
    flexDirection: "row",
    marginHorizontal: 16,
    backgroundColor: appColors.pale,
    shadowColor: "black",
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    borderRadius: 2,
  },
  imgContainer: {
    flex: 1,
  },
  img: { flex: 1, backgroundColor: appColors.orangeBrown },
  infoContainer: {
    flex: 2.5,
    padding: 10,
  },
  rating: {
    flexDirection: "row",
    backgroundColor: appColors.pale,
    borderRadius: 2,
    alignItems: "center",
    position: "absolute",
    padding: 2,
    top: 5,
    right: 5,
  },
  ratingText: {
    fontSize: 12,
    lineHeight: 14,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  divider: {
    width: "100%",
    height: 1,
    backgroundColor: appColors.black,
    marginVertical: 8,
  },
  title: {
    fontSize: 18,
    lineHeight: 22,
    marginBottom: 4,
  },
  distance: {
    fontSize: 12,
    lineHeight: 14,
  },
  priceWrapper: {
    fontSize: 14,
    lineHeight: 16,
  },
  price: {
    color: appColors.orangeBrown,
  },
  priceBold: {
    fontWeight: "bold",
  },
});
