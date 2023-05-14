import { useContext, useState } from 'react';
import {View, StyleSheet,} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import RadioButton from '@components/atoms/RadioButton';

export default function AnnualSalary({navigation}) {
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
    button: {
        width: 100,
        height: 50,
        margin: 10
    },
    progress: {
      height: 5,
      width:undefined,
      backgroundColor: '#eee',
    }
  });
  const SalaryType = Object.values(require('@assets/signUpDataList/SalaryType.json'));
  const [annualsalary, setAnnualsalary] = useState();
  const myContext = useContext(AppContext);

  return (
    <View style={{ flex: 1 }}>
      <ProgressBar progress={0.8} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <View style={styles.topSection}>
          <CustomText 
            style={"title"}
            variant="headlineSmall" 
            text="年収はどれぐらいですか" 
          />
        </View>
        <View style={styles.middleSection}>
          <RadioButton
            items={SalaryType}
            value={annualsalary}
            setValue={setAnnualsalary}
          />
        </View>
        <View style={styles.bottomSection}>
          <Button 
            type="long" 
            title="次へ" 
            onPress={() => {
              myContext.annualsalary = annualsalary;
              navigation.navigate('OffDay');
            }} 
          />
        </View>
      </View>
    </View>
  );
}
