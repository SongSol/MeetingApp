import React from 'react';
import CustomText from '@components/atoms/CustomText';
import JobList from '@assets/signUpDataList/JobList';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';
import RadioButton from '@components/atoms/RadioButton';

export default function Job({navigation}) {
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
      <RadioButton items={JobList()}/>
      <Button type="long" title="次へ" onPress={() => navigation.navigate('AnnualSalary')} />
    </View>
  );
}
