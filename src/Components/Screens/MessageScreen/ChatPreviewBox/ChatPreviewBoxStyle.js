import React from 'react';
import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    container: {
      display: "flex",
      justifyContent: "center",
      margin: 5,
    },
    imageCircle: {
      width: 80,
      height: 80,
      borderRadius: 40,
      overflow: 'hidden',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    image: {
      width: 80,
      height: 80,
    },
    textContainer: {
      position: 'absolute',
      marginLeft: 100,
      top: 0, 
      paddingVertical: 4,
    },
    name: {
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
    },
    messagePreview: {color: '#000',
    fontSize: 16,
    textAlign: 'left',},
  });

  export default styles