import React, { useState } from 'react';

import { RadioButton } from 'react-native-paper';

export default function RadioButtonAtom({items}) {
    const [value, setValue] = useState();
    return (
        <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
            {items.map( item => {
                return (
                    <RadioButton.Item label={item} value={item} />
                );
            })}
        </RadioButton.Group>
    );
}