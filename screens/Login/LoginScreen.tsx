import * as React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Input, Button } from 'react-native-elements';
import { View, StyleSheet, Text, SafeAreaView, ActivityIndicator } from 'react-native';
import { StackScreenProps } from '@react-navigation/stack';
import { ApolloConsumer, useLazyQuery } from '@apollo/client';
import { AppScreens, AppStackParameterList } from '../../navigation/index';
import { User, VerifyAccountQuery, VERIFY_ACCOUNT_QUERY } from './gql/Query'

type NavigationProps = StackScreenProps<AppStackParameterList, AppScreens.LoginScreen>;

export default function LoginScreen({ navigation }: NavigationProps) {
    const [account, setAccount] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [message, setMessage] = React.useState('');
    return (
        <View>
            <Input
                placeholder='email'
                leftIcon={<Icon name='user' size={24} color='black' />}
                keyboardType='email-address'
                onChangeText={account => setAccount(account)}
                value={account}
            />

            <Input
                placeholder='password'
                leftIcon={<Icon name='lock' size={24} color='black' />}
                secureTextEntry={true}
                onChangeText={password => setPassword(password)}
                value={password}
            />
            <ApolloConsumer>
                {client => (
                    <View>
                        <Button title="Submit" onPress={ async () => {
                            try {
                                const { loading, error, data } = await client.query({
                                    query: VERIFY_ACCOUNT_QUERY,
                                    variables: {
                                        account: account,
                                        password: password
                                    }
                                });
                                if(data && data.verifyAccount) {
                                    const user = data.verifyAccount;
                                    navigation.navigate(AppScreens.UserInfoScreen, {
                                        user_id: user.user_id,
                                        first_name: user.first_name,
                                        last_name: user.last_name,
                                        creation_date: user.creation_date,
                                        photo: user.photo
                                    });
                                } 
                                if (error || data == undefined || data.verifyAccount == undefined) {
                                    console.log('Email or Password is wrong!');
                                    setMessage('Email or Password is wrong!');
                                }
                            } catch {
                                console.log('Error!');
                                setMessage('Sorry system error, pls try it again!');
                            }
                        }}/>
                        <Text>{message}</Text>
                    </View>
                )}
            </ApolloConsumer>
        </View>

    );
}
const styles = StyleSheet.create({
    container: {},
    title: {},
    text: {}
})


