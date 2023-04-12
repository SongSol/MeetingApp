import React from 'react';

import { View, StyleSheet, Text } from 'react-native';

import Button from '@components/atoms/Button';
import RadioButton from '@components/atoms/RadioButton';

export default function Gender({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    const genderList = ["男性", "女性"];
  return (
    <View style={styles.container}>
      <RadioButton items={genderList}/>
      <Button type="long" title="次へ" onPress={() => navigation.navigate('Nickname')} />
    </View>
  );
}
