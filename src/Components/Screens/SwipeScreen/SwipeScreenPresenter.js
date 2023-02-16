import React from "react";
import { Button } from "react-native";
import SwipeScreenView from "./SwipeScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"
import styles from "./SwipeScreenStyle"


export default function SwipeScreenPresenter({ navigation }) {
  return (
    <View style={styles.screen}>
      <SwipeScreenView />
      <View style={styles.navigationBar}>
        <NavigationBarPresenter navigation={navigation} />
      </View>
    </View>)
}