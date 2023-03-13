import React from 'react';
import {View, StyleSheet } from 'react-native';
import ProfilePicture from '@components/atoms/ProfilePicture.js';
import { Button } from '@react-native-material/core'

export default function JudgeLookPage({navigation}) {

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

      const members = { id: 1, src: require('@assets/images/김채원.png') }
    return (
        <View style={styles.container}>
            <ProfilePicture 
                style={styles.image}
                src={require('@assets/images/김채원.png')}
            />
            <Button 
                style={styles.score_btn}
                title='5点'
            />
            <Button 
                style={styles.score_btn}
                title='4点'
            />
            <Button 
                style={styles.score_btn}
                title='3点'
            />
            <Button 
                style={styles.score_btn}
                title='2点'
            />
            <Button 
                style={styles.score_btn}
                title='1点'
            />
        </View>
    );
}
0