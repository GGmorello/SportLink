import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="SwipeScreen"
            component={SwipeScreenView}
          />
          <Stack.Screen 
            name="ProfileScreen" 
            component={ProfileScreenView} 
          />
          <Stack.Screen
            name="MessageScreen"
            component={MessageScreenView}
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
