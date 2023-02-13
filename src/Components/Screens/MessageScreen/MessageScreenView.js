import React from "react";
import {View, Text, TouchableOpacity} from "react-native"
import ChatPreview from "./ChatPreviewBox/ChatPreviewBoxView";

export default function MessageScreenView(props) {
    let match = {
        id: "1",
        name: "Test Name",
        messagePreview: "This is a sample message...",
        imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    }

    function onChatClick(id){
        props.onChatClick(id)
    }

    return (
        <View>
            <ChatPreview
            onPress={() => onChatClick(match.id)}
            name= {match.name} 
            messagePreview= {match.messagePreview}
            imageUrl= {match.imageUrl}/>
        </View>)
}
