import React from "react";
import { View, Button } from "react-native"


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
        <View>
            <Button title="Profile" onPress={() => onProfileClick()}></Button>
            <Button title="Swipe" onPress={() => onSwipeClick()}></Button>
            <Button title="Message" onPress={() => onMessageClick()}></Button>
        </View>)
}
