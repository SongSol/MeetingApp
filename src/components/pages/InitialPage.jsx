import * as React from 'react';
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
            <Button mode="text" onPress={() => navigation.navigate('Email')}>
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
            <Button mode="text" onPress={() => navigation.navigate('JudgeLookPage')}>
                심사페이지
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('JudgeSelfLook')}>
                자기얼굴평가
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('BottomNavigation')}>
                    푸터
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('SocialList')}>
                소셜리스트
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('ChatMain')}>
                채팅메인
            </Button>
        </View>
    );
}
