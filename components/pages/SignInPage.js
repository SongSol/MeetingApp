import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import CustomText from '../atoms/CustomText';
import CustomTextInput from '../atoms/CustomTextInput';

export default function SignInPage({}) {
    const email = "EMAIL";
    const password = "PASSWORD";

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
  return (
    <View style={styles.container}>
        <CustomText title={email}/>
        <CustomTextInput placeholder={"emailを入力してください。"}/>
        <CustomText title={password}/>
        <CustomTextInput placeholder={"passwordを入力してください。"} />
        <Button
            title="ログイン"
            // onPress={() => navigation.navigate('SignInPage')}
            // onPress={() => navigation.push('Detail')}
        />
        
    </View>
  );
}
