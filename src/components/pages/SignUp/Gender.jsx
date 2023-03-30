import React from 'react';

import { View, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';

export default function Gender({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
      });
    
  return (
    <View style={styles.container}>
      <Button mode="text" onPress={() => navigation.navigate('Nickname')}>
        男性
      </Button>
      <Button mode="text" onPress={() => navigation.navigate('Nickname')}>
        女性
      </Button>
    </View>
  );
}
