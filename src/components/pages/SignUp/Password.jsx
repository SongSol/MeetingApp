import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import TextInput from '@components/atoms/TextInput';
import AppContext from '@components/atoms/AppContext';

export default function Password({navigation}) {

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  const myContext = useContext(AppContext);
  const [password, setPassword] = useState(''); 
  useEffect(() => {
    // console.log(myContext);
  },[]);
    
  return (
    <View style={styles.container}>
      <TextInput 
        value={password}
        onChangeText={setPassword}
        label="Password"
        placeholder="Passwordを入力してください"
      />
      <Button 
        mode="text" 
        onPress={() => {
          myContext.password = password;
          navigation.navigate('Gender')
        }}>
        次へ
      </Button>
    </View>
  );
}
