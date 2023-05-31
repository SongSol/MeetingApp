import React, { createContext } from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoadingPage from '@components/pages/LoadingPage';
import SignInPage from '@components/pages/SignInPage';
import InitialPage from '@components/pages/InitialPage';
import JudgeLookPage from '@components/pages/JudgeLookPage';
import Phone from '@components/pages/SignUp/Phone';
import Email from '@components/pages/SignUp/Email';
import Password from '@components/pages/SignUp/Password';
import Gender from '@components/pages/SignUp/Gender';
import Nickname from '@components/pages/SignUp/Nickname';
import BirthDate from '@components/pages/SignUp/BirthDate';
import Height from '@components/pages/SignUp/Height';
import BodyType from '@components/pages/SignUp/BodyType';
import Address from '@components/pages/SignUp/Address';
import Job from '@components/pages/SignUp/Job';
import AnnualSalary from '@components/pages/SignUp/AnnualSalary';
import OffDay from '@components/pages/SignUp/OffDay';
import JudgeSelfLook from '@components/pages/JudgeSelfLook';
import PictureUploadPage from '@components/pages/PictureUploadPage';
import Judgefail from '@components/pages/Judgefail';
import { Provider } from 'react-native-paper';
import TagSelect from '@components/pages/TagSelect';
import Main from '@components/pages/Main';
import AppContext from '@components/atoms/AppContext';
import BottomNavigation from '@components/pages/BottomNavigation';
import SocialList from '@components/pages/Social/List';
import ChatMain from '@components/pages/ChatMain';
// import {View, Button, Image, StyleSheet, Text} from 'react-native';

export default function App() {

  const Stack = createNativeStackNavigator();
  const signUpInfo = {
    phone: '',
    email: '',
    password: '',
    gender: '',
    nickname: '',
    birthdate: '',
    height: '',
    bodytype: '',
    address: '',
    job: '',
    annualsalary: '',
    offday: ''
  }
  return (
    <AppContext.Provider value={signUpInfo}>
      <Provider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* <Stack.Screen name="LoadingPage" component={LoadingPage} /> */}
            <Stack.Screen name="InitialPage" component={InitialPage} />
            <Stack.Screen name="SignInPage" component={SignInPage} />
            <Stack.Screen name="Email" component={Email} />
            <Stack.Screen name="Password" component={Password} />
            <Stack.Screen name="Phone" component={Phone} />
            <Stack.Screen name="Nickname" component={Nickname} /> 
            <Stack.Screen name="BirthDate" component={BirthDate} />
            <Stack.Screen name="Gender" component={Gender} />  
            <Stack.Screen name="JudgeLookPage" component={JudgeLookPage} />
            <Stack.Screen name="JudgeSelfLook" component={JudgeSelfLook} />
            <Stack.Screen name="Judgefail" component={Judgefail} />
            <Stack.Screen name="PictureUploadPage" component={PictureUploadPage} />
            <Stack.Screen name="Height" component={Height} />
            <Stack.Screen name="BodyType" component={BodyType} />
            <Stack.Screen name="Address" component={Address} />
            <Stack.Screen name="Job" component={Job} />
            <Stack.Screen name="AnnualSalary" component={AnnualSalary} />
            <Stack.Screen name="OffDay" component={OffDay} />
            <Stack.Screen name="TagSelect" component={TagSelect} />
            <Stack.Screen name="Main" component={Main} />
            <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
            <Stack.Screen name="ChatMain" component={ChatMain} />
            <Stack.Screen name="SocialList" component={SocialList} />
            <Stack.Screen name="LoadingPage" component={LoadingPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </AppContext.Provider>
  );
}

