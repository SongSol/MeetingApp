import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import CheckBox from '@components/atoms/CheckBox';

export default function Gender({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    const genderList = ['男性', '女性'];
  return (
    <View style={styles.container}>
      
      <Button mode="text" onPress={() => navigation.navigate('Nickname')}>
        男性
      </Button>
      <Button mode="text" onPress={() => navigation.navigate('Nickname')}>
        女性
      </Button>
      <CheckBox/>
      
   
    </View>
  );
}
