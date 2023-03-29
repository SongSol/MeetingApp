import React from 'react';
import {View, StyleSheet } from 'react-native';
import Image from '@components/atoms/Image';
import  Button from '@components/atoms/Button'

export default function PictureUploadPage() {
    const title = "사진업로드";
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
      });


    return (
        <View style={styles.container}>
            <Image 
                style={styles.image}
                src={require('@assets/images/사토미.png')}
                type='Profile'
            />
            <Button 
                title={title} 
                type='Long'
            />
        </View>
    );
}