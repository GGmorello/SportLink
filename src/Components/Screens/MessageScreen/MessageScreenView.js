import React from "react";
import {View, Text, ScrollView} from "react-native"
import ChatPreview from "./ChatPreviewBox/ChatPreviewBoxView";
import styles from "./MessageScreenStyle";
import NewMatchPreview from "./NewMatchPreviewBox/NewMatchPreviewBoxView";

export default function MessageScreenView(props) {
    let match = {
        id: "1",
        name: "Testino",
        messagePreview: "This is a sample message...",
        imageUrl: "https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50",
    }
    let match2 = {
        id: "2",
        name: "Testino",
        messagePreview: "This is a sample message...",
        imageUrl: "https://images.pexels.com/photos/1040881/pexels-photo-1040881.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
    let match3 = {
        id: "3",
        name: "Test",
        messagePreview: "This is a sample message...",
        imageUrl: "https://images.pexels.com/photos/1542085/pexels-photo-1542085.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }
    let match4 = {
        id: "4",
        name: "Testina",
        messagePreview: "This is a sample message...",
        imageUrl: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    }

    function onChatClick(id){
        props.onChatClick(id)
    }

    return (
        <ScrollView style={styles.verticalScrollView}>
        <Text style={styles.title}>New Matches</Text>
            <ScrollView style={styles.horizontalScrollView} horizontal={true}>
                <NewMatchPreview
                onPress={() => onChatClick(match)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match2)}
                name= {match2.name} 
                messagePreview= {match2.messagePreview}
                imageUrl= {match2.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match3)}
                name= {match3.name} 
                messagePreview= {match3.messagePreview}
                imageUrl= {match3.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match4)}
                name= {match4.name} 
                messagePreview= {match4.messagePreview}
                imageUrl= {match4.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <NewMatchPreview
                onPress={() => onChatClick(match2)}
                name= {match2.name} 
                messagePreview= {match2.messagePreview}
                imageUrl= {match2.imageUrl}/>
            </ScrollView>
            <Text style={styles.title}>Messages</Text>
                <ChatPreview
                onPress={() => onChatClick(match3)}
                name= {match3.name} 
                messagePreview= {match3.messagePreview}
                imageUrl= {match3.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match4)}
                name= {match4.name} 
                messagePreview= {match4.messagePreview}
                imageUrl= {match4.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match)}
                name= {match.name} 
                messagePreview= {match.messagePreview}
                imageUrl= {match.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match2)}
                name= {match2.name} 
                messagePreview= {match2.messagePreview}
                imageUrl= {match2.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match3)}
                name= {match3.name} 
                messagePreview= {match3.messagePreview}
                imageUrl= {match3.imageUrl}/>
                <ChatPreview
                onPress={() => onChatClick(match)}
                name= {match4.name} 
                messagePreview= {match4.messagePreview}
                imageUrl= {match4.imageUrl}/>
            </ScrollView>)
        
}
