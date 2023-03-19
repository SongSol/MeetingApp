import React from 'react';
import {View, StyleSheet, Text } from 'react-native';
import Image from '@components/atoms/Image.js';
import { Button } from '@react-native-material/core'

const JudgeLookTemplate = props =>  {
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

        score_btn: {
            width: 100,
            height: 50,
            margin: 10
        }
    });

    return (
        <View style={styles.container}>
            <Image 
                type='Profile'
                src={props.src}
            />
            <Button 
                style={styles.score_btn}
                onPress={props.onPress}
                title='5点'
            />
            <Button 
                style={styles.score_btn}
                onPress={props.onPress}
                title='4点'
            />
            <Button 
                style={styles.score_btn}
                onPress={props.onPress}
                title='3点'
            />
            <Button 
                style={styles.score_btn}
                onPress={props.onPress}
                title='2点'
            />
            <Button 
                style={styles.score_btn}
                onPress={props.onPress}
                title='1点'
            />
        </View>
    );
}

export default JudgeLookTemplate;