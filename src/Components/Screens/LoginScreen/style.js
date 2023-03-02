import React from "react";
import { Dimensions, StyleSheet,useTheme } from "react-native";

const styles = StyleSheet.create({
    containerView: {
      flex: 1,
      alignItems: "center",
    },
    loginScreenContainer: {
      width: Dimensions.get("window").width,
      flex: 1,
      alignItems: "center",
    },
    logoText: {
      fontSize: 36,
      fontWeight: "600",
      marginTop: 200,
      marginBottom: 20,
      textAlign: "center",
    },
    loginFormView: {
      flex: 1,
      width: Dimensions.get("window").width * 0.9,
      alignItems: "center",
    },
    loginFormTextInput: {
      height: 43,
      fontSize: 14,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: "#eaeaea",
      backgroundColor: "#fafafa",
      paddingLeft: 10,
      marginTop: 5,
      marginBottom: 5,
      width: Dimensions.get("window").width * 0.8,
    },
    primaryButton: {
      marginTop: 30,
      borderRadius: 5,
      height: 42,
      width: 100,
      alignItems: "center",
      fontSize: 16,
    },
    secondaryButton: {
      alignSelf: "center",
      padding: 30,
      backgroundColor: "transparent",
      fontSize: 16,
    },
    errorMessage: {
      color: "#FF0000",
    },
  }); 

  export default styles

