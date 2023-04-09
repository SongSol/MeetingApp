import React, { useState, useEffect } from 'react';
import { View, Platform,Button,StyleSheet } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import { Button } from '@components/atoms/Button'
import Image from '@components/atoms/Image';

export default function ImagePickerExample() {
 // const title = 'picture upload';
  const [image, setImage] = useState(null);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },

    image1: {
        width: 300,
        height: 300,
        borderRadius: 20,
    },
  });

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {image && <Image src={{ uri: image }} style={styles.image1} type='Profile' />}
      <Button title="사진선택하기" onPress={pickImage} />
    </View>
  );
}