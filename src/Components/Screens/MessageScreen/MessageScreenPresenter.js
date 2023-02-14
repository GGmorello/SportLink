import React from "react";
import MessageScreenView from "./MessageScreenView";
import {View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"
import styles from "./MessageScreenStyle"


export default function MessageScreenPresenter({ navigation }) {

  function onChatClick(id){
    navigation.navigate('ChatScreen', {
      id: id,})
  }



  return (
  <View style={styles.screen}>
    <MessageScreenView 
      onChatClick={onChatClick}/>


    <View style={styles.navigationBar}>
      <NavigationBarPresenter  navigation={navigation} />
    </View>
  </View>)
}