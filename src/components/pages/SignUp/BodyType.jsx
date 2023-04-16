import React from 'react';
import RadioButton from '@components/atoms/RadioButton';
import CustomText from '@components/atoms/CustomText';
import BodyTypeData from '@assets/signUpDataList/BodyTypeData';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';

export default function Weight({navigation}) {
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
    
    const Item = ({title}) => (
      <View style={styles.item}>
        <Button mode="text" onPress={() => navigation.navigate('Address')}>
          {title}
        </Button>
      </View>
    );

    return (
    <View style={styles.container}>
      <CustomText text={"どんな体型ですか"}/>
      <RadioButton items={BodyTypeData()}/>
      <Button type="long" title="次へ" onPress={() => navigation.navigate('Address')} />
    </View>
  );
}
