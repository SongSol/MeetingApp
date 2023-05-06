import React, { useState } from 'react';

import CustomText from '@components/atoms/CustomText';
import TextInput from '@components/atoms/TextInput';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';
// import Button from 'react-native-paper';
import axios from 'axios';

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
  
  const getSignIn = async (email, password) => {
    try { 
      const response = await axios.post(
        'https://gbp4u8anb3.execute-api.ap-northeast-1.amazonaws.com/User'
        , {
          email: email,
          password : password
        } 
      )
      response.data == 1 ? navigation.navigate('MainPage') : alert("login失敗");
    } catch(e){
        alert("login失敗");
      console.log(e);
    }
  }
    
  return (
    <View style={styles.container}>
      <CustomText text={"EMAIL"}/>
      <TextInput 
        value={email}
        onChangeText={setEmail} 
        label="email" 
        placeholder="emailを入力してください。"
      />
      <CustomText text={"PASSWORD"}/>
      <TextInput 
        onChangeText={setPassword} 
        label="password" 
        placeholder="passwordを入力してください。" 
      />
      <Button type="long" title="ログイン" onPress={() => getSignIn(email, password)} />
    </View>
  );
}
