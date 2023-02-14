import React from 'react';
import { StyleSheet, Dimensions} from "react-native"

let deviceHeight = Dimensions.get('window').height;
let deviceWidth = Dimensions.get('window').width;

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
      backgroundColor: '#2f2f2f',
        //'rgb(180, 203, 240)',     //ive been told that the blue looks ugly, and that we should do black
      border: '1px',
      position: 'absolute',     //??
      borderRadius: 1,
      height: 75,
      bottom: 25,
      top: deviceHeight - 130,      //idk if the 130 will work on every device bc to me it does not make sense
      left: 0,
      right:  0,
      elevation: 0,
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
      ...styles.shadow
    },
  });



  export default style