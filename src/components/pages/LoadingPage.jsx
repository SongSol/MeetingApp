// import { StatusBar } from 'expo-status-bar';
import { Svg, Defs, LinearGradient, Stop, Rect } from "react-native-svg";

import React, {useRef, useEffect} from 'react';
import {StyleSheet, Animated, Easing,SafeAreaView} from 'react-native';



export default function LoadingPage ({navigation}) {
  // const logo = {
  //   uri: 'https://reactnative.dev/img/tiny_logo.png',
  //   width: 300,
  //   height: 300,
  // };
  // const styles = StyleSheet.create({
  //   container: {
  //     flex: 1,
  //     backgroundColor: '#fff',
  //     alignItems: 'center',
  //     justifyContent: 'center',
  //   },
  // });
  // return (
  //   <View style={styles.container}>
  //     <Text>Loading Page</Text>
  //     <Image source={logo} />
  //     <StatusBar style="auto" />

   
  //   </View>
  // );

  const FROM_COLOR = '#FF71A6';
  const TO_COLOR = '#8CDBEB';

  const backgroundFade = useRef(new Animated.Value(0)).current;
  const logoFade = useRef(new Animated.Value(0)).current;
  const logoMovement = useRef(new Animated.Value(0)).current;
  
  useEffect(() => {
    Animated.timing(backgroundFade, {
      toValue: 1,
      duration: 2000,
      useNativeDriver: true,
    }).start();
    Animated.timing(logoFade, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    }).start();
    setTimeout(() => {
      Animated.timing(logoMovement, {
        toValue: 1,
        duration: 2000,
        easing: Easing.inOut(Easing.exp),
        useNativeDriver: true,
      }).start(() => {
        navigation.navigate('InitialPage')
      });
    }, 50);
  }, []);
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FF71A6',
      opacity: backgroundFade,
    },
    logo: {
      color: 'white',
      fontSize: 60,
      fontFamily : "Farah",
      fontWeight: 'bold',
      opacity: logoFade,
      transform: [{translateY: logoMovement.interpolate({inputRange: [0, 1],outputRange: [500, 280]})}],
    },
  });
  return (
    <Svg height="100%" width="100%" style={ StyleSheet.absoluteFillObject }>
      <Defs>
          <LinearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
            <Stop offset="0" stopColor={ FROM_COLOR }/>            
            <Stop offset="1" stopColor={ TO_COLOR }/>
          </LinearGradient>
      </Defs>
      <Rect x="0" y="0" width="100%" height="100%" fill="url(#grad)"/>
      <Animated.View style={{opacity: backgroundFade, alignItems: 'center',justifyContent: 'center'}}>
        <Animated.Text style={styles.logo}>HIPLE</Animated.Text>
      </Animated.View>
    </Svg>
  );
};

