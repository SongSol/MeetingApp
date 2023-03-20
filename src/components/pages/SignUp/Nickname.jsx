import React from 'react';
import {View, StyleSheet, Button} from 'react-native';
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
        <CustomTextInput placeholder={"ニックネームを入力してください"}/>
        <Button
            title="次へ"
            onPress={() => navigation.navigate('BirthDate')}
            // onPress={() => navigation.push('Detail')}
        />
        
    </View>
  );
}
