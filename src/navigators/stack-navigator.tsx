import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createSharedElementStackNavigator } from "react-navigation-shared-element";
import MapScreen from "../screens/map-screen";
import ListingScreen from "../screens/listing-screen";
import { IIndexStack } from "./stack-navigator.types";
import { CardStyleInterpolators } from "@react-navigation/stack";
import { Platform } from "react-native";

const { Screen, Navigator } = createSharedElementStackNavigator<IIndexStack>();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Navigator initialRouteName="Map" screenOptions={{ headerShown: false }}>
        <Screen name="Map" component={MapScreen} />
        <Screen
          name="Listing"
          component={ListingScreen}
          options={{
            cardStyleInterpolator:
              Platform.OS === "ios"
                ? CardStyleInterpolators.forVerticalIOS
                : CardStyleInterpolators.forRevealFromBottomAndroid,
            gestureDirection: "vertical",
          }}
          sharedElements={(route) => {
            const { id } = route.params;
            return [`listing.${id}.photo`];
          }}
        />
      </Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
