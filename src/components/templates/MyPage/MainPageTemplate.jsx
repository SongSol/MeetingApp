import React from 'react';
import {View, StyleSheet, Image } from 'react-native';
import CustomText from '@components/atoms/CustomText';

export default function UserInfo({}) {
    const color = require('@assets/color.json');

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            textAlign: 'center',
            alignItems: 'center',
        },
        firstContainer: {
            backgroundColor: color.light_gray,
            width: '100%',
            height: 80,
            borderRadius: 10,
            margin: 20
        },
        secondontainer: {
            backgroundColor: color.light_gray,
            width: '100%',
            height: 200,
            borderRadius: 10
        }
      });
    return (
        <View style={styles.container}>
            <View style={styles.firstContainer}>
                <CustomText 
                    style={"title"}
                    variant="headlineSmall" 
                    text="마이페이지1"
                />
            </View>
            <View style={styles.secondontainer}>
                <CustomText 
                    style={"title"}
                    variant="headlineSmall" 
                    text="마이페이지2"
                />
            </View>
        </View>
    );
}
