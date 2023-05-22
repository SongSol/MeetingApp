import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';

import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import TextInput from '@components/atoms/TextInput';

export default function Email({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      flexDirection: 'column',
    },
    topSection: {
      justifyContent: 'center',
      textAlign: 'left',
      flex: 0.2,
    },
    middleSection: {
      flex: 0.7,
    },
    bottomSection: {
      flex: 0.1,
      justifyContent: 'flex-end',
    },
  });

  const myContext = useContext(AppContext);
  const [email, setEmail] = useState(''); 
  useEffect(() => {
    // console.log(myContext);
  },[]);
    
  return (
    <View style={styles.container}>
      <View style={styles.topSection}>
        <CustomText 
          style={"title"}
          variant="headlineSmall" 
          text="本人確認のため" 
        />
        <CustomText 
          style={"title"}
          variant="headlineSmall" 
          text="Emailを入力してください。" 
        />
      </View>
      <View style={styles.middleSection}>
        <TextInput 
          value={email}
          onChangeText={setEmail}
          label="Email"
        />
      </View>
      <View style={styles.bottomSection}>
        <Button 
          title="次へ"
          type="long"
          onPress={() => {
            myContext.email = email;
            navigation.navigate('Password')
          }}
        />
      </View>
    </View>
  );
}
