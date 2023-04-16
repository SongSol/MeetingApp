import React, { useState } from 'react';

import { RadioButton } from 'react-native-paper';

export default function RadioButtonAtom({items}) {
    const [value, setValue] = useState();
    return (
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
            {items.map( (item, key) => {
                return (
                    <RadioButton.Item key={key} label={item} value={item} />
                );
            })}
        </RadioButton.Group>
    );
}