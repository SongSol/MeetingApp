import { useContext, useEffect, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import RadioButton from '@components/atoms/RadioButton';

export default function OffDay({navigation}) {
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
      width: 300,
    },
    bottomView: {
      flex: 0.1,
      justifyContent: 'flex-end',
    },
    button: {
        width: 100,
        height: 50,
        margin: 10
    },
    progress: {
      height: 10,
      width:undefined,
      backgroundColor: '#eee',
    }
  });

  const OffDayType = Object.values(require('@assets/signUpDataList/OffDayType.json'));
  const [offday, setOffday] = useState();
  const myContext = useContext(AppContext);
  
  return (
    <View style={{ flex: 1 }}>
      <ProgressBar progress={0.9} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <View style={styles.topView}>
          <CustomText 
            style={"title"}
            variant="headlineSmall" 
            text="お休みはいつですか" 
          />
        </View>
        <View style={styles.middleView}>
          <RadioButton
            items={OffDayType}
            value={offday}
            setValue={setOffday}
          />
        </View>
        <View style={styles.bottomView}>
          <Button 
            type="long" 
            title="次へ" 
            onPress={() => {
              myContext.offday = offday;
              navigation.navigate('JudgeLookPage');
            }} 
          />
        </View>
      </View>
    </View>
  );
}
