import React, {  } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function RadioButtonAtom({items, value, setValue}) {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            // alignItems: 'center',
            // justifyContent: 'center',
            // padding: 20,
            // flexDirection: 'column',
        },
    });
    const renderItem = ({ item, key }) => (
        <RadioButton.Item 
            key={key} 
            label={item} 
            value={item} 
            labelStyle={{ paddingRight: 150 }}
        />
    );

    return (
        <RadioButton.Group styles={styles.container} onValueChange={value => setValue(value)} value={value}>
            <FlatList
                data={items}
                renderItem={renderItem}
                keyExtractor={item => item.id}
            />
        </RadioButton.Group>

        // <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
        //     <FlatList
        //         data={items}
        //         renderItem={renderItem}
        //         keyExtractor={item => item.id}
        //     />
        //     {items.map( (item, key) => {
        //         return (
        //             <RadioButton.Item key={key} label={item} value={item} />
        //         );
        //     })}
        // </RadioButton.Group>
    );
}