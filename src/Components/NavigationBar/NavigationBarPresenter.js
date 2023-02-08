import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Swiping"
            component={HomeScreen}
            options={{title: 'Welcome'}}
          />
          <Stack.Screen 
            name="Profile" 
            component={ProfileScreen} 
          />
          <Stack.Screen
            name=""
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  };