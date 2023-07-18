import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';
import { Button } from 'react-native-paper';

export default function ButtonAtom({ icon, title, w, h, c, onPress}) {
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
        customizebutton: {
            alignItems: 'center',
            justifyContent: 'center',
            width:Number(w),
            height:Number(h),
            borderRadius: 4,
            elevation: 3,
            backgroundColor: c ,
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
      if(w == "" || h == "" || c == ""){
        return (
              <Button style={styles.button} 
                onPress={onPress} icon={icon}>
                <Text style={styles.text}>{title}</Text>
              </Button>
              );
      }else{
        return (
          <Button style={styles.customizebutton}
          onPress={onPress} icon={icon}>
          <Text style={styles.text}>{title}</Text>
          </Button>
          );
      }
    // switch(type) {
    //     case 'Pink':
    //         return (
    //             <Button style={styles.pinkbutton} 
    //               onPress={onPress} icon={icon}>
    //               <Text style={styles.text}>{title}</Text>
    //             </Button>
    //         );
    //     case 'Blue':
    //         return (
    //             <Button style={styles.bluebutton} 
    //               onPress={onPress} icon={icon}>
    //               <Text style={styles.text}>{title}</Text>
    //             </Button>
    //         );
    //     default:
    //         return (
    //             <Button style={styles.button} 
    //               onPress={onPress} >
    //               <Text style={styles.text}>{title}</Text>
    //             </Button>
    //           );
    // }
}

