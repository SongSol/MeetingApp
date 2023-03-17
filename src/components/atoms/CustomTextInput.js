import React from 'react';
import { StyleSheet,  } from 'react-native';

import { TextInput } from "@react-native-material/core";

export default function CustomTextInput({ placeholder }) {
  // const [userInput, setUserInput] = useState();
  const styles = StyleSheet.create({
    TextInput: {
        width: 200,
        height: 30,
        margin: 20,
    }
  });
  return (
    <TextInput 
        placeholder={placeholder}
        style={styles.TextInput}
        // onChange={setUserInput()}
    />
);
}
