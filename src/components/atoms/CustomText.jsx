import React from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

export default function CustomText({ style, variant, text }) {
  const styles = style && StyleSheet.create({
    title: {
      textAlign: 'left',
      width: 320,
    }
  });
  return (
    <Text style={styles.title} variant={variant}> 
      {text}
    </Text>
  );
}
