import React from 'react';
import {View, StyleSheet, Image, ScrollView } from 'react-native';
import CustomText from '@components/atoms/CustomText';
import { Divider } from 'react-native-paper';

export default function ProfileList({}) {
    const color = require('@assets/color.json');

    const styles = StyleSheet.create({
        container: {
            backgroundColor: color.light_gray,
            borderRadius: 10,
            flex: 1,
        },
        image: {
            width: 100,
            height: 100,
            borderRadius: 10
        },
        divider: {
            marginTop: 5,
            marginLeft: 10,
            marginRight: 10,
            width: 1,
            height: '90%'
        }
      });
    return (
        <ScrollView horizontal={true} style={styles.container} showsHorizontalScrollIndicator={false}>
            <Image defaultSource={require('@assets/images/김채원.png')} style={styles.image} />
            <Divider style={styles.divider}/>
            <Image defaultSource={require('@assets/images/사쿠라.png')} style={styles.image} />
            <Divider style={styles.divider}/>
            <Image defaultSource={require('@assets/images/사토미.png')} style={styles.image} />
            <Divider style={styles.divider}/>
            <Image defaultSource={require('@assets/images/카즈하.png')} style={styles.image} />
            <Divider style={styles.divider}/>
            <Image defaultSource={require('@assets/images/허윤진.png')} style={styles.image} />
        </ScrollView>
    );
}
