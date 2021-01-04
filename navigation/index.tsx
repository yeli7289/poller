import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../screens/Auth/LoginScreen';
import AuthScreen, { AuthScreenParams } from '../screens/Auth/AuthScreen';
import UserInfoScreen, { UserInfoScreenParams } from '../screens/User/UserInfoScreen';

export enum AppScreens {
    LoginScreen = 'LoginScreen',
    UserInfoScreen = 'UserInfoScreen',
    AuthScreen = 'AuthScreen'
}

export type AppStackParameterList = {
    LoginScreen: undefined;
    UserInfoScreen: UserInfoScreenParams;
    AuthScreen: AuthScreenParams;
}

const Stack = createStackNavigator<AppStackParameterList>();

export default function AuthticationNavigationView() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator initialRouteName={AppScreens.LoginScreen}>
                <Stack.Screen name={AppScreens.LoginScreen} component={LoginScreen} />
                <Stack.Screen name={AppScreens.UserInfoScreen} component={UserInfoScreen} />
                <Stack.Screen name={AppScreens.AuthScreen} component={AuthScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}