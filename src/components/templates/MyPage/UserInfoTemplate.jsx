import React from 'react';
import {View, StyleSheet, Image } from 'react-native';
import CustomText from '@components/atoms/CustomText';

export default function MyPageUserInfo({}) {
    const color = require('@assets/color.json');

    const styles = StyleSheet.create({
        container: {
            backgroundColor: '#fff',
            flexDirection: 'row',
            textAlign: 'center',
            alignItems: 'center',
        },
        button: {
            width: 200,
            height: 50,
            margin: 10,
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 20
        },
        userName: {
            textAlign: 'center',
            alignItems: 'center',
            fontSize: 10,
        },
        modifyIcon: {
            width: 25,
            height: 25,
            right: 15,
            bottom: 10,
            backgroundColor: 'white'
        },
        imageView: {
            flexDirection: 'row',
        }
      });
    return (
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image defaultSource={require('@assets/images/차은우.png')} style={styles.image} />
                <Image defaultSource={require('@assets/images/icons/editing.png')} style={styles.modifyIcon} />
            </View>
            <CustomText 
                style={"title"}
                variant="headlineSmall" 
                text="홍길동"
            />
        </View>
    );
}
