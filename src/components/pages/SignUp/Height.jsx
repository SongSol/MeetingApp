import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import Button from '@components/atoms/Button';
import RadioButton from '@components/atoms/RadioButton';
import CustomText from '@components/atoms/CustomText';
import HeightData from '@assets/signUpDataList/HeightData';


export default function Height({navigation}) {
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
        <ProgressBar progress={0.4} style={styles.progress} color={MD3Colors.error50} />
        <View style={styles.container}>
          <CustomText text={"身長はいくつですか？"}/>
          <RadioButton items={HeightData()}/>
          <Button type="long" title="次へ" onPress={() => navigation.navigate('BodyType')} />
        </View>
      </View>
  );
}
