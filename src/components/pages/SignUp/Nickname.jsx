import { useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import axios from 'axios';

import TextInput from '@components/atoms/TextInput';
import CustomText from '@components/atoms/CustomText';
import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';

export default function Nickname({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      flexDirection: 'column',
    },
    topView: {
      alignItems: 'center',
      justifyContent: 'center',
      flex: 0.2,
    },
    middleView: {
      flex: 0.7,
    },
    bottomView: {
      flex: 0.1,
      justifyContent: 'flex-end',
    },
    progress: {
      height: 10,
      width:undefined,
      backgroundColor: '#eee',
    },
    bottombar: {
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
      myContext.userid = response.data;
      // response.data == 1 ? navigation.navigate('MainPage') : alert("login失敗");
    } catch(e){
        alert("login失敗");
      console.log(e);
    }
  }
    
  return (
    <View style={{ flex: 1 }}>
      <ProgressBar progress={0.2} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <View style={styles.topView}>
          <CustomText 
            style={"title"}
            variant="headlineSmall" 
            text="ニックネームを入力してください。" 
          />
        </View>
        <View style={styles.middleView}>
          <TextInput
            value={nickname}
            onChangeText={setNickname}
            label="nickname"
          />
        </View>
        <View style={styles.bottomView}>
          <Button
            title="次へ"
            type="long"
            onPress={() => {
              myContext.nickname = nickname;
              postSignUp();
              navigation.navigate('BirthDate');
            }} 
          />
        </View>
      </View>
    </View>
  );
}
