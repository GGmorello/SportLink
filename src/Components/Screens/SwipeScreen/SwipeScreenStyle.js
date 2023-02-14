import React from 'react';
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    image: {
        width: 180,
        height: 180,
        overflow: 'hidden',
        marginBottom: 10,
      },
      navigationBar:{
        position: "absolute",
        width: "100%",
        bottom: 0,
    },
    screen: {
      flex: 1,           
    },
    verticalScrollView:{
      marginHorizontal: 10,
      marginBottom:75,
  },
  horizontalScrollView: {
      marginVertical: 5,
  },
});

export default styles;