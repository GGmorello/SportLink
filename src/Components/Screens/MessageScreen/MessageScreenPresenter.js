import React from "react";
import MessageScreenView from "./MessageScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"
import styles from "./MessageScreenStyle"

export default function MessageScreenPresenter({ navigation }) {
  return (<View style={styles.screen}>
    <MessageScreenView />
    <NavigationBarPresenter style={styles.navbar} navigation={navigation} />
  </View>)
}