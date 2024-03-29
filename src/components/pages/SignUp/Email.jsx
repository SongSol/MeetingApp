import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';

import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import TextInput from '@components/atoms/TextInput';

export default function Email({navigation}) {
  const color = require('@assets/color.json');
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
      justifyContent: 'center',
      textAlign: 'left',
      flex: 0.2,
    },
    middleView: {
      flex: 0.7,
    },
    bottomView: {
      flex: 0.1,
      justifyContent: 'flex-end',
    },
  });

  const myContext = useContext(AppContext);
  const [email, setEmail] = useState(''); 
  const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

  useEffect(() => {
    email ? setNextButtonDisabled(false) : setNextButtonDisabled(true);
  },[email]);
    
  return (
    <View style={styles.container}>
      <View style={styles.topView}>
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
      <View style={styles.middleView}>
        <TextInput 
          value={email}
          onChangeText={setEmail}
          label="Email"
        />
      </View>
      <View style={styles.bottomView}>
        <Button 
          title="次へ" w='300' h='50' c={nextButtonDisabled ? color.light_gray : color.red}
          disabled={nextButtonDisabled}
          onPress={() => {
            myContext.email = email;
            navigation.navigate('Password')
          }}
        />
      </View>
    </View>
  );
}
