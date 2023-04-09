import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import Image from '@components/atoms/Image';
import BarChartView from '@components/templates/BarChart';
import SelfLookScore from '@components/templates/SelfLookScore';
import { Divider } from 'react-native-paper';

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
            flex: 2
        },

        score_container: {
            flexDirection: 'row',
            margin: 15
        },

        text_judge_user: {
            fontWeight: 800,
            fontSize: 20
        },

        divider: {
            width: 1, height: '100%'
        }
    });

    const user = { id: 1, src: require('@assets/images/차은우.png') };

    return (
        <View style={styles.container}>
            <Image 
                type='Profile'
                src={user.src}
            />
            <View style={styles.score_container}>
                <SelfLookScore />
                <Divider 
                    style={styles.divider}
                    horizontalInset={true}
                    bold={true}
                />
                <BarChartView 
                    style={styles.bar_chart}
                />
            </View>
            <Text style={styles.text_judge_user}>・56명이 심사에 참여하였습니다.</Text>
        </View>
    );
}