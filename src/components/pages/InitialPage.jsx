import React from 'react';
import {View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

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
            <Button mode="text" onPress={() => navigation.navigate('SignInPage')}>
                ログイン
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('Phone')}>
                会員登録
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('PictureUploadPage')}>
                写真Upload
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('Judgefail')}>
                심사탈락
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('TagSelect')}>
                테그선택
            </Button>
        </View>
    );
}
