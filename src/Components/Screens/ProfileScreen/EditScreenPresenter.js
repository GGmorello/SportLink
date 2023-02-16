import React from "react";
import EditScreenView from "./EditScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"

export default function EditScreenPresenter({ navigation }) {
  return (<View>
    <EditScreenView navigation={navigation} />
  </View>)
}