import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { auth } from './src/Utilities/firebase.config';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import React from 'react';
import UserStack from './src/Components/userStack';
import AuthStack from './src/Components/authStack';
import { onAuthStateChanged } from "firebase/auth";


export default function App() {
  const [user, setUser] = React.useState({});
  
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return user ? <UserStack /> : <AuthStack />;


  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});