import React, { useState } from 'react';

import { Checkbox } from 'react-native-paper';

export default function CheckBox() {
    const [checked, setChecked] = useState(false);
    return (
        <Checkbox
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => setChecked(!checked)}
        />
    );
}