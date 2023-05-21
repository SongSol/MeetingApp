import { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import TextInput from '@components/atoms/TextInput';
import CustomText from '@components/atoms/CustomText';
import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';

export default function BirthDate({navigation}) {
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
  const [birthdate, setBirthdate] = useState(''); 

  return (
    <View style={{ flex: 1 }}>
      <ProgressBar progress={0.3} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <View style={styles.topView}>
          <CustomText 
            style={"title"}
            variant="headlineSmall" 
            text="生年月日を入力してください。" 
          />
          <CustomText 
            style={"title"}
            variant="headlineSmall" 
            text="例)19970601" 
          />
        </View>
        <View style={styles.middleView}>
        <TextInput
          value={birthdate}
          onChangeText={setBirthdate}
          label="生年月日"/>
        </View>
        <View style={styles.bottomView}>
        <Button
          type="long" 
          title="次へ" 
          onPress={() => {
            myContext.birthdate = birthdate;
            navigation.navigate('Gender');
            }} 
        />
        </View>
        
        
      </View>
    </View>
  );
}
