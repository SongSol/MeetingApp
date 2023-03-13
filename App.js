import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingPage from './src/components/pages/LoadingPage';
import SignInPage from './src/components/pages/SignInPage';
import InitialPage from './src/components/pages/InitialPage';
import SignUpPage from './src/components/pages/SignUpPage';
import JudgeLookPage from './src/components/pages/JudgeLookPage';

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
        <Stack.Screen name="JudgeLookPage" component={JudgeLookPage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

