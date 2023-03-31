import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';
import { Button } from "react-native-paper";

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
        <Button mode="text" onPress={() => navigation.navigate('BodyType')}>
          {title}
        </Button>
      </View>
    );

    return (
      <View style={styles.container}>
        <CustomText text={"身長はいくつですか？"}/>
        
        <FlatList
        data={HeightData()}
        renderItem={({item}) => <Item title={item.title} />}
        keyExtractor={item => item.id}
        />
        <Button mode="text" onPress={() => navigation.navigate('BodyType')}>
          次へ
        </Button>
      </View>
  );
}
