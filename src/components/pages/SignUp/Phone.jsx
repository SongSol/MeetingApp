import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import TextInput from '@components/atoms/TextInput';

export default function Phone({navigation}) {
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
      <TextInput label="PhoneNumber" placeholder={"電話番後を入力してください"}/>
      <Button mode="text" onPress={() => navigation.navigate('Email')}>
        次へ
      </Button>
    </View>
  );
}
