import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

export default function ButtonAtom({ icon, title, type, onPress}) {
    const styles = StyleSheet.create({
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'gray',
        },
        pinkbutton: {
            alignItems: 'center',
            justifyContent: 'center',
            width:200,
            height:50,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: '#FF71A6',
          },
        bluebutton: {
            alignItems: 'center',
            justifyContent: 'center',
            width:200,
            height:50,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: '#8CDBEB',
          },
        text: {
          fontSize: 16,
          width:20,
          height:15,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white'
        },
      });
    switch(type) {
        case 'Pink':
            return (
                <Button style={styles.pinkbutton} 
                  onPress={onPress} icon={icon}>
                  <Text style={styles.text}>{title}</Text>
                </Button>
            );
        case 'Blue':
            return (
                <Button style={styles.bluebutton} 
                  onPress={onPress} icon={icon}>
                  <Text style={styles.text}>{title}</Text>
                </Button>
            );
        case 'Small':
            return (
                <Button style={styles.smallbutton} 
                  onPress={onPress}>
                  <Text style={styles.text}>{title}</Text>
                </Button>
            );
        default:
            return (
                <Button style={styles.button} 
                  onPress={onPress} >
                  <Text style={styles.text}>{title}</Text>
                </Button>
              );
    }
}

