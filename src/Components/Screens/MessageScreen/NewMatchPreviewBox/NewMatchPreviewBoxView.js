import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import styles from "./NewMatchBoxStyle"


const NewMatchPreview = ({ name, imageUrl, onPress}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View   style={styles.container}>
        <Image style={styles.image} source={{ uri: imageUrl }} />
        <Text style={styles.name}>{name}</Text>
    </View>
    </TouchableOpacity >
  );
};

export default NewMatchPreview;