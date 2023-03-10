import React from 'react';
import { TextInput } from 'react-native';

export default function CustomTextInput({ placeholder }) {
  // const [userInput, setUserInput] = useState();

  return (
    <TextInput 
        placeholder={placeholder}
        // onChange={setUserInput()}
    />
);
}
