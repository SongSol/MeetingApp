import { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Button from '@components/atoms/Button';
import TextInput from '@components/atoms/TextInput';
import AppContext from '@components/atoms/AppContext';

export default function BirthDate({navigation}) {
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
    const [birthdate, setBirthdate] = useState(''); 

    return (
      <View style={{ flex: 1 }}>
        <ProgressBar progress={0.3} style={styles.progress} color={MD3Colors.error50} />
        <View style={styles.container}>
          <TextInput
            value={birthdate}
            onChangeText={setBirthdate}
            label="生年月日"
            placeholder="生年月日を入力してください"/>
          <Button
            type="long" 
            title="次へ" 
            onPress={() => {
              myContext.birthdate = birthdate;
              navigation.navigate('Height')
              }} 
          />
        </View>
      </View>
  );
}
