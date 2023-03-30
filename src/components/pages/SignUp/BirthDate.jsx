import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

import CustomText from '@components/atoms/CustomText';
import CustomTextInput from '@components/atoms/CustomTextInput';


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
      <CustomText title={bod}/>
      <CustomTextInput placeholder={"生年月日を入力してください"}/>
      <Button mode="text" onPress={() => navigation.navigate('Height')}>
      次へ
      </Button>
        
    </View>
  );
}
