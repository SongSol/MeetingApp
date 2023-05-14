import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';

import SignInPage from './SignInPage';
import TagSelect from './TagSelect';
import PictureUploadPage from './PictureUploadPage';
import Judgefail from './Judgefail';


export default function InitialPage({navigation}) {

    const [index, setIndex] = React.useState(0);  

    const [routes] = React.useState([
        {key: 'SignInPage', title: 'ログイン', focusedIcon: 'account-check', unfocusedIcon: 'account'},
        {key: 'TagSelect', title: 'カテゴリ', focusedIcon: 'checkbook', unfocusedIcon: 'checkbook'},
        {key: 'Email', title: '写真', focusedIcon: 'camera', unfocusedIcon: 'camera'},
        {key: 'Nickname', title:'審査', focusedIcon: 'trophy', unfocusedIcon: 'trophy-outline'},
    ])

    const renderScene = BottomNavigation.SceneMap({
        SignInPage: SignInPage,
        TagSelect: TagSelect,
        Email: PictureUploadPage,
        Nickname: Judgefail
    })

    return (
        <View style={{ flex: 1 }}>
            <BottomNavigation barStyle={{ height: 70, justifyContent: 'center',}} activeColor="#6200ee" navigationState={{index, routes}} onIndexChange={setIndex} renderScene={renderScene}/>
        </View>
    );
}