import { ActivityIndicator, StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import { Marker, Region } from "react-native-maps";
import { useListings } from "../hooks/queries";
import { calculateMidpoint } from "../util/functions";
import { ListingMarker } from "../components/Map";
import MapView from "react-native-map-clustering";
import { appColors } from "../styles";
import ListingCard from "../components/Map/listing-card";
import { IListing } from "../hooks/queries/queries.types";

const INITIAL_REGION = {
  latitude: 52.5,
  longitude: 19.2,
  latitudeDelta: 8.5,
  longitudeDelta: 8.5,
};

const MapScreen = () => {
  // DATA
  const listings = useListings();

  // STATE
  const [region, setRegion] = useState<Region>();
  const [selectedListing, setSelectedListingId] = useState<IListing>();

  const calculateRegion = () => {
    if (!listings.data) return;
    const coords = listings.data.payload.map(({ location: { lat, lng } }) => ({
      lat,
      lng,
    }));
    const { lat, lng } = calculateMidpoint(coords);
    setRegion({
      latitude: lat,
      longitude: lng,
      latitudeDelta: 0.0922,
      longitudeDelta: 0.0421,
    });
  };

  const handleRegionChange = (region: Region) => setRegion(region);
  const handleMarkerPress = (listing: IListing) =>
    setSelectedListingId(listing);

  useEffect(calculateRegion, [listings.data]);

  if (listings.isLoading) {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <MapView
        initialRegion={INITIAL_REGION}
        region={region}
        onRegionChangeComplete={handleRegionChange}
        style={styles.container}
        clusterColor={appColors.black}
      >
        {listings.data?.payload.map((listing) => (
          <Marker
            key={`${listing.id}`}
            coordinate={{
              latitude: listing.location.lat,
              longitude: listing.location.lng,
            }}
            onPress={() => handleMarkerPress(listing)}
          >
            <ListingMarker selected={listing.id === selectedListing?.id} />
          </Marker>
        ))}
      </MapView>
      <ListingCard listing={selectedListing} />
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});