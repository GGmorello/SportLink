import React, { useEffect, useState } from "react";
import {ScrollView, View, Text, Image, TouchableOpacity} from "react-native";
import styles from "./SwipeScreenStyle";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { ImageBackground } from "react-native";
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import { unstable_renderSubtreeIntoContainer } from "react-dom";

export default function SwipeScreenView(props) {

    const [imageIndex, setImage] = useState(0);
    const interests = {"Padel": require('./images/tennis-racket.png'), "Tennis": require('./images/tennis-racket.png'), "Squash": require('./images/tennis-racket.png'), "Jogging": require('./images/runicon.png'), "Kayak": require('./images/kayakIcon.png')}

    function onButtonClick() {
        props.getNextPerson();
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

    function onSwipeLeft(gestureState) {
        props.getNextPerson();
    }

    function log(){
        // console.log("CONSOLE LOG")
        // console.log(props.person)
        // console.log("users length:", props.person.length)
        // console.log("CURRENT PERSON: " + props.person)
        console.log("1:", interests);
        console.log("2:", interests['Padel']);
        return <div></div>
    }

    const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
    };

    function onSwipe(gestureName, gestureState) {
        const {SWIPE_LEFT} = swipeDirections;
        switch (gestureName) {
          case SWIPE_LEFT:
            if (personIndex < props.person.length - 1) {
                setPerson(props.person[personIndex]);
            }
            break;
        }
      }


    return (
        <div>
            {props.person != 0 &&
            
            <GestureRecognizer
            onSwipe={(direction, state) => onSwipe(direction, state)}
            onSwipeLeft={(state) => onSwipeLeft(state)}
            config={config}
            style={{
            flex: 1,
            }}
            >
                <ScrollView style={styles.screenLayout}>
                    <View style={styles.rowContainer}>
                        <ImageBackground source={props.person.images[imageIndex]} style={styles.image}>
                            <View style={{...styles.rowContainer, marginHorizontal: 5, marginVertical: 5, justifyContent:"space-between", marginTop:"auto"}}>
                                <FontAwesome name="chevron-circle-left" size={25} color="#FFFFFF" onPress={() => showPreviousImage(imageIndex)}/>
                                <FontAwesome name="chevron-circle-right" size={25} color="#FFFFFF" onPress={() => showNextImage(imageIndex)}/>
                            </View>
                        </ImageBackground>
                        <View>
                            <Text style={styles.name}>{props.person.name}</Text>
                            <Text style={styles.age}>{props.person.age}</Text>
                            <Text style={styles.distance}>{props.person.distance}km away</Text>
                        </View>
                    </View>
                    <Text style={styles.sectionTitle}>
                        Interests
                    </Text>
                    <View style={styles.rowContainer}>
                        {
                            props.person.interest.map((interest) => {
                                return (<View style={styles.containerIcon}>
                                    {log()}
                                    <Image source={interests[interest]} style={styles.icon}/>
                                    <Text style={styles.iconText}>{interest}</Text>
                                </View>
                            )})
                        }
                    </View>
                    <View style={{...styles.rowContainer, borderColor: "#DEDEDE", borderBottomWidth: 1}}/>
                    <Text style={styles.sectionTitle}>
                        Biography
                    </Text>
                    <Text>
                        {props.person.biography}
                    </Text>
                    <View style={{...styles.rowContainer, borderColor: "#DEDEDE", borderBottomWidth: 1}}/>
                    <Text style={styles.sectionTitle}>
                        Achievements
                    </Text>
                    <Text>
                        {props.person.achievements}
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
                </ScrollView>
            </GestureRecognizer>
            }  
        </div>
        )
}  
