import { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import ChatListOrganisms from '@components/organisms/Chat/ChatListOrganisms';


export default MatchTemplate = ({myProp, navigation}) =>  {

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },

        social_list: {
            backgroundColor: '#fff',
        }
    });

    if (myProp.length > 0) {
        return (
            <ScrollView showsVerticalScrollIndicator={false}>
                <ChatListOrganisms styles= {styles.social_list} myProp={myProp}/>
            </ScrollView>
        );
    } else {
        return (
            <View></View>
        );
    }
}