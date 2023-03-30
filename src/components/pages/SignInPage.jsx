import React from 'react';
import CustomText from '@components/atoms/CustomText';
import CustomTextInput from '@components/atoms/CustomTextInput';
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
      <CustomText title={email}/>
      <CustomTextInput placeholder={"emailを入力してください。"}/>
      <CustomText title={password}/>
      <CustomTextInput placeholder={"passwordを入力してください。"} />
      <Button mode="text" onPress={() => navigation.navigate('JudgeLookPage')}>
        ログイン
      </Button>
        
    </View>
  );
}
