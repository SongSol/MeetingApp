import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';
import { Button } from "@react-native-material/core";

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

    const Item = ({title}) => (
      <View style={styles.item}>
          <Button title={title} variant="text"/>
      </View>
    );

    return (
      <View style={styles.container}>
        <CustomText title={"身長はいくつですか？"}/>
        
        <FlatList
        data={HeightData()}
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
