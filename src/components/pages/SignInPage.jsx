import React, { useState } from 'react';
import {View, StyleSheet} from 'react-native';
import axios from 'axios';

import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import TextInput from '@components/atoms/TextInput';

export default function SignInPage({navigation}) {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      }
  });
  
  const postSignIn = async (email, password) => {
    try { 
      const response = await axios.post(
        'https://gbp4u8anb3.execute-api.ap-northeast-1.amazonaws.com/User'
        , {
          what: "signin",
          email: email,
          password : password
        } 
      )
      response.data == 1 ? navigation.navigate('Main') : alert("login失敗");
    } catch(e){
        alert("login失敗!");
      console.log(e);
    }
  }
    
  return (
    <View style={styles.container}>
      <CustomText 
        style={"title"}
        text={"EMAIL"}
      />
      <TextInput 
        value={email}
        onChangeText={setEmail} 
        label="email" 
      />
      <CustomText 
        style={"title"}
        text={"PASSWORD"}/>
      <TextInput 
        onChangeText={setPassword} 
        label="password" 
      />
      <Button 
        type="long" 
        title="ログイン" 
        onPress={() => postSignIn(email, password)} 
      />
    </View>
  );
}
