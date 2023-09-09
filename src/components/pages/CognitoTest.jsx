import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import { Amplify, Auth } from 'aws-amplify';
import awsconfig from '@components/aws-exports';
Amplify.configure(awsconfig);

export default function CognitoTest({}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const signUp = async () => {
    try {
      await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
        },
      });
      console.log('회원가입 성공!');
    } catch (error) {
      console.log('회원가입 실패:', error);
    }
  };

  const signIn = async () => {
    try {
      await Auth.signIn({
        username,
        password
      });
      console.log('로그인 성공!');
    } catch (error) {
      console.log('로그인 실패:', error);
    }
  };

  const styles = StyleSheet.create({
    email: {
      height: 50,
    },
    password: {
      height: 50,
    },
  });

    return (
      <View>
        <TextInput
          placeholder="이메일"
          value={username}
          onChangeText={(text) => setUsername(text)}
          style={styles.email}
        />
        <TextInput
          placeholder="비밀번호"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.password}
        />
        <Button title="회원가입" onPress={signUp} />
        <Button title="로그인" onPress={signIn} />
     </View>

    );
}