import { useContext, useState } from 'react';
import CustomText from '@components/atoms/CustomText';
import {View, StyleSheet,} from 'react-native';
import RadioButton from '@components/atoms/RadioButton';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import Button from '@components/atoms/Button';
import AppContext from '@components/atoms/AppContext';
import AnnualSalaryData from '@assets/SignUpDataList/AnnualSalaryData';

export default function AnnualSalary({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
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

    const [annualsalary, setAnnualsalary] = useState();
    const myContext = useContext(AppContext);

    return (
      <View style={{ flex: 1 }}>
        <ProgressBar progress={0.8} style={styles.progress} color={MD3Colors.error50} />
        <View style={styles.container}>
          <CustomText text="年収はどれぐらいですか" />
          <RadioButton
            items={AnnualSalaryData()}
            value={annualsalary}
            setValue={setAnnualsalary}
          />
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
  );
}
