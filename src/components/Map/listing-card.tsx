import { Text } from "react-native";
import React from "react";
import { IListing } from "../../hooks/queries/queries.types";
import { MotiView } from "moti";

interface Props {
  listing?: IListing;
}

const ListingCard = (props: Props) => {
  const { listing } = props;
  if (!listing) return null;
  return (
    <MotiView>
      <Text>ListingCard</Text>
    </MotiView>
  );
};

export default ListingCard;
