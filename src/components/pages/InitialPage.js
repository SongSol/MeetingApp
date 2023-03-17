import React from 'react';
import {View, StyleSheet } from 'react-native';
import { Button } from '@react-native-material/core'
export default function InitialPage({navigation}) {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        button: {
            width: 200,
            height: 50,
            margin: 10,
        }
      });
    return (
        <View style={styles.container}>
            <Button
                title="ログイン"
                onPress={() => navigation.navigate('SignInPage')}
                style={styles.button}
            />
            <Button
                title="会員登録"
                onPress={() => navigation.navigate('Gender')}
                style={styles.button}
                // onPress={() => navigation.push('Detail')}
            />
            
        </View>
    );
}
