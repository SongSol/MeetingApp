import * as React from 'react';
import {View, StyleSheet } from 'react-native';
import { Button, BottomNavigation } from 'react-native-paper';

import SignInPage from './SignInPage';
import TagSelect from './TagSelect';
import PictureUploadPage from './PictureUploadPage';
import Judgefail from './Judgefail';


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
        },
        bottombar: {
            backgroundColor: '#eee',
        }
      });

    const [index, setIndex] = React.useState(0); 

    const [routes] = React.useState([
        {key: 'SignInPage', title: 'ログイン' ,icon: 'queue-music', color: '#000000'},
        {key: 'TagSelect', title: 'カテゴリ', icon: 'album', color: '#009688'},
        {key: 'Email', title: '写真', icon: 'history'},
        {key: 'Nickname', title:'審査', icon: 'shopping-cart'},
    ])

    const renderScene = BottomNavigation.SceneMap({
        SignInPage: SignInPage,
        TagSelect: TagSelect,
        Email: PictureUploadPage,
        Nickname: Judgefail
    })

    return (
        <View style={styles.container}>
            <Button mode="text" onPress={() => navigation.navigate('SignInPage')}>
                ログイン
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('Phone')}>
                会員登録
            </Button>
            <Button mode="text" onPress={() => navigation.navigate('PictureUploadPage')}>
                写真アップロード
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
        </View>
    );
}
