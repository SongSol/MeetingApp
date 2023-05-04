import React, { useState } from 'react';
import CustomText from '@components/atoms/CustomText';
import TextInput from '@components/atoms/TextInput';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';
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
      },
      button: {
        width: 200,
        height: 50,
        margin: 20,
      }
  });
  
  const getSignIn = async (email, password) => {
    try {
      const response = await axios.get(
        'https://4ay6bv8m9k.execute-api.ap-northeast-1.amazonaws.com/getSignIn'
        , {
          params: {
            "id": email,
            "password": password
          }
        } 
      )
      console.log(response.data);
      console.log("API게이트웨이까지 연결확인!");
    } catch(e){
      console.log(e);
    }
  }
    
  return (
    <View style={styles.container}>
      <CustomText text={"EMAIL"}/>
      <TextInput onChangeText={email => setEmail(email)} label="email" placeholder={"emailを入力してください。" }/>
      <CustomText text={"PASSWORD"}/>
      <TextInput onChangeText={password => setPassword(password)} label="password" placeholder={"passwordを入力してください。"} />
      <Button type="long" title="ログイン" onPress={() => getSignIn(email, password)} />
    </View>
  );
}
