import React from 'react';
import CustomText from '@components/atoms/CustomText';
import OffDayData from '@assets/signUpDataList/OffDayData';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';
import { ProgressBar, MD3Colors } from 'react-native-paper';
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
        },
        progress: {
          height: 10,
          width:undefined,
          backgroundColor: '#eee',
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
      <View style={{ flex: 1 }}>
        <ProgressBar progress={0.9} style={styles.progress} color={MD3Colors.error50} />
        <View style={styles.container}>
          <CustomText text={"お休みはいつですか"}/>
          <RadioButton items={OffDayData()}/>
          <Button type="long" title="次へ" onPress={() => alert("end!")} />
        </View>
      </View>
  );
}
