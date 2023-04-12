import React from 'react';
import { View, StyleSheet } from 'react-native';

import Button from '@components/atoms/Button';
import TextInput from '@components/atoms/TextInput';


export default function BirthDate({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
    });
    const bod = "生年月日";
    return (
    <View style={styles.container}>
      <TextInput label={bod} placeholder={"生年月日を入力してください"}/>
      <Button type="long" title="次へ" onPress={() => navigation.navigate('Height')} />
    </View>
  );
}
