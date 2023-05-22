import React from 'react';
import { StyleSheet } from 'react-native';
import { TextInput } from "react-native-paper";

export default function TextInputAtom({ value, onChangeText, label }) {
  
  const styles = StyleSheet.create({
    TextInput: {
        width: 300,
        height: 50,
        margin: 10,
    }
  });
  return (
    
    <TextInput
      style={styles.TextInput}
      label={label}
      mode="outlined"
      outlineColor="pink"
      activeOutlineColor="pink"
      value={value}
      onChangeText={onChangeText}
      secureTextEntry={label === "password" ? true : false}
      right={label === "password" ? <TextInput.Icon icon="eye"/> : null}
    />    
);
}
