import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet, Text } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { gql, useQuery } from '@apollo/client';
import { AppScreens, AppStackParameterList } from '../../navigation/index';

interface User {
    verifyAccount: {
        user_id: string,
        first_name: string,
        last_name: string,
        creation_date: string,
        photo: string
    }
   
}

interface verrifyAccountQuery {
    account: string,
    password: string
}

const VERIFY_ACCOUNT = gql `
    query GetVerifyAccount($account: String!, $password: String!) {
        verifyAccount(account: $account, password: $password) {
            user_id,
            first_name,
            last_name
        }
        
    }
`

type NavigationProps = StackScreenProps<AppStackParameterList, AppScreens.AuthScreen>;

export type AuthScreenParams = {
    account: string,
    password: string
}

interface AuthScreenProps {
   route: {params: AuthScreenParams},
   navigation: NavigationProps
}
export default function AuthScreen({route, navigation}: AuthScreenProps) {
    const params: AuthScreenParams = route.params;
    const account: string = params.account;
    const password: string = params.password;

    console.log(account);
    console.log(password);
    const { loading, error, data } = useQuery<User, verrifyAccountQuery>(
        VERIFY_ACCOUNT,
        { variables: { account: account, password: password } }
    );

    console.log(data);
    if (loading) {
        return (
            <View> 
                <Text> Loading! </Text>
            </View>
        );
    } 
    if (error) {
        console.log("Error: " + error.message)
        return (
            <View> 
                <Text> Error! </Text>
            </View>
        );
    }
    if (data == undefined || data.verifyAccount == undefined ) {
        return (
            <View> 
                <Text> Data undefined! </Text>
            </View>
        );
    }
    return (
        <View> 
            <Text>{data.verifyAccount.first_name} {data.verifyAccount.last_name}</Text>
        </View>
    );
}