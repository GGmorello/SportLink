import React from "react";
import SwipeScreenView from "./SwipeScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"


export default function SwipeScreenPresenter({ navigation }) {
  return (
    <View>
      <SwipeScreenView />
      <NavigationBarPresenter navigation={navigation} />
    </View>)
}