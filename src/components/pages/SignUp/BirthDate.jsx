import React from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
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
        progress: {
          height: 10,
          width:undefined,
          backgroundColor: '#eee',
        }
    });
    const bod = "生年月日";
    return (
      <View style={{ flex: 1 }}>
        <ProgressBar progress={0.3} style={styles.progress} color={MD3Colors.error50} />
        <View style={styles.container}>
          <TextInput label={bod} placeholder={"生年月日を入力してください"}/>
          <Button type="long" title="次へ" onPress={() => navigation.navigate('Height')} />
        </View>
      </View>
  );
}
