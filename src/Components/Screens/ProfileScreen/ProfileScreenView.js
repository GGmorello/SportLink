import React from "react";
import {View, Image, Text, ScrollView} from "react-native"
import ImagePresenter from "../../Images/ImagePresenter"
import style from "./ProfileScreenStyle"
import { MaterialIcons } from "@expo/vector-icons";

export default function ProfileScreenView(props) {
    function onPressProfile() {
        props.onProfilePress()
    }

    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false} style={{marginBottom:75}}>
            <View style={style.container}>
                <View style={{ alignSelf: "center" }}>
                    <View style={style.profileImage}>
                        <Image source={require("../../../../assets/Profile/ProfilePicture.png")} style={style.image}></Image>
                    </View>
                </View>
                <View style={style.infoContainer}>
                    <Text style={style.text}>Anna, 22</Text>
                    <Text style={style.subtext}>Stockholm, Sweden</Text>
                </View>
                <Text style={style.subtitle}>Biography</Text>
                <View style={style.infoContainer}>
                    <Text style={style.subtext}>Hej! I’m a student looking forward to meeting new people who exercising with.</Text>
                </View>
                <View style={{marginLeft: 2, flexDirection:"row", borderColor: "#DEDEDE", borderBottomWidth: 1}}>
                    <MaterialIcons name="arrow-right" size={30} color= "#000000"></MaterialIcons>
                    <Text style={{paddingTop: 5}}>Looking for a long term partner</Text>
                </View>
                <Text style={style.subtitle}>Your pictures</Text>
                <ScrollView horizontal={true}>
                    <View style={{flexDirection:"row", marginLeft: 7, marginRight: 7}}>
                        <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/padel.png')} styles={style.activitiesImage}></ImagePresenter>
                        <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/bouldering.png')} styles={style.activitiesImage}></ImagePresenter>
                        <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/run.png')} styles={style.activitiesImage}></ImagePresenter>
                        <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/kayak.png')} styles={style.activitiesImage}></ImagePresenter>
                        <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/yoga.png')} styles={style.activitiesImage}></ImagePresenter>
                        <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/bike.png')} styles={style.activitiesImage}></ImagePresenter>
                    </View>
                </ScrollView>
                <View style={{marginTop: 10, borderColor: "#DEDEDE", borderTopWidth: 1}}>
                    <Text style={style.subtitle}>Your interests</Text>
                </View>
                <View style={{marginLeft:10, display: 'flex', flexDirection: 'row', flexWrap:'wrap'}}>
                    <View style={style.containerIcon}>
                        <Image source={require('../../../../assets/Profile/tennis-racket.png')} style={style.icon}></Image>
                        <Text style={style.iconText}>Padel</Text>
                    </View>
                    <View style={style.containerIcon}>
                        <Image source={require('../../../../assets/Profile/boulderingicon.png')} style={style.icon}></Image>
                        <Text style={style.iconText}>Bouldering</Text>
                    </View>
                    <View style={style.containerIcon}>
                        <Image source={require('../../../../assets/Profile/kayakIcon.png')} style={style.icon}></Image>
                        <Text style={style.iconText}>Kayak</Text>
                    </View>
                    <View style={style.containerIcon}>
                        <Image source={require('../../../../assets/Profile/gymicon.png')} style={style.icon}></Image>
                        <Text style={style.iconText}>Gym</Text>
                    </View>
                    <View style={style.containerIcon}>
                        <Image source={require('../../../../assets/Profile/runicon.png')} style={style.icon}></Image>
                        <Text style={style.iconText}>Jogging</Text>
                    </View>
                </View>
            </View>
            <Text style={style.subtitle}>Achievements</Text>
            <View style={style.infoContainer3}>
                <Text style={style.subtext2}>Black belt in Karate</Text>
                <Text style={style.subtext2}>4 years member of kayak school team</Text>
            </View>
            <View style={[style.edit]}>
                <MaterialIcons name="edit" size={30} color="#FFFFFF" onPress={() => onPressProfile()}></MaterialIcons>
            </View>
        </ScrollView>
    )
}


