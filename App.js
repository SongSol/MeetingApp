import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingPage from '@components/pages/LoadingPage';
import SignInPage from '@components/pages/SignInPage';
import InitialPage from '@components/pages/InitialPage';
import JudgeLookPage from '@components/pages/JudgeLookPage';
import Gender from '@components/pages/SignUp/Gender';
import Nickname from '@components/pages/SignUp/Nickname';
import BirthDate from '@components/pages/SignUp/BirthDate';
import Height from '@components/pages/SignUp/Height';
import BodyType from '@components/pages/SignUp/BodyType';
import Address from '@components/pages/SignUp/Address';
import Job from '@components/pages/SignUp/Job';
import AnnualSalary from '@components/pages/SignUp/AnnualSalary';
import OffDay from '@components/pages/SignUp/OffDay';

// import {View, Button, Image, StyleSheet, Text} from 'react-native';

export default function App() {

  const Stack = createNativeStackNavigator();
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* <Stack.Screen name="LoadingPage" component={LoadingPage} /> */}
        <Stack.Screen name="InitialPage" component={InitialPage} />
        <Stack.Screen name="SignInPage" component={SignInPage} />
        <Stack.Screen name="Gender" component={Gender} />
        <Stack.Screen name="Nickname" component={Nickname} />        
        <Stack.Screen name="BirthDate" component={BirthDate} />
        <Stack.Screen name="Height" component={Height} />
        <Stack.Screen name="BodyType" component={BodyType} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="Job" component={Job} />
        <Stack.Screen name="AnnualSalary" component={AnnualSalary} />
        <Stack.Screen name="OffDay" component={OffDay} />
        <Stack.Screen name="JudgeLookPage" component={JudgeLookPage} />
      </Stack.Navigator>
    </NavigationContainer>
    
  );
}

