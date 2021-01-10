import * as React from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { AppScreens, AppStackParameterList } from '../../navigation/index';


type NavigationProps = StackScreenProps<AppStackParameterList, AppScreens.UserInfoScreen>;

export type UserInfoScreenParams = {
    user_id: string,
    first_name: string,
    last_name: string,
    creation_date: string,
    photo: string
}

interface UserInfoScreenProps {
    route: { params: UserInfoScreenParams },
    navigtion?: NavigationProps
}

export default function UserInfoScreen({route, navigtion} : UserInfoScreenProps) {
    const params: UserInfoScreenParams = route.params;
    const userId: string = params.user_id;
    const firstName: string = params.first_name;
    const lastName: string = params.last_name;
    const creationDate: string = params.creation_date;
    const photo: string = params.photo;
    return (
        <SafeAreaView>
            <Text> Hello {userId}: {firstName} {lastName} !</Text>
        </SafeAreaView>
    );
}
