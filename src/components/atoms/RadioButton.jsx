import React, { useEffect } from 'react';
import { View, FlatList, Text } from 'react-native';
import { RadioButton } from 'react-native-paper';

export default function RadioButtonAtom({items, value, setValue}) {

    const renderItem = ({ item, key }) => (
        <RadioButton.Item key={key} label={item} value={item} />
    );

    return (
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
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