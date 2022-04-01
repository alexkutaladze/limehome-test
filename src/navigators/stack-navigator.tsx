import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import MapScreen from "../screens/map-screen";
import ListingScreen from "../screens/listing-screen";

const { Screen, Navigator } = createSharedElementStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Map" screenOptions={{ headerShown: false }}>
        <Screen name="Map" component={MapScreen} />
        <Screen name="Listing" component={ListingScreen} />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
