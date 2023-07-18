import {View, 
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity,
    KeyboardAvoidingView
    } from 'react-native';
import { useState, useEffect } from 'react';
import { TextInput,
Button } from 'react-native-paper';

const SocialDetailTextInputOrganisms = (props) =>  {

const color = require('@assets/color.json');

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height;

const [text, setText] = useState("");

const styles = StyleSheet.create({
    container: {
        padding: 10,
        marginTop: 5,
        marginBottom: 5,
        width: width,
        flexDirection: 'row',
    },
    text_input: {
        width: '80%',
        height: 10,
        borderRadius: 10,
        backgroundColor: color.light_gray,
    },
    button: {
        width: '20%',
        backgroundColor: color.red
    }
});

return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
        <TextInput style={styles.text_input}
            value={text}
            onChange={text => setText(text)}
        />
        <Button style={styles.button}>送信</Button>
    </KeyboardAvoidingView>
);
}

export default SocialDetailTextInputOrganisms;