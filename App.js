import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SwipeScreenPresenter from './src/Components/Screens/SwipeScreen/SwipeScreenPresenter';
import ProfileScreenPresenter from './src/Components/Screens/ProfileScreen/ProfileScreenPresenter';
import MessageScreenPresenter from './src/Components/Screens/MessageScreen/MessageScreenPresenter';
import ShowImageScreenPresenter from './src/Components/Screens/ShowImageScreen/ShowImageScreenPresenter';
import EditScreenPresenter from './src/Components/Screens/ProfileScreen/EditScreenPresenter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="SwipeScreen"
          component={SwipeScreenPresenter}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreenPresenter}
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
