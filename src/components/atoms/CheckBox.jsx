import React, { useState } from 'react';

import { Checkbox } from 'react-native-paper';

export default function CheckBox() {
    const [checked, setChecked] = useState(false);
    return (
        <>
        <Checkbox.Item label="男性" status={checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)}/>
        <Checkbox.Item label="女性" status={!checked ? 'checked' : 'unchecked'} onPress={() => setChecked(!checked)}/>
        </>
    );
}