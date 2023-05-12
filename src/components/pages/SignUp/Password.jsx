import { useEffect, useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';

import TextInput from '@components/atoms/TextInput';
import CustomText from '@components/atoms/CustomText';
import AppContext from '@components/atoms/AppContext';
import Button from '@components/atoms/Button';


export default function Password({navigation}){
    
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 20,
            flexDirection: 'column',
        },
        topSection: {
            alignItems: 'center',
            justifyContent: 'center',
            flex: 0.2,
        },
        middleSection: {
            flex: 0.2,
        },
        bottomSection: {
            flex: 0.6,
            justifyContent: 'flex-end',
        },
    
    });
    const myContext = useContext(AppContext);
    const [password, setPassword] = useState(''); 
    useEffect(() => {
        // console.log(myContext);
    },[]);
    
    return (
        <View style={styles.container}>
            <View style={styles.topSection}>
                <CustomText 
                    style={"title"}
                    variant="headlineSmall" 
                    text="パスワードを入力してください。" 
                />
            </View>
            <View style={styles.middleSection}>
                <TextInput 
                    value={password}
                    onChangeText={setPassword}
                    label="Password"
                />
            </View>
            <View style={styles.bottomSection}>
                <Button 
                    title="次へ"
                    type="long"
                    onPress={() => {
                    myContext.password = password;
                    navigation.navigate('Phone');
                    }}
                />
            </View>
        </View>
    );
}
