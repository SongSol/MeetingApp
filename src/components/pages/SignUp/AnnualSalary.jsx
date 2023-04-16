import React from 'react';
import CustomText from '@components/atoms/CustomText';
import {View, StyleSheet,} from 'react-native';
import RadioButton from '@components/atoms/RadioButton';
import Button from '@components/atoms/Button';
import AnnualSalaryData from '@assets/signUpDataList/AnnualSalaryData';

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
        }
    });

    return (
      <View style={styles.container}>
        <CustomText text={"どんな仕事していますか"}/>
        
        <RadioButton items={AnnualSalaryData()}/>
        <Button type="long" title="次へ" onPress={() => navigation.navigate('OffDay')} />

      </View>
  );
}
