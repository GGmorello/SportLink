import React from 'react';
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    image: {
      width: 180,
      height: 180,
      overflow: 'hidden',
      marginBottom: 10,
      marginRight: 10,
    },
    navigationBar:{
      position: "absolute",
      width: "100%",
      bottom: 0,
    },
    screen: {
      flex: 1,           
    },
    screenLayout:{
      marginHorizontal: 10,
      marginBottom: 75,
      marginVertical: 10,
    },
    horizontalScrollView: {
        marginVertical: 5,
    },
    rowContainer: {
      flexDirection: 'row',
    },
    rowContainerSpaceBetween: {
      flexDirection: 'row',
      justifyContent: "space-between",
      marginHorizontal: 20,
      marginVertical: 20,
    },
    name: {
      fontSize: 30
    },
    age: {
      fontSize: 22
    },
    distance: {
      fontSize: 15
    },
    sectionTitle: {
      color: "#3f3f3f",
      marginBottom: 10,
    },
    containerIcon: {
      flexDirection: 'row', 
      backgroundColor: '#B4CBF0',
      borderColor:'#B4CBF0',
      borderWidth: 1,
      marginRight: 10,
      marginBottom: 10,
      paddingTop: 5,
      paddingBottom: 5,
      paddingRight: 10,
      paddingLeft: 10,
      borderRadius: 10
  },
  approveButton: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#2CF10C',
    opacity: 0.7,
  },
  rejectButton: {
    width: 65,
    height: 65,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    backgroundColor: '#F20B0B',
    opacity: 0.7,
  },
});

export default styles;