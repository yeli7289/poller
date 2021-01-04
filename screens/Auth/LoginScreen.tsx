import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { gql, useQuery } from '@apollo/client';
import { AppScreens, AppStackParameterList } from '../../navigation/index';

type NavigationProps = StackScreenProps<AppStackParameterList, AppScreens.LoginScreen>;

export default function LoginScreen({ navigation }: NavigationProps) {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    return (
        <View>
            <Input
                placeholder='email'
                leftIcon={<Icon name='user' size={24} color='black' />}
                keyboardType='email-address'
                onChangeText={email => setEmail(email)}
                value={email}
            />

            <Input
                placeholder='password'
                leftIcon={<Icon name='lock' size={24} color='black' />}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                value={password}
            />

            <Button title="Submit" onPress={()=> {
                // apollo client to verify the email, then navigate to userInfoScreen or show error message.
                navigation.navigate(AppScreens.AuthScreen, {
                    account: email,
                    password: password
                });
            }} 
            />
        </View>

    );
}
const styles = StyleSheet.create({
    container: {},
    title: {},
    text: {}
})