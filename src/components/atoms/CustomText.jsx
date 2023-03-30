import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function CustomText({ title }) {
  const styles = StyleSheet.create({
    text: {
        width: 150,
        height: 30,
        margin: 10,
    }
  });

  return (
    <Text style={styles.text}> 
      {title}
    </Text>
        
    
  );
}
