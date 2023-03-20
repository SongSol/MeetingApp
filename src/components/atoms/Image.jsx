import React from 'react';
import { Image, StyleSheet } from 'react-native';

const ImageAtom = props => {
    const styles = StyleSheet.create({

        image: {
            width: 300,
            height: 300,
            borderRadius: 20,
        }
      });
    switch(props.type) {
        case 'Profile':
            return (
                <Image 
                    style={styles.image}
                    source={props.src}
                />
            );
        case 'Icon':
            break;
        default:
            break;
    }
}

export default ImageAtom