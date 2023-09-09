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

import axios from 'axios';

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
        borderRadius: 10,
        backgroundColor: 'white',
    },
    button: {
        width: '20%',
        backgroundColor: color.red
    }
});

function registSocial() {
    axios.post(
        'https://6emh0gtr77.execute-api.ap-northeast-1.amazonaws.com/SocialDetail',
        {
            social_room_id : 1,
            lead : text,
            delete_flag : 0,
            creator_id : 1,
        }
    ).then((res) => {
        setText('');
    });
}

return (
    <KeyboardAvoidingView style={styles.container}
    behavior={Platform.select({ios: 'padding'})}>
        <TextInput style={styles.text_input}
            value={text}
            onChangeText={text => setText(text)}
        />
        <Button style={styles.button}
            onPress={() => registSocial()}
        >送信</Button>
    </KeyboardAvoidingView>
);
}

export default SocialDetailTextInputOrganisms;