import React, { useState } from "react";
import {View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./SwipeScreenStyle";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ImageBackground } from "react-native-web";

export default function SwipeScreenView(props) {

    let erik = {
        "name": "Erik",
        "age": 28,
        "distance": 5,
        "images": [require('./images/erik1.jpg'), require('./images/erik2.jpg'), require('./images/erik3.jpg')],
        "interests": [{name:"Padel", icon:require('./images/tennis-racket.png')}],
        "biography": "Im an extrovert who enjoys doing sports with other people. I wish to find a running partner so we can motivate each other, and a padel partner to team with for an upcoming tournament (medium level). My achievements are: together with my partner, we placed second in a local padel tournament here in Stockholm. In regards to running, I have ran multiple marathon, and my personal best time is 3 hours and 37 minutes."
    }

    let mick = {
        "name": "Mick",
        "age": 28,
        "distance": 10,
        "images": [require('./images/mick1.jpg'), require('./images/mick2.jpg'), require('./images/mick3.jpg')],
        "interests": [{name:"Padel", icon:require('./images/tennis-racket.png')}, {name:"Jogging", icon:require('./images/runicon.png')}],
        "biography": "Im an extrovert who enjoys doing sports with other people. I wish to find a running partner so we can motivate each other, and a padel partner to team with for an upcoming tournament (medium level). My achievements are: together with my partner, we placed second in a local padel tournament here in Stockholm. In regards to running, I have ran multiple marathon, and my personal best time is 3 hours and 37 minutes."
    }

    function onButtonClick() {
        setPerson(mick);
        setImage(0);
    }

    function showNextImage(imageIndex) {
        if (imageIndex + 1 < 3) {
            setImage(imageIndex+1);
        }
    }

    function showPreviousImage(imageIndex) {
        if (imageIndex - 1 >= 0) {
            setImage(imageIndex-1);
        }
    }

    const [person, setPerson] = useState(erik);
    const [image, setImage] = useState(0)

    return (
        <View style={styles.screenLayout}>
            <View style={styles.rowContainer}>
                <ImageBackground source={person.images[image]} style={styles.image}>
                    <View style={{...styles.rowContainer, marginHorizontal: 5, marginVertical: 5, justifyContent:"space-between", marginTop:"auto"}}>
                        <FontAwesome name="chevron-circle-left" size={25} color="#FFFFFF" onPress={() => showPreviousImage(image)}/>
                        <FontAwesome name="chevron-circle-right" size={25} color="#FFFFFF" onPress={() => showNextImage(image)}/>
                    </View>
                </ImageBackground>
                <View>
                    <Text style={styles.name}>{person.name}</Text>
                    <Text style={styles.age}>{person.age}</Text>
                    <Text style={styles.distance}>{person.distance}km away</Text>
                </View>
            </View>
            <Text style={styles.sectionTitle}>
                Interests
            </Text>
            <View style={styles.rowContainer}>
                {
                    person.interests.map((interest) => {
                        return (<View style={styles.containerIcon}>
                            <Image source={interest.icon} style={styles.icon}/>
                            <Text style={styles.iconText}>{interest.name}</Text>
                        </View>
                    )})
                }
            </View>
            <View style={{...styles.rowContainer, borderColor: "#DEDEDE", borderBottomWidth: 1}}/>
            <Text style={styles.sectionTitle}>
                Biography
            </Text>
            <Text>
                {person.biography}
            </Text>
            <View style={{...styles.rowContainer, justifyContent:"space-between", marginHorizontal: 20, marginVertical: 20}}>
                <TouchableOpacity
                    onPress={() => onButtonClick()}
                    style={styles.rejectButton}
                >
                    <FontAwesome name="close" color="#FFFFFF" size={35} />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => onButtonClick()}
                    style={styles.approveButton}
                >
                    <FontAwesome name="check" color="#FFFFFF" size={35}/>
                </TouchableOpacity>
            </View>
        </View>)
}
