import React from "react";
import styles from "./ChatScreenStyle";
import {
    Text,
    View,
    TouchableOpacity,
    Image,
    TextInput,
    FlatList,
  } from 'react-native';

export default function ChatScreenView(props) {
    let match = {
        id: "1",
        name: "Test Name",
        messagePreview: "This is a sample message...",
        imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    }

    let messageHistory = props.messageHistory
    const flatlistRef = props.flatlistRef


    function sendMessage(){
        props.sendMessage()
    }

    function setMessage(data){
        props.setMessage(data)
    }

    function renderDate(date){
        return(
        <Text style={styles.time}>
            {date}
        </Text>
        );
    }

    return (
    <View style={styles.container}>
        <View style={styles.headerContainer}>
            <View style={styles.headerItems}>
                <Image style={styles.image} source={{ uri: match.imageUrl }} />
                <Text style={styles.name}>{match.name}</Text>
            </View>
        </View>
        <View style={styles.chatContainer}>
            <FlatList 
            style={styles.list}
            data={messageHistory}
            ref={flatlistRef}
            keyExtractor= {(item) => {
                return item.id;
            }}
            renderItem={(message) => {
                const item = message.item;
                let inMessage = item.type === 'in';
                let itemStyle = inMessage ? styles.itemIn : styles.itemOut;
                let timeStamp = inMessage ? styles.timeStampIn : styles.timeStampOut;

                return (
                <View>
                    <View style={timeStamp}>
                    <Text>{renderDate(item.date)}</Text>
                    </View>
                    
                <View style={[styles.item, itemStyle]}>
                    {!inMessage}
                    <View style={[styles.balloon]}>
                    <Text>{item.message}</Text>
                    </View>
                    {inMessage}
                </View>
                </View>
                )
            }}
            />
        </View>
        <View style={styles.footer}>
            <View style={styles.inputContainer}>
            <TextInput style={styles.inputs}
                placeholder="Write a message..."
                underlineColorAndroid='transparent'
                value={props.currentMessage}
                autoFocus={true}
                onSubmitEditing={sendMessage}
                onChangeText={(text) => setMessage(text)}/>
            </View>
            <TouchableOpacity style={styles.btnSend}  onPress={() => {sendMessage()}}>
            <Image source={{uri:"https://img.icons8.com/small/75/ffffff/filled-sent.png"}}  style={styles.iconSend}  />
            </TouchableOpacity>
        </View>
    </View>
    );

}
