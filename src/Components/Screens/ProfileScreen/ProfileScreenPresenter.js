import React from "react";
import ProfileScreenView from "./ProfileScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"


export default function ProfileScreenPresenter(props) {
  function onProfilePressEdit() {
    props.navigation.navigate('EditProfileScreen')
  }

  return (<View>
    <ProfileScreenView navigation={props.navigation} onProfilePress={onProfilePressEdit}/>
    <NavigationBarPresenter navigation={props.navigation} />
  </View>)
}