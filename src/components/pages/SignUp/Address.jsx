import React from 'react';
import {View, StyleSheet} from 'react-native';

import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import AddressData from '@assets/signUpDataList/AddressData';
import RadioButton from '@components/atoms/RadioButton';

export default function Address({navigation}) {
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
      <CustomText text={"お住まいはどこですか"}/>
      <RadioButton items={AddressData()}/>
      <Button type="long" title="次へ" onPress={() => navigation.navigate('Job')} />
    </View>
  );
}
