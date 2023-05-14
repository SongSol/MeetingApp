import React from 'react';
import {View, StyleSheet } from 'react-native';
import CustomText from '@components/atoms/CustomText';

export default function Main({}) {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        button: {
            width: 200,
            height: 50,
            margin: 10,
        }
      });
    return (
        <View style={styles.container}>
            <CustomText text={"MAIN!"}/>
        </View>
    );
}
