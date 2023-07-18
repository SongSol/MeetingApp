import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';

import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import TextInput from '@components/atoms/TextInput';

export default function Phone({navigation}) {
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
  const [phone, setPhone] = useState(''); 
  useEffect(() => {
    // console.log(myContext);
  },[])

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
          text="携帯番号を入力してください。" 
        />
      </View>
      <View style={styles.middleView}>
        <TextInput 
          value={phone}
          onChangeText={setPhone}
          label="PhoneNumber"
        />
      </View>
      <View style={styles.bottomView}>
        <Button 
          title="次へ"
          type="long"
          onPress={() => {
            myContext.phone = phone;
            navigation.navigate('Nickname');
          }}
        />
      </View>
    </View>
  );
}
