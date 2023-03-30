import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import CustomTextInput from '@components/atoms/CustomTextInput';

export default function Nickname({navigation}) {
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
      <CustomTextInput label="nickname" placeholder={"ニックネームを入力してください"}/>
      <Button mode="text" onPress={() => navigation.navigate('BirthDate')}>
        次へ
      </Button>
    </View>
  );
}
