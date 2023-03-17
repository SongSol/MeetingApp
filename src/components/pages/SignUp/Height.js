import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';

import CustomText from '@components/atoms/CustomText';
import { Button } from "@react-native-material/core";


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
    const DATA = [
        { id: 150, title: '150cm',}, { id: 151, title: '151cm',}, { id: 152, title: '152cm',}, { id: 153, title: '153cm',}, { id: 154, title: '154cm',},
        { id: 155, title: '155cm',}, { id: 156, title: '156cm',}, { id: 157, title: '157cm',}, { id: 158, title: '158cm',}, { id: 159, title: '159cm',},
        { id: 160, title: '150cm',}, { id: 161, title: '151cm',}, { id: 163, title: '152cm',}, { id: 164, title: '150cm',}, { id: 165, title: '151cm',},
        { id: 166, title: '150cm',}, { id: 167, title: '151cm',}, { id: 168, title: '152cm',}, { id: 169, title: '150cm',}, { id: 170, title: '151cm',},
      ];
      const Item = ({title}) => (
        <View style={styles.item}>
            <Button title={title} variant="text"/>
        </View>
      );

    return (
    <View style={styles.container}>
        <CustomText title={"身長はいくつですか？"}/>
        
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        />
        <Button
            title="次へ"
            onPress={() => navigation.navigate('BodyType')}
            style={styles.button}
            variant="text"
            // onPress={() => navigation.push('Detail')}
        />
        
    </View>
  );
}
