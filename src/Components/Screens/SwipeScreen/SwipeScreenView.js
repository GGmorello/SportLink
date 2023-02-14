import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./SwipeScreenStyle";

export default function SwipeScreenView(props) {
    return (
        <View>
            <Text>SwipeScreen</Text>
            <Image source={require('./images/erik1.jpg')} style={styles.image}/>
            <Text></Text>
        </View>)
}
