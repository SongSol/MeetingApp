import React from 'react';
import { StyleSheet } from 'react-native';

import { TextInput } from "react-native-paper";

export default function TextInputAtom({ value, onChangeText, label, placeholder }) {
  
  const styles = StyleSheet.create({
    TextInput: {
        width: 250,
        height: 50,
        margin: 10,
    }
  });
  return (
    
    <TextInput
      style={styles.TextInput}
      label={label}
      mode="outlined"
      placeholder={placeholder}
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={label === "password" ? true : false}
      right={label === "password" ? <TextInput.Icon icon="eye"/> : null}
    />    
);
}
