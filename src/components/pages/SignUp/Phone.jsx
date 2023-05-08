import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import TextInput from '@components/atoms/TextInput';
import AppContext from '@components/atoms/AppContext';

export default function Phone({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    const myContext = useContext(AppContext);
    const [phone, setPhone] = useState(''); 
    useEffect(() => {
      // console.log(myContext);
    },[])
  return (
    <View style={styles.container}>
      <TextInput 
        value={phone}
        onChangeText={setPhone}
        label="PhoneNumber"
        placeholder="電話番後を入力してください"
      />
      <Button 
        mode="text"
        onPress={() => {
          myContext.phone = phone;
          navigation.navigate('Email');
        }}>
        次へ
      </Button>
    </View>
  );
}
