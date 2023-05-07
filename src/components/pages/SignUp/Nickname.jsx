import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Button from '@components/atoms/Button';
import TextInput from '@components/atoms/TextInput';
import AppContext from '@components/atoms/AppContext';
import axios from 'axios';

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

    const postSignUp = async () => {
      try { 
        const response = await axios.post(
          'https://gbp4u8anb3.execute-api.ap-northeast-1.amazonaws.com/User'
          , {
            what: "signup",
            email: myContext.email,
            password : myContext.password,
            nickname : myContext.nickname,
            phone : myContext.phone
          } 
        )
        alert(response.data); // 일단 그냥 ID어럴트로 보이게만해둠
        // response.data == 1 ? navigation.navigate('MainPage') : alert("login失敗");
      } catch(e){
          alert("login失敗");
        console.log(e);
      }
    }

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
            postSignUp()
            navigation.navigate('BirthDate')
          }} 
        />
      </View>
    </View>
  );
}
