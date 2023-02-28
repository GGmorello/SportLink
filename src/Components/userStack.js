import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SwipeScreenPresenter from './Screens/SwipeScreen/SwipeScreenPresenter';
import ProfileScreenPresenter from './Screens/ProfileScreen/ProfileScreenPresenter';
import MessageScreenPresenter from './Screens/MessageScreen/MessageScreenPresenter';
import ShowImageScreenPresenter from './Screens/ShowImageScreen/ShowImageScreenPresenter';
import EditScreenPresenter from './Screens/ProfileScreen/EditScreenPresenter';
import ChatScreenPresenter from './Screens/ChatScreen/ChatScreenPresenter';
import SettingsScreenPresenter from './Screens/SettingsScreen/SettingsScreenPresenter';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import SettingsScreenView from './Screens/SettingsScreen/SettingsScreenView';

const Stack = createNativeStackNavigator();

export default function UserStack() {
    return (<NavigationContainer>
        <Stack.Navigator screenOptions={{ animation: 'none' }}>
            <Stack.Screen
                name="SwipeScreen"
                component={SwipeScreenPresenter}
                options={({ navigation }) => ({
                    headerRight: (props) => <Settings {...props} navigation={navigation} />,
                    title: 'SportLink',

                })}
            />
            <Stack.Screen
                name="ProfileScreen"
                options={{ title: 'Profile' }}
                component={ProfileScreenPresenter}
            />
            <Stack.Screen
                name="ChatScreen"
                options={{ title: 'Chat' }}
                component={ChatScreenPresenter}
            />
            <Stack.Screen
                name="MessageScreen"
                options={{ title: 'Matches' }}
                component={MessageScreenPresenter}
            />
            <Stack.Screen
                name="ShowImage"
                options={{ title: '' }}
                component={ShowImageScreenPresenter}
            />
            <Stack.Screen
                name="EditProfileScreen"
                options={{ title: 'Edit Profile' }}
                component={EditScreenPresenter}
            />
            <Stack.Screen
                name="SettingsScreen"
                options={{ title: 'Settings' }}
                component={SettingsScreenPresenter}
            />
        </Stack.Navigator>
    </NavigationContainer>
    );

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
}
