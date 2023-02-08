import React from "react";
import { View, Button, StyleSheet } from "react-native"
import style from "./NavigationBarStyle"

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
            <Button style={style.button} title="Profile" onPress={() => onProfileClick()}></Button>
            <Button style={style.button} title="Swipe" onPress={() => onSwipeClick()}></Button>
            <Button style={style.button} title="Message" onPress={() => onMessageClick()}></Button>
        </View>)
}
