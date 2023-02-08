import React from "react";
import MessageScreenView from "./MessageScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"

export default function MessageScreenPresenter({ navigation }) {
  return (<View>
    <MessageScreenView />
    <NavigationBarPresenter navigation={navigation} />
  </View>)
}