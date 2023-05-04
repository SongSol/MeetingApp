import React from 'react';
import CustomText from '@components/atoms/CustomText';
import OffDayData from '@assets/signUpDataList/OffDayData';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';
import RadioButton from '@components/atoms/RadioButton';
export default function OffDay({navigation}) {
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
        <Button mode="text" onPress={() => navigation.navigate('JudgeLookPage')}>
          {title}
        </Button>
      </View>
    );

    return (
    <View style={styles.container}>
      <CustomText text={"お休みはいつですか"}/>

      <RadioButton items={OffDayData()}/>
      <Button type="long" title="次へ" onPress={() => alert("end!")} />
    </View>
  );
}
