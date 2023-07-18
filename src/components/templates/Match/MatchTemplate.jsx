import { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView, Dimensions } from 'react-native';
// import axios from 'axios';
import MatchListOrganisms from '@components/organisms/Match/MatchListOrganisms';


export default MatchTemplate = ({myProp}) =>  {

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
                <MatchListOrganisms styles= {styles.social_list} myProp={myProp}/>                
            </ScrollView>
        );
    } else {
        return (
            <View></View>
        );
    }
}