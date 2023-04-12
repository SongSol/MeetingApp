import React from 'react';
import CustomText from '@components/atoms/CustomText';
import TextInput from '@components/atoms/TextInput';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

export default function SignInPage({navigation}) {
    const email = "EMAIL";
    const password = "PASSWORD";

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

  return (
    <View style={styles.container}>
      <CustomText text={email}/>
      <TextInput label="email" placeholder={"emailを入力してください。"}/>
      <CustomText text={password}/>
      <TextInput label="password" placeholder={"passwordを入力してください。"} />
      <Button mode="text" onPress={() => navigation.navigate('JudgeLookPage')}>
        ログイン
      </Button>
        
    </View>
  );
}
