import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';

import TextInput from '@components/atoms/TextInput';
import CustomText from '@components/atoms/CustomText';
import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';


export default function Password({navigation}){
    const color = require('@assets/color.json');
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            flexDirection: 'column',
        },
        topView: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.2,
        },
        middleView: {
            flex: 0.7,
        },
        bottomView: {
            flex: 0.1,
            justifyContent: 'flex-end',
        },
    
    });
    const myContext = useContext(AppContext);
    const [password, setPassword] = useState(''); 
    const [nextButtonDisabled, setNextButtonDisabled] = useState(true);

    useEffect(() => {
        password ? setNextButtonDisabled(false) : setNextButtonDisabled(true);
    },[password]);
    
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
                <CustomText 
                    style={"title"}
                    variant="headlineSmall" 
                    text="パスワードを入力してください。" 
                />
            </View>
            <View style={styles.middleView}>
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    label="Password"
                />
            </View>
            <View style={styles.bottomView}>
                <Button
                    title="次へ" w='300' h='50' c={nextButtonDisabled ? color.light_gray : color.red}
                    disabled={nextButtonDisabled}
                    onPress={() => {
                        myContext.password = password;
                        navigation.navigate('Phone');
                    }}
                />
            </View>
        </View>
    );
}
