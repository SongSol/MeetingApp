import React from 'react';
import {View, StyleSheet, FlatList,} from 'react-native';
import { Button } from "@react-native-material/core";

import CustomText from '@components/atoms/CustomText';
import JobList from '@assets/signUpDataList/JobList';

export default function Job({navigation}) {
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
      <CustomText title={"どんな仕事していますか"}/>
      <FlatList
      data={JobList()}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      />
      <Button
          title="次へ"
          onPress={() => navigation.navigate('AnnualSalary')}
          style={styles.button}
          variant="text"
          // onPress={() => navigation.push('Detail')}
      />
    </View>
  );
}
