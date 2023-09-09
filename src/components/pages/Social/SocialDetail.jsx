import * as React from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import SocialDetailTemplate from '@components/templates/Social/SocialDetailTemplate';
import SocialDetailTextInputOrganisms from '@components/organisms/Social/SocialDetailTextInputOrganisms';
import { Text, TextInput } from 'react-native-paper';

export default function SocialDetail({navigation}) {

    const styles = StyleSheet.create({
        container: {  
            flex: 1,
            backgroundColor: '#fff',
            // alignItems: 'center',
            justifyContent: 'center',
        },
        
        title: {
            fontSize: 30,
            margin: 10,
            fontWeight: 800,
        },

        footer: {
          height: '15%',
          marginBottom: 25,
        },

        scrollview: {
            height: '85%'
        },
      });


    return (
        <View style={styles.container}>
            <ScrollView style={styles.scrollview}>
                <Text style={styles.title}>Detail</Text>
                <SocialDetailTemplate></SocialDetailTemplate>
            </ScrollView>
            <View style={styles.footer}>
                <SocialDetailTextInputOrganisms/>
            </View>
        </View>
    );
}
