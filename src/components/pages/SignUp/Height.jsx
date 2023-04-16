import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';

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
        }
    });

    return (
      <View style={styles.container}>
        <CustomText text={"身長はいくつですか？"}/>
        <RadioButton items={HeightData()}/>
        <Button type="long" title="次へ" onPress={() => navigation.navigate('BodyType')} />
      </View>
  );
}
