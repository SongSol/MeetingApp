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
    progress: {
      height: 5,
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
      <ProgressBar progress={0.2} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <View style={styles.topSection}>
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
        <View style={styles.middleSection}>
        <TextInput
          value={birthdate}
          onChangeText={setBirthdate}
          label="生年月日"/>
        </View>
        <View style={styles.bottomSection}>
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
