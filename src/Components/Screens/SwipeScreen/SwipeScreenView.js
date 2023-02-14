import React from "react";
import {View, Text, Image} from "react-native";

export default function SwipeScreenView(props) {
    return (
        <View>
            <Text>SwipeScreen</Text>
            <View>
                <Image source={require('./images/erik1.jpg')}/>
            </View>
            <Text></Text>
        </View>)
}
