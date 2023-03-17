import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

export default function Gender({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    const genderList = ["男性", "女性"];
    
  return (
    <View style={styles.container}>
        {/* <CustomListItem
          list={genderList}
        /> */}
        <Button
            title="男性"
            onPress={() => navigation.navigate('Nickname')}
            // onPress={() => navigation.push('Detail')}
        />
        <Button
            title="女性"
            onPress={() => navigation.navigate('Nickname')}
            // onPress={() => navigation.push('Detail')}
        />
        
    </View>
  );
}
