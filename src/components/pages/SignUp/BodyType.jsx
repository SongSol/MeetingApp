import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';

import CustomText from '@components/atoms/CustomText';
import { Button } from "@react-native-material/core";

import BodyTypeData from '@assets/signUpDataList/BodyTypeData';


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
          <Button title={title} variant="text"/>
      </View>
    );

    return (
    <View style={styles.container}>
      <CustomText title={"どんな体型ですか"}/>
      <FlatList
      data={BodyTypeData()}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      />
      <Button
          title="次へ"
          onPress={() => navigation.navigate('Address')}
          style={styles.button}
          variant="text"
          // onPress={() => navigation.push('Detail')}
      />
    </View>
  );
}
