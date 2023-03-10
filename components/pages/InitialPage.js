import React from 'react';
import {View, Button, StyleSheet } from 'react-native';

export default function InitialPage({navigation}) {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    return (
        <View style={styles.container}>
            <Button
                title="ログイン"
                onPress={() => navigation.navigate('SignInPage')}
                // onPress={() => navigation.push('Detail')}
            />
            <Button
                title="会員登録"
                onPress={() => navigation.navigate('SignUpPage')}
                // onPress={() => navigation.push('Detail')}
            />
            
        </View>
    );
}
