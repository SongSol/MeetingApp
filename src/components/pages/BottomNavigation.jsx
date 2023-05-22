import * as React from 'react';
import { View } from 'react-native';
import { BottomNavigation, Button } from 'react-native-paper';

import SignInPage from './SignInPage';
import TagSelect from './TagSelect';
import ChatMain from './ChatMain';
import Judgefail from './Judgefail';
import JudgeSelfLook from './JudgeSelfLook';


export default function InitialPage({navigation}) {

    const [index, setIndex] = React.useState(0);  

    const [routes] = React.useState([
        {key: 'SignInPage', title: 'ホーム', focusedIcon: 'home', unfocusedIcon: 'home-outline',},
        {key: 'TagSelect', title: 'いいね', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
        {key: 'Email', title: 'チャット', focusedIcon: 'comment-processing', unfocusedIcon: 'comment-processing-outline'},
        {key: 'Nickname', title:'ソーシャル', focusedIcon: 'checkbox-multiple-blank', unfocusedIcon: 'checkbox-multiple-blank-outline'},
        {key: 'JudgeSelfLook', title:'マイページ', focusedIcon: 'account-check', unfocusedIcon: 'account-check-outline'},
    ])

    const renderScene = BottomNavigation.SceneMap({
        SignInPage: SignInPage,
        TagSelect: TagSelect,
        Email: ChatMain,
        Nickname: Judgefail,
        JudgeSelfLook: JudgeSelfLook
    })

    return (
        <View style={{ flex: 1 }}>
            <BottomNavigation theme={{colors: {secondaryContainer: 'transparent'}}} barStyle={{ height: 70, justifyContent: 'center', backgroundColor: "#eee"}} activeColor="#000000" navigationState={{index, routes}} onIndexChange={setIndex} renderScene={renderScene}/>
        </View>
    );
}