import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginPage from "./Screens/LoginScreen/login"
import SignUpPage from "./Screens/SignUpScreen/signUp";
const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    cardStyle: {
                        backgroundColor: "#51308E",
                    },
                }}
            >
                <Stack.Screen name="Sign Up" component={SignUpPage} />
                <Stack.Screen name="Log In" component={LoginPage} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
