import React from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import CustomTextInput from '@components/atoms/CustomTextInput';

export default function Email({navigation}) {
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
      <CustomTextInput label="Email" placeholder={"Emailを入力してください"}/>
      <Button mode="text" onPress={() => navigation.navigate('Gender')}>
        次へ
      </Button>
    </View>
  );
}
