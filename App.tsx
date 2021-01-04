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
import * as config from './config.json';

export default function App() {
  const colorScheme = useColorScheme();
  const apolloClient: ApolloClient<NormalizedCacheObject> = new ApolloClient({
    cache: new InMemoryCache(), 
    uri: config.gql.uri
  });
  return (
    <ApolloProvider client={apolloClient}>
        <AuthticationNavigationView />
    </ApolloProvider>
  );
}
