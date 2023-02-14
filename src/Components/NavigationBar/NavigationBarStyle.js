import React from 'react';
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5
  }
});

const style = StyleSheet.create({
    container: {
      backgroundColor: '#000000',
        //'rgb(180, 203, 240)',     //ive been told that the blue looks ugly, and that we should do black
      border: '1px',
      height: 75,
      elevation: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingVertical: 10,
      ...styles.shadow
    },
  });



  export default style