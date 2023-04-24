import React from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { Chip } from 'react-native-paper';
import { useState } from 'react';



export default function TagSelect({navigation}) {
    const styles = StyleSheet.create({
        chip: {
            display: "inline-block",
            flexDirection: 'row',
            // alignItems: 'center',
            justifyContent: 'center',
            // flexWrap: "wrap",
            // marginRight: "4",
            width: 120,
            marginLeft: 20,
            marginTop: 10,
            marginBottom: 10,
            backgroundColor: '#ddd',
            // display: 'inline-block', 
            // marginRight: '8%'
        },
        container: {
            flex: 1,
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
        },
    });

    const tag = {
        1: "movie",
        2: "sports",
        3: "cooking",
        4: "game",
        5: "cleaning"
    }
    
    // const selectedTag = ["1"]

    // const [names, setNames] = useState(['Alice', 'Bob']);

    // const handleClick = () => {
    //     setNames(current => [...current, 'Carl']);
    // }


    return (
        <View>
            <View style={styles.chip}>
                <Chip
                icon="information"
                mode="flat"
                onPress={() => Alert.alert('Information chip pressed')}>
                Information
                </Chip>
            </View>
            <View style={styles.chip}>
            {Object.keys(tag).map((key) => (
                
                    <Chip icon="heart" mode="outlined" selectedColor="red" onPress={() => console.log(key)}>
                        {tag[key]}
                    </Chip>
                
            ))}
            </View>
            {/* <View>
                {names.map((element, index) => {
                    return (
                    <div key={index}>
                        <h2>{element}</h2>
                    </div>
                    );
                })}
            </View> */}
        </View>
    );
}