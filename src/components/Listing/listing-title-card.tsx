import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { appColors } from "../../styles";
import Divider from "../Shared/divider";
import RoomTypes from "./room-types";

interface Props {
  title: string;
  distance: number;
  description: string;
}

const ListingTitleCard = (props: Props) => {
  const { title, distance, description } = props;
  return (
    <>
      <View style={styles.generalContainer}>
        <View>
          <Text style={styles.title}>{title}</Text>
          <View style={styles.distanceContainer}>
            <MaterialIcons
              name="location-on"
              color={appColors.orangeBrown}
              size={20}
            />
            <Text style={styles.distance}>
              {distance.toFixed(1)}km from city center
            </Text>
          </View>
        </View>
        <View style={styles.rating}>
          <Text style={styles.ratingText}>4.5</Text>
          <MaterialIcons name="star" color={appColors.orangeBrown} size={20} />
        </View>
      </View>
      <Text style={styles.description}>{description}</Text>
      <Divider />
      <RoomTypes />
    </>
  );
};

export default ListingTitleCard;

const styles = StyleSheet.create({
  distanceContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  distance: {
    paddingLeft: 4,
    color: appColors.black,
    fontWeight: "300",
  },
  generalContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  rating: {
    flexDirection: "row",
    paddingVertical: 2,
    paddingHorizontal: 8,
    alignItems: "center",
    borderColor: appColors.black,
    borderWidth: 1,
    borderRadius: 2,
  },
  ratingText: {
    fontSize: 16,
    lineHeight: 20,
    paddingRight: 4,
    fontWeight: "bold",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: appColors.black,
    paddingBottom: 8,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    paddingVertical: 16,
    fontWeight: "300",
    color: appColors.black,
  },
});
