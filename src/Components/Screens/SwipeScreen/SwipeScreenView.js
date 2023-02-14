import React from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./SwipeScreenStyle";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function SwipeScreenView(props) {

    let erik = {
        "name": "Erik",
        "age": 28,
        "distance": 5,
        "images": [],
        "interests": ["Padel"],
        "biography": "Im an extrovert who enjoys doing sports with other people. I wish to find a running partner so we can motivate each other, and a padel partner to team with for an upcoming tournament (medium level). My achievements are: together with my partner, we placed second in a local padel tournament here in Stockholm. In regards to running, I have ran multiple marathon, and my personal best time is 3 hours and 37 minutes."
    }

    let mick = {
        "name": "Mick",
        "age": 28,
        "distance": 10,
        "images": [],
        "interests": ["Padel, Jogging"],
        "biography": "Im an extrovert who enjoys doing sports with other people. I wish to find a running partner so we can motivate each other, and a padel partner to team with for an upcoming tournament (medium level). My achievements are: together with my partner, we placed second in a local padel tournament here in Stockholm. In regards to running, I have ran multiple marathon, and my personal best time is 3 hours and 37 minutes."
    }

    return (
        <View style={styles.screenLayout}>
            <View style={styles.rowContainer}>
                <Image source={require('./images/erik1.jpg')} style={styles.image}/>
                <View>
                    <Text style={styles.name}>{erik.name}</Text>
                    <Text style={styles.age}>{erik.age}</Text>
                    <Text style={styles.distance}>{erik.distance}km away</Text>
                </View>
            </View>
            <Text style={styles.sectionTitle}>
                Biography
            </Text>
            <Text>
                {erik.biography}
            </Text>
            <View style={styles.rowContainerSpaceBetween}>
                <TouchableOpacity
                    onPress={null}
                    style={styles.rejectButton}
                >
                    <FontAwesome name="close" color="#FFFFFF" size={35} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={null}
                    style={styles.approveButton}
                >
                    <FontAwesome name="check" color="#FFFFFF" size={35}/>
                </TouchableOpacity>
            </View>
        </View>)
}
