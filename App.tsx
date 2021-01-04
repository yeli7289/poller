import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { ApolloClient, ApolloProvider, InMemoryCache, NormalizedCacheObject } from '@apollo/client';
import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AuthticationNavigationView from './navigation/index';

export default function App() {
  const colorScheme = useColorScheme();
  const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(), 
    uri: 'https://6hp1exkdk2.execute-api.us-east-1.amazonaws.com/v1/graphql'
  });
  return (
    <ApolloProvider client={apolloClient}>
        <AuthticationNavigationView />
    </ApolloProvider>
  );
}
