import { View, Image, StyleSheet, Pressable, Text } from "react-native";
import React from "react";
import { SharedElement } from "react-navigation-shared-element";
import { IndexScreenProps } from "../navigators/stack-navigator.types";
import { appColors } from "../styles";
import { useSingleListing } from "../hooks/queries";
import {
  ListingFooter,
  ListingHeader,
  ListingTitleCard as ListingBody,
} from "../components/Listing";

const ListingScreen = (props: IndexScreenProps<"Listing">) => {
  const { route } = props;
  const { id, image, title, distance } = route.params;

  const listingDetails = useSingleListing(id);

  return (
    <View style={styles.container}>
      <SharedElement id={`listing.${id}.photo`} style={styles.header}>
        <ListingHeader
          images={listingDetails.data?.payload.images
            .slice(0, 5)
            .map(({ url }) => url)}
          firstImage={image}
        />
      </SharedElement>
      <ListingBody
        title={title}
        description={listingDetails.data?.payload.description}
        distance={distance}
      />
      <ListingFooter />
    </View>
  );
};

export default ListingScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColors.pale,
  },
  header: {
    flex: 1,
  },

  footer: {
    flex: 0.5,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 16,
    fontWeight: "300",
    color: appColors.black,
  },
});
