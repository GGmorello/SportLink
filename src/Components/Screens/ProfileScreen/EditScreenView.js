import React from "react";
import {View, Image, Text, ScrollView, TextInput} from "react-native"
import ImagePresenter from "../../Images/ImagePresenter"
import style from "./ProfileScreenStyle"
import { MaterialIcons } from "@expo/vector-icons";

export default function EditScreenView(props) {

    const [text, onChangeText] = React.useState('Hej! I’m a student looking forward to meeting new people who exercising with.')

    function onPressProfile() {
        props.onProfilePress()
    }

    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <View style={{ alignSelf: "center" }}>
                    <View style={style.profileImage}>
                        <Image source={require("../../../../assets/Profile/ProfilePicture.png")} style={style.image}></Image>
                    </View>
                    <View style={style.add}>
                        <MaterialIcons name="edit" size={20} color="#FFFFFF"></MaterialIcons>
                    </View>
                </View>
                <View style={style.infoContainer}>
                    <Text style={style.text}>Anna, 22</Text>
                    <Text style={style.subtext}>Stockholm, Sweden</Text>
                </View>
                <Text style={style.subtitle}>Biography</Text>
                <View style={[style.infoContainer, {backgroundColor: '#b4cbf0'}]}>
                    <TextInput style={[style.subtext, {margin: 6}]} multiline onChangeText={onChangeText} value={text}></TextInput>
                </View>
                <Text style={style.subtitle}>About me</Text>
                <View style={[style.infoContainer2, {backgroundColor: '#b4cbf0'}]}>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 5}}> 
                        <View style={{flexDirection:'row'}}>
                            <MaterialIcons name="link" size={20} style={[style.icon, {marginLeft: 5}]}></MaterialIcons>
                            <Text style={style.subtext}>Looking for...</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[style.subtext, {marginRight:5}]}>Long Term partner</Text>
                            <MaterialIcons name="arrow-right" size={20} style={{marginTop: 2}}></MaterialIcons>
                        </View>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 5}}> 
                        <View style={{flexDirection:'row'}}>
                            <MaterialIcons name="location-pin" size={20} style={[style.icon, {marginLeft: 5}]}></MaterialIcons>
                            <Text style={style.subtext}>Location</Text>
                        </View>
                        <View style={{flexDirection:'row'}}>
                            <Text style={[style.subtext, {marginRight:5}]}>Distance</Text>
                            <MaterialIcons name="arrow-right" size={20} style={{marginTop: 2}}></MaterialIcons>
                        </View>
                    </View>
                </View> 
                <Text style={style.subtitle}>Your pictures</Text>
                <View style={{flexDirection:"row", flexWrap: 'wrap', marginLeft: 10, marginRight: 7}}>
                    <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/padel.png')} styles={style.activitiesImageEdit}></ImagePresenter>
                    <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/bouldering.png')} styles={style.activitiesImageEdit}></ImagePresenter>
                    <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/run.png')} styles={style.activitiesImageEdit}></ImagePresenter>
                    <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/kayak.png')} styles={style.activitiesImageEdit}></ImagePresenter>
                    <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/yoga.png')} styles={style.activitiesImageEdit}></ImagePresenter>
                    <ImagePresenter navigation={props.navigation} url={require('../../../../assets/Profile/bike.png')} styles={style.activitiesImageEdit}></ImagePresenter>
                    <View style={[style.activitiesImageEdit, {backgroundColor: '#B4CBF0', alignItems:'center', alignContent:'center', justifyContent:'center'}]}>
                        <MaterialIcons name="add" size={30} color={'#FFFFFF'}></MaterialIcons>
                    </View> 
                </View>
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
                        <View style={[style.add, {right: -50, bottom: 3}]}>
                            <MaterialIcons name="add" size={20} color="#FFFFFF"></MaterialIcons>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}


