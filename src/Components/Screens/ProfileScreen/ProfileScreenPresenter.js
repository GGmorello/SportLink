import React from "react";
import ProfileScreenView from "./ProfileScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"
import style from "./ProfileScreenStyle"


export default function ProfileScreenPresenter(props) {
  function onProfilePressEdit() {
    console.log("hello");
    props.navigation.navigate('EditProfileScreen')
  }

  return (<View style={style.screen}>
    <ProfileScreenView navigation={props.navigation} onProfilePress={onProfilePressEdit}/>
    <View style={style.navigationBar}>
      <NavigationBarPresenter navigation={props.navigation} />
    </View>
  </View>)
}