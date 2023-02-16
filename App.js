import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SwipeScreenPresenter from './src/Components/Screens/SwipeScreen/SwipeScreenPresenter';
import ProfileScreenPresenter from './src/Components/Screens/ProfileScreen/ProfileScreenPresenter';
import MessageScreenPresenter from './src/Components/Screens/MessageScreen/MessageScreenPresenter';
import ShowImageScreenPresenter from './src/Components/Screens/ShowImageScreen/ShowImageScreenPresenter';
import EditScreenPresenter from './src/Components/Screens/ProfileScreen/EditScreenPresenter';
import ChatScreenPresenter from './src/Components/Screens/ChatScreen/ChatScreenPresenter';
import SettingsScreenPresenter from './src/Components/Screens/SettingsScreen/SettingsScreenPresenter';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SettingsScreenView from './src/Components/Screens/SettingsScreen/SettingsScreenView';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ animation: 'none'}}>
        <Stack.Screen
          name="SwipeScreen"
          component={SwipeScreenPresenter}
          options={({ navigation }) => ({
            headerRight: (props) => <Settings {...props} navigation={navigation}/>
          })}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreenPresenter}
        />
        <Stack.Screen
          name="ChatScreen"
          component={ChatScreenPresenter}
        />
        <Stack.Screen
          name="MessageScreen"
          component={MessageScreenPresenter}
        />
        <Stack.Screen
          name="ShowImage"
          component={ShowImageScreenPresenter}
        />
        <Stack.Screen
          name="EditProfileScreen"
          component={EditScreenPresenter}
        />
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreenPresenter}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Settings({navigation}) {
  return (
    <FontAwesome 
      name='cog'
      size={30}
      style={{marginRight:20}}
      onPress={() => navigation.navigate('SettingsScreen')}
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});