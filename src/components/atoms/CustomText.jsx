import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function CustomText({ style, variant, text }) {
  const styles = StyleSheet.create({
    title: {
      textAlign: 'left',
      width: 300,
    }
  });
  return (
    <Text style={styles.title} variant={variant}> 
      {text}
    </Text>
  );
}
