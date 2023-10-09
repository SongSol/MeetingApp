import React from 'react';
import {View, StyleSheet, Image } from 'react-native';
import CustomText from '@components/atoms/CustomText';
import ProfileList from '@components/organisms/mypage/ProfileList'

export default function UserInfo({}) {
    const color = require('@assets/color.json');

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            textAlign: 'center',
            alignItems: 'center',
        },
        firstContainer: {
            width: '100%',
            height: 100,
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
                <ProfileList/>
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
