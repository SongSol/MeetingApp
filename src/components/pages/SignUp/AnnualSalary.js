import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';

import CustomText from '@components/atoms/CustomText';
import { Button } from "@react-native-material/core";


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
    const DATA = [
        { id: 1, title: '200万未満',}, { id: 2, title: '200万以上 ~ 400万未満',},
        { id: 3, title: '400万以上 ~ 600万未満',}, { id: 4, title: '600万以上 ~ 800万未満',},
        { id: 5, title: '800万以上 ~ 1000万未満',}, { id: 6, title: '1000万以上 ~ 1500万未満',},
        { id: 7, title: '1500万以上 ~ 2000万未満',}, { id: 8, title: '2000万以上 ~ 3000万未満',},
       
      ];
      const Item = ({title}) => (
        <View style={styles.item}>
            <Button title={title} variant="text"/>
        </View>
      );

    return (
    <View style={styles.container}>
        <CustomText title={"どんな仕事していますか"}/>
        
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        />
        <Button
            title="次へ"
            onPress={() => navigation.navigate('OffDay')}
            style={styles.button}
            variant="text"
            // onPress={() => navigation.push('Detail')}
        />
        
    </View>
  );
}
