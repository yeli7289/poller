import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AppScreens, AppStackParameterList } from '../../navigation/index';


type NavigationProps = StackScreenProps<AppStackParameterList, AppScreens.UserInfoScreen>;

export type UserInfoScreenParams = {
    userId: string,
    firstName: string,
    lastName: string
}

interface UserInfoScreenProps {
    route: { params: UserInfoScreenParams },
    navigtion: NavigationProps
}

export default function UserInfoScreen({route, navigtion} : UserInfoScreenProps) {
    const params: UserInfoScreenParams = route.params;
    const userId: string = params.userId;
    const firstName: string = params.firstName;
    const lastName: string = params.lastName;
    return (
        <SafeAreaView>
            <Text> {userId}: {firstName} {lastName}</Text>
        </SafeAreaView>
    );
}
