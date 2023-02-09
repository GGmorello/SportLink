import React from "react";
import { View, TouchableHighlight} from "react-native"
import style from "./NavigationBarStyle"
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function NavigationBarView(props) {
    function onProfileClick() {
        props.onProfileClick()
    }
    function onSwipeClick() {
        props.onSwipeClick()
    }
    function onMessageClick() {
        props.onMessageClick()
    }

    return (
        <View style={style.container}>
            <FontAwesome size={50} color="white" name="user" onPress={() => onProfileClick()}></FontAwesome>
            <FontAwesome size={50} color="white" name="home" onPress={() => onSwipeClick()}></FontAwesome>
            <FontAwesome size={50}  color="white" name="comment" onPress={() => onMessageClick()}></FontAwesome>      
        </View>)
}
