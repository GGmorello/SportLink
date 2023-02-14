import React from "react";
import ShowImageScreenView from "./ShowImageScreenView";
import { View } from "react-native"
import NavigationBarPresenter from "../../NavigationBar/NavigationBarPresenter"
import { useRoute } from "@react-navigation/native"

export default function ShowImageScreenPresenter(props) {
  let img = props.route.params.img

  return (<View>
    <ShowImageScreenView image={img}/>
  </View>)
}