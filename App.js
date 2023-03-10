import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingPage from './components/pages/LoadingPage';
import SignInPage from './components/pages/SignInPage';
import InitialPage from './components/pages/InitialPage';
import SignUpPage from './components/pages/SignUpPage';

// import {View, Button, Image, StyleSheet, Text} from 'react-native';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="LoadingPage" component={LoadingPage} /> */}
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="SignUpPage" component={SignUpPage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

