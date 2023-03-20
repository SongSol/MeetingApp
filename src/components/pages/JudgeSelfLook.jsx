import React from 'react';
import {View, StyleSheet } from 'react-native';
import Image from '@components/atoms/Image';
import BarChartView from '@components/templates/BarChart';

export default function JudgeSelfLook({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },

        image: {
            width: 300,
            height: 300,
            borderRadius: 20,
        },

        bar_chart: {
            width: 300
        }
    });

    const user = { id: 1, src: require('@assets/images/차은우.png') };

    return (
        <View style={styles.container}>
            <Image 
                type='Profile'
                src={user.src}
            />
            <BarChartView 
                style={styles.bar_chart}
            />
        </View>
    );
}