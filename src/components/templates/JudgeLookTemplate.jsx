import React from 'react';
import {View, StyleSheet } from 'react-native';
import Image from '@components/atoms/Image';
import Button from '@components/atoms/Button';

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