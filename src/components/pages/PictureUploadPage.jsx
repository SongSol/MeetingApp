import React, { useState, useEffect } from 'react';
import { View, Text, Platform,StyleSheet,TouchableHighlight,Alert,Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import Button from '@components/atoms/Button'
import {
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
//import Image from '@components/atoms/Image';
import { Amplify, Storage } from 'aws-amplify';
import awsconfig from '@components/aws-exports';
Amplify.configure(awsconfig);
import axios from "axios";


export default function ImagePickerExample() {
  const title = 'picture upload';
  const icons = 'camera';
  const [filePath, setFilePath] = useState({});
  const [filePath1, setFilePath1] = useState({});
  const [filePath2, setFilePath2] = useState({});
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const image_width='50%';
  const styles = StyleSheet.create({
    // container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    // // },
    image1: {
        width: 180,
        height: 310,
        borderRadius: 20,
        backgroundColor:'darkgray'
       // marginBottom:10,
    },
    image2: {
      width: 180,
      height: 150,
      borderRadius: 20,
      backgroundColor:'darkgray'
      //marginBottom:10,
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
    console.log('result : ', result)

    if (!result.canceled) {
      setImage(result.assets[0].uri);
      setFilePath(result);
      
    }
  };
  const pickImage1 = async () => {
    // No permissions request is necessary for launching the image library
    let result1 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('result : ', result1)

    if (!result1.canceled) {
      setImage1(result1.assets[0].uri);
      setFilePath1(result1);
      
    }
  };
  const pickImage2 = async () => {
    // No permissions request is necessary for launching the image library
    let result2 = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log('result : ', result2)

    if (!result2.canceled) {
      setImage2(result2.assets[0].uri);
      setFilePath2(result2);
      
    }
  };


  const uploadFile = async() => {
    if (Object.keys(filePath).length == 0) {
      
      alert('Please select image first');
      return;
    }

    // const photo = await fetch(filePath.url)
    // const photoBlob = await photo.blob();
    // await Storage.put('6.jpeg', photoBlob, {
      
    //   contentType: 'image/jpeg'
    // }).then((res) => {console.log(res)})
    
    const photo = await fetch(image)
    const blob = await photo.blob();
    await Storage.put('profile_image/4.png', blob).then((res) => {console.log(res)})

    console.log('check : ', filePath)
    console.log('1 : ', filePath.uri)
    console.log('filePath : ', filePath.type)

    
      const updataPictureData = async () => {
          try {
              const res = await axios.post
              ('https://0u32epsl3h.execute-api.ap-northeast-1.amazonaws.com/UploadPicture',
                  {
                      user_id : "1",
                      path : "example",
                      is_main : "0"
                  });
          } catch(e) {
              console.log(e);
          }
      };
      updataPictureData();

  };
  

  return (
    <View style={{alignContent:'center',alignItems:'center',margin:10}}>
      <View style={{flexDirection: 'row',marginTop:"40%"}} >
        <View> 
          <TouchableHighlight onPress={pickImage} >
          <Image source={{ uri: image }} style={styles.image1}  />
          {/* <Image defaultSource={require('@assets/images/차은우.png')} source={{ uri: image }} style={styles.image1}  /> */}
          </TouchableHighlight>
        </View>
        <View style={{marginLeft:10}}>
          <View>  
            <TouchableHighlight onPress={pickImage1} >
            <Image source={{ uri: image1 }} style={styles.image2}  />
            {/* <Image defaultSource={require('@assets/images/차은우.png')} source={{ uri: image }} style={styles.image1}  /> */}
            </TouchableHighlight>
          </View>
          <View style={{marginTop:10}}> 
            <TouchableHighlight onPress={pickImage2} >
            <Image source={{ uri: image2 }} style={styles.image2}  />
            {/* <Image defaultSource={require('@assets/images/차은우.png')} source={{ uri: image }} style={styles.image1}  /> */}
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={{margin:10}}>
      <Button title={title} type='Long' onPress={uploadFile}  />
      </View>
    </View>
    

    
  );
}