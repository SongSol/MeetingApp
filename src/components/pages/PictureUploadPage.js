import React from 'react';
import {View, StyleSheet } from 'react-native';
import Image from '@components/atoms/Image.js';
import { Button } from '@react-native-material/core'

export default function PictureUploadPage({navigation}) {

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

      const members = { id: 1, src: require('@assets/images/사토미.png') }
    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                src={require('@assets/images/사토미.png')}
                type='Profile'
            />
            <Button 
                style={styles.score_btn}
                title='사진업로드'
            />
        </View>
    );
}