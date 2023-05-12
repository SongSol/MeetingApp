import { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import RadioButton from '@components/atoms/RadioButton';

export default function Gender({navigation}) {
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
      flex: 0.2,
      justifyContent: 'left',
      alignItems: 'left',
      textAlign: 'left',
    },
    bottomSection: {
      flex: 0.6,
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
  const genderList = ["男性", "女性"];
  const [gender, setGender] = useState();
  const myContext = useContext(AppContext);

  return (
    <View style={{ flex: 1 }}>
      <ProgressBar progress={0.1} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <CustomText 
            style={"title"}
            variant="headlineSmall" 
            text="性別を選んでください。" 
          />
        </View>
        <View style={styles.middleSection}>
          <RadioButton items={genderList} value={gender} setValue={setGender}/>
        </View>
        <View style={styles.bottomSection}>
          <Button
            type="long"
            title="次へ" 
            onPress={() => {
              myContext.gender = gender;
              // navigation.navigate('JudgeLookPage')}} 
              navigation.navigate('JudgeLookPage')}} 
          />
        </View> 
      </View>
    </View>
  );
}
