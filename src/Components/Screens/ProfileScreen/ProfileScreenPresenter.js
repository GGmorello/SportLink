import React from "react";
import ProfileScreenView from "./ProfileScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"


export default function SwipeScreenPresenter({ navigation }) {
  return (<View>
    <ProfileScreenView />
    <NavigationBarPresenter navigation={navigation} />
  </View>)
}