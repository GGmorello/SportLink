import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from "./ChatPreviewBoxStyle"


const ChatPreview = ({ name, messagePreview, imageUrl }) => {
  return (
    <View style={styles.container}>
        <View style={styles.imageCircle}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.messagePreview}>{messagePreview}</Text>
        </View>
    </View>
  );
};

export default ChatPreview;