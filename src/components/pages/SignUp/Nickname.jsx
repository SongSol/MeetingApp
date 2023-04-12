import React from 'react';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';
import TextInput from '@components/atoms/TextInput';

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
      <TextInput label="nickname" placeholder={"ニックネームを入力してください"}/>
      <Button type="long" title="次へ" onPress={() => navigation.navigate('BirthDate')} />
    </View>
  );
}
