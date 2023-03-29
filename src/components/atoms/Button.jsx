import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

export default function ButtonAtom({ title, type }) {
    const styles = StyleSheet.create({
        button: {
          alignItems: 'center',
          justifyContent: 'center',
          paddingVertical: 12,
          paddingHorizontal: 32,
          borderRadius: 4,
          elevation: 3,
          backgroundColor: 'pink',
        },
        longbutton: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 60,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'pink',
          },
        middlebutton: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 32,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'pink',
          },
          smallbutton: {
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            paddingHorizontal: 10,
            borderRadius: 4,
            elevation: 3,
            backgroundColor: 'pink',
          },
        text: {
          fontSize: 16,
          lineHeight: 21,
          fontWeight: 'bold',
          letterSpacing: 0.25,
          color: 'white',
        },
      });
    switch(type) {
        case 'Long':
            return (
                <Button style={styles.longbutton} >
                  <Text style={styles.text}>{title}</Text>
                </Button>
            );
        case 'Middle':
            return (
                <Button style={styles.middlebutton} >
                  <Text style={styles.text}>{title}</Text>
                </Button>
            );
        case 'Small':
            return (
                <Button style={styles.smallbutton} >
                  <Text style={styles.text}>{title}</Text>
                </Button>
            );
        default:
            return (
                <Button style={styles.button} >
                  <Text style={styles.text}>{title}</Text>
                </Button>
              );
    }
}

