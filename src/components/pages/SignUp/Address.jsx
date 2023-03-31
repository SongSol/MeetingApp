import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';
import { Button } from 'react-native-paper';

import CustomText from '@components/atoms/CustomText';
import AddressData from '@assets/signUpDataList/AddressData';


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

    const Item = ({title}) => (
      <View style={styles.item}>
          <Button mode="text" onPress={() => navigation.navigate('Job')}>
            {title}
          </Button>
      </View>
    );

    return (
    <View style={styles.container}>
      <CustomText text={"お住まいはどこですか"}/>
      
      <FlatList
      data={AddressData()}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      />
      <Button mode="text" onPress={() => navigation.navigate('Job')}>
        次へ
      </Button>
    </View>
  );
}
