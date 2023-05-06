import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Button from '@components/atoms/Button';
import TextInput from '@components/atoms/TextInput';
import AppContext from '@components/atoms/AppContext';

export default function Nickname({navigation}) {
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
    const myContext = useContext(AppContext);
    const [nickname, setNickname] = useState(''); 
    useEffect(() => {
      console.log(myContext);
    },[]);
    
  return (
    <View style={{ flex: 1 }}>
      <ProgressBar progress={0.2} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <TextInput
          value={nickname}
          onChangeText={setNickname}
          label="nickname"
          placeholder="ニックネームを入力してください"
        />
        <Button
          type="long"
          title="次へ" 
          onPress={() => {
            myContext.nickname = nickname;
            navigation.navigate('BirthDate')
          }} 
        />
      </View>
    </View>
  );
}
