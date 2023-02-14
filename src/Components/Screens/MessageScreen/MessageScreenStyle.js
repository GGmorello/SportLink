import React from 'react';
import { StyleSheet } from "react-native"


const styles = StyleSheet.create({
    screen: {
        position: "relative",
    },
    navigationBar:{
        position: "fixed",
        flex: 1,
        width: "100%",
        bottom: 0,
    },
    verticalScrollView:{
        marginHorizontal: 5,
    },
    horizontalScrollView: {
        marginVertical: 5,
    },
    title: {
      color: '#000',
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'left',
    }
  });

  export default styles