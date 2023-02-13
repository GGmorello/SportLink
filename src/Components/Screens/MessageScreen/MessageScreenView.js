import React from "react";
import {View, Text, ScrollView} from "react-native"
import ChatPreview from "./ChatPreviewBox/ChatPreviewBoxView";
import styles from "./MessageScreenStyle";
import NewMatchPreview from "./NewMatchPreviewBox/NewMatchPreviewBoxView";

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
            <Text style={styles.title}>New Matches</Text>
            <ScrollView style={styles.horizontalScrollView} horizontal={true}>
                <NewMatchPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
            </ScrollView>
            <Text style={styles.title}>Messages</Text>
            <ScrollView style={styles.verticalScrollView}>
                <ChatPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match.id)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
            </ScrollView>
        </View>)
}
