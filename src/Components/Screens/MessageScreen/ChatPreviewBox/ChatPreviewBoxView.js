import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./ChatPreviewBoxStyle"


const ChatPreview = ({ name, messagePreview, imageUrl, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View   style={styles.container}>
        <View style={styles.imageCircle}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        
        </View>
        <View style={styles.textContainer}>
            <Text style={styles.name}>{name}</Text>
            <Text style={styles.messagePreview}>{messagePreview}</Text>
        </View>
    </View>
    </TouchableOpacity >
  );
};

export default ChatPreview;