import React from 'react';
import {View, StyleSheet, Text } from 'react-native';

const SelfLookScore = props =>  {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },

        text_score: {
            fontSize: 40
        }
    });

    return (
        <View style={styles.container}>
            <Text>
                현재 점수
            </Text>
            <Text style={styles.text_score}>
                4.63
            </Text>
        </View>
    );
}

export default SelfLookScore;