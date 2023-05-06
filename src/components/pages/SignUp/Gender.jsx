import { useContext, useState } from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import Button from '@components/atoms/Button';
import RadioButton from '@components/atoms/RadioButton';
import AppContext from '@components/atoms/AppContext';

export default function Gender({navigation}) {
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
        },
        bottombar: {
          backgroundColor: '#eee',
        }
      });
    const genderList = ["男性", "女性"];
    const [gender, setGender] = useState();
    const myContext = useContext(AppContext);

  return (
    <View style={{ flex: 1 }}>
      <ProgressBar progress={0.1} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <RadioButton items={genderList} value={gender} setValue={setGender}/>
        <Button
          type="long"
          title="次へ" 
          onPress={() => {
            myContext.gender = gender;
            navigation.navigate('Nickname')}} />
      </View>
    </View>
  );
}
