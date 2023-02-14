import React from "react";
import NavigationBarView from "./NavigationBarView"

export default function NavigationBarPresenter(props) {

  function onProfileClickACB() {
    props.navigation.navigate('ProfileScreen')
  }
  function onSwipeClickACB() {
    props.navigation.navigate('SwipeScreen')
  }
  function onMessageClickACB() {
    props.navigation.navigate('MessageScreen')
  }
  return (<NavigationBarView
    onProfileClick={onProfileClickACB}
    onSwipeClick={onSwipeClickACB}
    onMessageClick={onMessageClickACB}
  />)

}