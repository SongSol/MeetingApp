import React, { useState } from 'react';
import { StyleSheet,  } from 'react-native';

import { TextInput } from "react-native-paper";

export default function CustomTextInput({ label, placeholder }) {
  const [text, setText] = useState("");
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
      value={text}
      onChangeText={text => setText(text)}
      secureTextEntry={label === "password" ? true : false}
      right={label === "password" ? <TextInput.Icon icon="eye"/> : null}
    />    
);
}
