import * as React from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import SocialDetailTemplate from '@components/templates/Social/SocialDetailTemplate';
import { Text } from 'react-native-paper';

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
          height: 70,
          backgroundColor: '#ABCDEF'
        }
      });


    return (
        <View style={styles.container}>
            <ScrollView>
                <Text style={styles.title}>Detail</Text>
                <SocialDetailTemplate></SocialDetailTemplate>
            </ScrollView>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
}
