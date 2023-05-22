import * as React from 'react';
import {View, StyleSheet, ScrollView } from 'react-native';
import SocialTemplate from '@components/templates/Social/SocialTemplate';
import { Text } from 'react-native-paper';

export default function List({navigation}) {

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
                <Text style={styles.title}>커뮤니티</Text>
                <SocialTemplate></SocialTemplate>
            </ScrollView>
            <View style={styles.footer}>
                <Text>Footer</Text>
            </View>
        </View>
    );
}
