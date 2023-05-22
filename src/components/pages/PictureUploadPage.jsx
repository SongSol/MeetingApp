import React, { memo, useState, useEffect,useCallback } from 'react';
import { ActionSheetIOS, View, Text,Modal,Platform,Pressable,StyleSheet,TouchableHighlight,Alert,Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
//import {} from '@expo/react-native-action-sheet';
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
  const icon = 'camera';
  const [filePath, setFilePath] = useState({});
  const [filePath1, setFilePath1] = useState({});
  const [filePath2, setFilePath2] = useState({});
  const [filePath3, setFilePath3] = useState({});
  const [image, setImage] = useState("");
  const [image1, setImage1] = useState("");
  const [image2, setImage2] = useState("");
  const image_width='50%';
  const imagePickerOption = {
    mediaType: "photo",
    maxWidth: 768,
    maxHeight: 768,
    includeBase64: Platform.OS === "android",
  };

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
  const styles1 = StyleSheet.create({
    background: {
      backgroundColor: "rgba(0,0,0,0,6)",
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
    },
    whiteBox: {
      width: 300,
      backgroundColor: "white",
      borderRadius: 4,
      elevation: 2,
    },
    actionButton: {
      padding: 16,
      flexDirection: "row",
      alignItems: "center",
    },
    icon: {
      marginRight: 8,
    },
    text: {
      fontSize: 26,
    },
  });

  const buttonstyle = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 32,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: '#8CDBEB',
    },
  });


  const pickImage = useCallback(async () => {
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
  });
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

  
  const pickImageCamera = useCallback(async () => {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    if (camera.status !== 'granted') {
      Alert.alert('memoirアプリのカメラのアクセス許可をONにしてください');
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.assets[0].uri);
      setFilePath(result);
    }
  });

  const pickImageCamera1 = useCallback(async () => {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    if (camera.status !== 'granted') {
      Alert.alert('memoirアプリのカメラのアクセス許可をONにしてください');
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage1(result.assets[0].uri);
      setFilePath1(result);
    }
  });

  const pickImageCamera2 = useCallback(async () => {
    const camera = await ImagePicker.requestCameraPermissionsAsync();
    if (camera.status !== 'granted') {
      Alert.alert('memoirアプリのカメラのアクセス許可をONにしてください');
    }

    let result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage2(result.assets[0].uri);
      setFilePath2(result);
    }
  });


  


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

    
    // 선택 모달 오픈
    const modalOpen = () => {
      if (Platform.OS === "android") { // 안드로이드
        setModalVisible(true);  
        visible = true;
      } else { // iOS
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options: ["카메라로 촬영하기", "사진 선택하기", "취소"],
            cancelButtonIndex: 2,
          },
          (buttonIndex) => {
            if (buttonIndex === 0) {
              pickImageCamera();
            } else if (buttonIndex === 1) {
              pickImage();
            }
          },
        )
      }
    }

        // 선택 모달 오픈
        const modalOpen1 = () => {
          if (Platform.OS === "android") { // 안드로이드
            setModalVisible(true);  
            visible = true;
          } else { // iOS
            ActionSheetIOS.showActionSheetWithOptions(
              {
                options: ["카메라로 촬영하기", "사진 선택하기", "취소"],
                cancelButtonIndex: 2,
              },
              (buttonIndex) => {
                if (buttonIndex === 0) {
                  pickImageCamera1();
                } else if (buttonIndex === 1) {
                  pickImage1();
                }
              },
            )
          }
        }

            // 선택 모달 오픈
    const modalOpen2 = () => {
      if (Platform.OS === "android") { // 안드로이드
        setModalVisible(true);  
        visible = true;
      } else { // iOS
        ActionSheetIOS.showActionSheetWithOptions(
          {
            options: ["카메라로 촬영하기", "사진 선택하기", "취소"],
            cancelButtonIndex: 2,
          },
          (buttonIndex) => {
            if (buttonIndex === 0) {
              pickImageCamera2();
            } else if (buttonIndex === 1) {
              pickImage2();
            }
          },
        )
      }
    }


  return (
    <View style={{alignContent:'center',alignItems:'center',margin:10}}>
      <View style={{flexDirection: 'row',marginTop:"40%"}} >
        <View> 
          <TouchableHighlight onPress={modalOpen} >
          <Image source={{ uri: image }} style={styles.image1}  />
          {/* <Image defaultSource={require('@assets/images/차은우.png')} source={{ uri: image }} style={styles.image1}  /> */}
          </TouchableHighlight>
        </View>
        <View style={{marginLeft:10}}>
          <View>  
            <TouchableHighlight onPress={modalOpen1} >
            <Image source={{ uri: image1 }} style={styles.image2}  />
            {/* <Image defaultSource={require('@assets/images/차은우.png')} source={{ uri: image }} style={styles.image1}  /> */}
            </TouchableHighlight>
          </View>
          <View style={{marginTop:10}}> 
            <TouchableHighlight onPress={modalOpen2} >
            <Image source={{ uri: image2 }} style={styles.image2}  />
            {/* <Image defaultSource={require('@assets/images/차은우.png')} source={{ uri: image }} style={styles.image1}  /> */}
            </TouchableHighlight>
          </View>
        </View>
      </View>
      <View style={{margin:10}}>
      <Button icon={icon} title={title} type='Pink' onPress={uploadFile} style={{}} />
      </View>
    </View>
    

    
  );
}
