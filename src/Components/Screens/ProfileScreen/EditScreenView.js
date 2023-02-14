import React, { useState } from "react";
import {View, Image, Text, ScrollView, TextInput, TouchableHighlight, TouchableOpacity} from "react-native"
import ImagePresenter from "../../Images/ImagePresenter"
import style from "./ProfileScreenStyle"
import { MaterialIcons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { Button } from "react-native-web";

export default function EditScreenView(props) {

    const [text, onChangeText] = React.useState('Hej! I’m a student looking forward to meeting new people who exercising with.')
    const [text2, onChangeText2] = React.useState('Black belt in Karate 4 years member of kayak school team')

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisibleLookingFor, setModalVisibleLookingFor] = useState(false);
    const [isModalVisibleDistance, setModalVisibleDistance] = useState(false);

    function onPressProfile() {
        props.onProfilePress()
    }

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    
    const toggleModalLookingFor = () => {
        setModalVisibleLookingFor(!isModalVisibleLookingFor);
    };

    const toggleModalDistance = () => {
        setModalVisibleDistance(!isModalVisibleDistance);
    };


    return (
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={style.container}>
                <View style={{ alignSelf: "center" }} >
                    <TouchableOpacity onPress={toggleModal}>
                        <View style={style.profileImage}>                
                            <Image source={require("../../../../assets/Profile/ProfilePicture.png")} style={style.image}></Image>
                        </View>
                    </TouchableOpacity>
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
                        <TouchableOpacity onPress={toggleModalLookingFor}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={[style.subtext, {marginRight:5}]}>Long Term partner</Text>
                                <MaterialIcons name="arrow-right" size={20} style={{marginTop: 2}}></MaterialIcons>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{flexDirection:'row', justifyContent: 'space-between', marginTop: 5, marginBottom: 5}}> 
                        <View style={{flexDirection:'row'}}>
                            <MaterialIcons name="location-pin" size={20} style={[style.icon, {marginLeft: 5}]}></MaterialIcons>
                            <Text style={style.subtext}>Location</Text>
                        </View>
                        <TouchableOpacity onPress={toggleModalDistance}>
                            <View style={{flexDirection:'row'}}>
                                <Text style={[style.subtext, {marginRight:5}]}>Distance</Text>
                                <MaterialIcons name="arrow-right" size={20} style={{marginTop: 2}}></MaterialIcons>
                            </View>
                        </TouchableOpacity>
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
                    <TouchableOpacity onPress={toggleModal}>
                        <View style={[style.activitiesImageEdit, {backgroundColor: '#B4CBF0', alignItems:'center', alignContent:'center', justifyContent:'center'}]}>
                            <MaterialIcons name="add" size={30} color={'#FFFFFF'}></MaterialIcons>
                        </View> 
                    </TouchableOpacity>
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
                <Text style={style.subtitle}>Achievements</Text>
                <View style={[style.infoContainer, {backgroundColor: '#b4cbf0'}]}>
                    <TextInput style={[style.subtext, {margin: 6}]} multiline onChangeText={onChangeText} value={text2}></TextInput>
                </View>
                <Modal
                    onBackdropPress={() => setModalVisible(false)}
                    onBackButtonPress={() => setModalVisible(false)}
                    isVisible={isModalVisible}
                    swipeDirection="down"
                    onSwipeComplete={toggleModal}
                    animationIn="slideInUp"
                    animationOut="bounceOutDown"
                    animationInTiming={500}
                    animationOutTiming={500}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}
                    style={style.modal}>
                    <View style={style.modalContent}>
                        <View style={style.center}>
                            <View style={style.barIcon} />
                            <Text style={{color:'#FFFFFF', fontSize:20, marginTop: 3}}>Select source</Text>
                        </View>
                        <View style={{margin: 5, flexDirection:'row', justifyContent:'space-around'}}>
                            <View sytle={{alignContent:'center', alignItems: "center"}}>
                                <View style={{alignContent:'center', alignItems: "center", justifyContent:"center", borderRadius: 30, width: 60, height: 60, borderWidth: 1, borderColor:'#B4CBF0'}}><MaterialIcons name="camera-alt" size={30} color={'#FFFFFF'} style={{alignSelf:"center"}}></MaterialIcons></View>
                                <Text style={[style.subtext, {color:'#FFFFFF'}]}>Camera</Text>
                            </View>
                            <View sytle={{alignContent:'center', alignItems: "center"}}>
                                <View style={{alignContent:'center', alignItems: "center", justifyContent:"center", borderRadius: 30, width: 60, height: 60, borderWidth: 1, borderColor:'#B4CBF0'}}><MaterialIcons name="camera-roll" size={30} color={'#FFFFFF'} style={{alignSelf:"center"}}></MaterialIcons></View>
                                <Text style={[style.subtext, {color:'#FFFFFF'}]}>Gallery</Text>
                            </View>
                        </View>
                    </View>                 
                </Modal>
                <Modal
                    onBackdropPress={() => setModalVisibleLookingFor(false)}
                    onBackButtonPress={() => setModalVisibleLookingFor(false)}
                    isVisible={isModalVisibleLookingFor}
                    swipeDirection="down"
                    onSwipeComplete={toggleModalLookingFor}
                    animationIn="slideInUp"
                    animationOut="bounceOutDown"
                    animationInTiming={500}
                    animationOutTiming={500}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}
                    style={style.modal}>
                    <View style={style.modalContent}>
                        <View style={style.center}>
                            <View style={style.barIcon} />
                            <Text style={{color:'#FFFFFF', fontSize:20, marginTop: 3}}>Looking for...</Text>
                        </View>
                        <View style={{margin: 5, flexDirection:'row', justifyContent:'space-around'}}>
                            <View sytle={{justifyContent:"center", flex:1, alignItems: 'center'}}>
                                <View style={{justifyContent:"center", borderRadius: 30, width: 60, height: 60, borderWidth: 1, borderColor:'#B4CBF0'}}><MaterialIcons name="person" size={30} color={'#FFFFFF'} style={{alignSelf:"center"}}></MaterialIcons></View>
                                <Text style={[style.subtext, {color:'#FFFFFF', flexWrap:"wrap"}]}>Long Term</Text>
                            </View>
                            <View sytle={{alignContent:'center', alignItems: "center"}}>
                                <View style={{alignContent:'center', alignItems: "center", justifyContent:"center", borderRadius: 30, width: 60, height: 60, borderWidth: 1, borderColor:'#B4CBF0'}}><MaterialIcons name="timer" size={30} color={'#FFFFFF'} style={{alignSelf:"center"}}></MaterialIcons></View>
                                <Text style={[style.subtext, {color:'#FFFFFF'}]}>Short Term</Text>
                            </View>
                        </View>
                        </View>                
                </Modal>
                <Modal
                    onBackdropPress={() => setModalVisibleDistance(false)}
                    onBackButtonPress={() => setModalVisibleDistance(false)}
                    isVisible={isModalVisibleDistance}
                    swipeDirection="down"
                    onSwipeComplete={toggleModalDistance}
                    animationIn="slideInUp"
                    animationOut="bounceOutDown"
                    animationInTiming={500}
                    animationOutTiming={500}
                    backdropTransitionInTiming={1000}
                    backdropTransitionOutTiming={1000}
                    style={style.modal}>
                    <View style={style.modalContent}>
                        <View style={style.center}>
                            <View style={style.barIcon} />
                            <Text style={{color:'#FFFFFF', fontSize:20, marginTop: 3}}>Looking for...</Text>
                        </View>
                        <View style={{margin: 5, flexDirection:'row', justifyContent:'space-around'}}>
                            <View sytle={{justifyContent:"center", flex:1, alignItems: 'center'}}>
                                <View style={{justifyContent:"center", borderRadius: 30, width: 60, height: 60, borderWidth: 1, borderColor:'#B4CBF0'}}><MaterialIcons name="location-pin" size={30} color={'#FFFFFF'} style={{alignSelf:"center"}}></MaterialIcons></View>
                                <Text style={[style.subtext, {color:'#FFFFFF', flexWrap:"wrap"}]}>Location</Text>
                            </View>
                            <View sytle={{alignContent:'center', alignItems: "center"}}>
                                <View style={{alignContent:'center', alignItems: "center", justifyContent:"center", borderRadius: 30, width: 60, height: 60, borderWidth: 1, borderColor:'#B4CBF0'}}><Text style={[style.subtext, {color:'#FFFFFF', flexWrap:"wrap"}]}>Km</Text></View>
                                <Text style={[style.subtext, {color:'#FFFFFF'}]}>Distance</Text>
                            </View>
                        </View>
                        </View>                
                </Modal>
            </View>
        </ScrollView>
    )
}


