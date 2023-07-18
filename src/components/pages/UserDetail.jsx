import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';


import { StyleSheet, Text, View, Dimensions, TouchableHighlight, Image, Linking } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from 'react-native-paper';
import {
    ScrollView,
  } from 'react-native';

const styles = StyleSheet.create({
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      height:10,
      width: 10,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'gray',
    },  
    name: {
        margin:10,   
        width:'100%',
        height:70,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ff9a9a',
    },
    content: {
        margin:10,   
        width:'100%',
        height:200,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#d6ca1a',
    },
    image1: {
        margin:10,  
        width: 150,
        height: 150,
        backgroundColor:'darkgray',
       // marginBottom:10,
    },
    footer: {
        flexDirection:'row',
        position : 'absolute',
        top:'80%',
        bottom:0,
        left:'15%',
        right:0
        
    },
  });



  

export default class App extends React.Component {
    

    state = {
        data: [
            { title: 'a', url: 'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/1.png' },
            { title: 'b', url: 'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/2.png' },
            { title: 'c', url: 'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/3.png' },
            { title: 'd', url: 'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/4.png' },
        ],
        activeSlide: 0,
    }


    //カルーセルの中身
    _renderItem = ({ item, index }) => {
        return (
            <TouchableHighlight
                onPress={() => Linking.openURL(item.url)}
            >
                <Image source={{ url: item.url }} style={{ width: '100%', height: '100%' }} />
            </TouchableHighlight>
        );
    }

    render() {
        return (
      <View>
      <ScrollView> 
            <View style={{alignContent:'center',alignItems:'center',margin:20}}>
                <View style={{ height: 300 }}>
                    <Carousel
                        data={this.state.data}
                        renderItem={this._renderItem}
                        itemWidth={Dimensions.get("window").width * 0.7}
                        sliderWidth={Dimensions.get("window").width * 1.0}
                        // containerCustomStyle={{ flex: 1, backgroundColor: "#eee" }}
                        onSnapToItem={index => this.setState({ activeSlide: index })} //for pagination
                        //loop
                        //autoplay
                    />
                    <Pagination
                        dotsLength={this.state.data.length} //dotの数
                        activeDotIndex={this.state.activeSlide} //どのdotをactiveにするか
                        containerStyle={{paddingVertical:15}} //デフォルトではちと広い
                    />
                </View>
                <View style={styles.name}>
                    <Text>Songhaneol,31살</Text>
                </View>

                <Text style={{margin:10}}>자기소개</Text>
                <View style={styles.content}>
                    <Text>송한얼입니다</Text>
                </View>
                <Text>참가중인 커뮤니티</Text>
                <View style={{flexDirection:'row'}}>
                    
                    <Image source={require('@assets/images/김채원.png')} style={styles.image1}  />
                    <Text style={{alignContent:'center',alignItems:'center',margin:20}}>ㅋㅋㅋㅋㅋㅋㅋㅋ</Text>
                </View>

            </View>
            
      </ScrollView>
      <View style={styles.footer}>
                    <Button labelStyle={{fontSize: 60}} textColor="#FF4500" icon="close-thick" ></Button>
                    <Button labelStyle={{fontSize: 60}} textColor="#FFD700" icon="star-shooting"></Button>
                    <Button labelStyle={{fontSize: 60}} textColor="hotpink" icon="heart-box" ></Button>
      </View>
      </View>   
      
        );
    }
}

