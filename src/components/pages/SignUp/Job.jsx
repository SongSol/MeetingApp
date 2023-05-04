import React from 'react';
import CustomText from '@components/atoms/CustomText';
// import color from '@assets/color.json';
import JobList from '@assets/signUpDataList/JobList';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';
// import Button from '@components/atoms/Button';
import RadioButton from '@components/atoms/RadioButton';
import { ProgressBar, MD3Colors } from 'react-native-paper';

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
        },
        progress: {
          height: 10,
          width:undefined,
          backgroundColor: '#eee',
        }
    });
    return (
      <View style={{ flex: 1 }}>
        <ProgressBar progress={0.7} style={styles.progress} color={MD3Colors.error50} />
        <View style={styles.container}>
          <CustomText text={"どんな仕事していますか"}/>
          <RadioButton items={JobList()}/>
          <Button type="long" title="次へ" onPress={() => navigation.navigate('AnnualSalary')} />
        </View>
      </View>
  );
}
