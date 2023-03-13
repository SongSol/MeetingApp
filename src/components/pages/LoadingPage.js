import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {View, Button, Image, StyleSheet, Text} from 'react-native';


export default function LoadingPage () {
  const logo = {
    uri: 'https://reactnative.dev/img/tiny_logo.png',
    width: 300,
    height: 300,
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  return (
    <View style={styles.container}>
      <Text>Loading Page</Text>
      <Image source={logo} />
      <StatusBar style="auto" />

   
    </View>
  );
};

