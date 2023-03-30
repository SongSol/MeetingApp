import React from 'react';
import CustomText from '@components/atoms/CustomText';
import BodyTypeData from '@assets/signUpDataList/BodyTypeData';
import {View, StyleSheet, FlatList,} from 'react-native';
import { Button } from "react-native-paper";

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
      <CustomText title={"どんな体型ですか"}/>
      <FlatList
      data={BodyTypeData()}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={item => item.id}
      />
      <Button mode="text" onPress={() => navigation.navigate('Address')}>
        次へ
      </Button>
    </View>
  );
}
