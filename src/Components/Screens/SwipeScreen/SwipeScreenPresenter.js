import React from "react";
import { Button } from "react-native";
import SwipeScreenView from "./SwipeScreenView";
import { View } from "react-native";
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter";

export default function SwipeScreenPresenter({ navigation }) {
  return (
    <View>
      <SwipeScreenView />
      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate("SettingsScreen")}
      />
      <NavigationBarPresenter navigation={navigation} />
    </View>
  );
}