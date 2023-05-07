import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

const SelfLookScore = props =>  {
    const color = require('@assets/color.json');
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },

        text_score: {
            fontSize: 40
        },

        progress_bar: {
            borderRadius: 10,
            width: 100,
            height: 15,
        },
    });

    if (props.userScore !== undefined) {
        return (
            <View style={styles.container}>
                <Text>
                    현재 점수
                </Text>
                <Text style={styles.text_score}>
                    {props.userScore.avg.toFixed(2)}
                </Text>
                <ProgressBar style={styles.progress_bar} progress={(props.userScore.avg * 2) * 0.1} color={color.blue}/>
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text>
                    현재 점수
                </Text>
                <Text style={styles.text_score}>
                    0.0
                </Text>
                <ProgressBar style={styles.progress_bar} progress={0} color={color.blue}/>
            </View>
        );
    }
}

export default SelfLookScore;