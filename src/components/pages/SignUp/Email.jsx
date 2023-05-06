import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';
import TextInput from '@components/atoms/TextInput';
import AppContext from '@components/atoms/AppContext';

export default function Email({navigation}) {

  const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    });
  const myContext = useContext(AppContext);
  const [email, setEmail] = useState(''); 
  useEffect(() => {
    // console.log(myContext);
  },[]);
    
  return (
    <View style={styles.container}>
      <TextInput 
        value={email}
        onChangeText={setEmail}
        label="Email"
        placeholder="Emailを入力してください"
      />
      <Button 
        mode="text" 
        onPress={() => {
          myContext.email = email;
          navigation.navigate('Gender')
        }}>
        次へ
      </Button>
    </View>
  );
}
