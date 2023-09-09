import React from 'react';
import {View, StyleSheet, Image } from 'react-native';
import UserInfo from '@components/templates/MyPage/UserInfoTemplate';
import MainPage from '@components/templates/MyPage/MainPageTemplate';
import CustomText from '@components/atoms/CustomText';

export default function MyPage({}) {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          padding: 15
        },
        userInfoContainer: {
            flex: 2
        },
        myPageBody: {
            flex: 7
        },
        footer: {
            flex: 1
        }
      });
    return (
        <View style={styles.container}>
            <UserInfo style={styles.userInfoContainer}/>
            <View style={styles.myPageBody}>
                <MainPage />
            </View>
            <View style={styles.footer}>
                <CustomText 
                    style={"title"}
                    variant="headlineSmall" 
                    text="푸터"
                />
            </View>
        </View>
    );
}
