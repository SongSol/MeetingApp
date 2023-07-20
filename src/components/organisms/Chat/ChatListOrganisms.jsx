import {View, StyleSheet, Text, Dimensions, TouchableOpacity} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';

const NumberedIcon = ({ number, iconName, iconSize, iconColor, numberColor }) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Icon name={iconName} size={iconSize} color={iconColor} />
        <View
          style={{
            backgroundColor: numberColor,
            borderRadius: 10,
            paddingHorizontal: 5,
          }}
        >
          <Text style={{ color: 'white' }}>{number}</Text>
        </View>
      </View>
    );
};

const MatchTemplate = ({myProp}) =>  {

    const navigation = useNavigation();
    const color = require('@assets/color.json');

    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        container: {
            padding: 1,
            marginTop: 1,
            marginBottom: 1,
            width: width,
        },

        view_social: {
            // backgroundColor: color.light_gray,
            borderRadius: 10,
            padding: 5,
        },

        view_social_info: {
            flexDirection: 'row',
            alignItems: 'center'
        },

        title: {
        fontSize: 40,
        color: color.gray
        },

        view_image: {
            flexDirection: 'row',
        },

        image_profile: {
            backgroundColor: color.blue,
            width: 50,
            height: 50,
            borderRadius: 10,
            marginRight: 2,
        },
        point: {
            fontWeight: 'bold', 
            fontSize: "16", 
            marginBottom: 5
        }
    });

    const userid = 4;
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const chatroom_ids = [];

    useEffect(() => {
        const getMatch_count = async () => {
            try {
            const response = await axios.post(
                'https://7xdpowakpg.execute-api.ap-northeast-1.amazonaws.com/chatroom'
                , {
                what: "chatroom",
                userid_like_to: userid
                } 
            )
            console.log(response.data)
            setData(response.data);
            setIsLoading(false);
            } catch (error) {
            console.error(error);
            setIsLoading(false);
            }
        } 
        getMatch_count();
    }, []);

    isLoading ? (
        console.log("loading....2")
    ) : (
        data.length > 0 ? (
            // console.log(data)
            data.map(array => (
                // console.log(array),
                chatroom_ids.push(array["chatroom_id"])
            ))
        ) : (
            console.log("No data available3")
        )
    )
    console.log(chatroom_ids)

    const [data2, setData2] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true);
    const match_from_ids = []

    useEffect(() => {
    const getUser = async () => {
        try {
          const responseData = [];
          
          for (let i = 0; i < myProp.length; i++) {
            let response = null;
            let match_from_id = myProp[i];
            
            while (!response) {
              try {
                const result = await axios.post(
                  'https://gbp4u8anb3.execute-api.ap-northeast-1.amazonaws.com/User/'
                  , {
                    what: "getUser",
                    user_id: match_from_id
                  } 
                )
                response = result.data["body"][0]["nickname"];
              } catch (error) {
                console.error(error);
                
                await new Promise((resolve) => setTimeout(resolve, 1000));
              }
            }
      
            responseData.push(response);
          }
      
          setData2(responseData);
          setIsLoading2(false);
        } catch (error) {
          console.error(error);
          setIsLoading2(false);
        }
      };
      getUser();
    }, []);

    isLoading2 ? (
        console.log("loading....2")
      ) : (
          data2.length > 0 ? (
            // console.log(data)
            data2.map(array => (
                // console.log(array)
                match_from_ids.push(array)
            ))
          ) : (
            console.log("No data available2")
          )
    )

    const [data3, setData3] = useState([]);
    const [isLoading3, setIsLoading3] = useState(true);
    let chat_content = {};
    

    useEffect(() => {
        const getChat = async () => {
            try {
              const responseData2 = {};
              
              for (let i = 0; i < chatroom_ids.length; i++) {
                let response2 = null;
                let chatroomid = chatroom_ids[i];
                
                while (!response2) {
                  try {
                    console.log("checking : " + chatroomid)
                    const result2 = await axios.post(
                      'https://ji9y8rmag0.execute-api.ap-northeast-1.amazonaws.com/Chat/'
                      ,{
                        what: "chat",
                        chatroom_id: chatroomid
                      } 
                    )
                    
                    response2 = result2.data["body"];
                  } catch (error) {
                    console.error(error);
                    
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  }
                }
                responseData2[chatroomid] = [];
                if(response2){
                    for(j=0; j<2; j++){
                        responseData2[chatroomid].push(response2[j]["chat_content"]);
                    }
                }
              }
              
              setData3(responseData2);
              setIsLoading3(false);
            } catch (error) {
              console.error(error);
              setIsLoading3(false);
            }
          };
          getChat();
        }, []);
    console.log(data3[3]);
       
    // isLoading3 ? (
    //     console.log("loading....3")
    // ) : (
    //     data3.length > 0 ? (
    //         // console.log(data)
    //         data3.map(array => (
    //             console.log("먼저 여기 : "+ array),
    //             chat_content.push(array["chat_content"])
    //         ))
    //     ) : (
    //         console.log("No data available3")
    //     )
    // )
    // console.log("여기다 : " +chat_content[0])
    
      

    if (match_from_ids.length > 0) {
        return (
            match_from_ids.map(tag => ( 
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
                    <View style={styles.view_social}>
                        <View style={styles.view_social_info}>
                            <View style={styles.view_image}>
                                <View style={styles.image_profile}>
                                    <NumberedIcon
                                        number={2}
                                        // iconName="star"
                                        iconSize={24}
                                        iconColor="gold"
                                        numberColor="red"
                                    /></View>                
                            </View>
                            <View style={{ marginLeft:10 }}>
                                <Text style={styles.point}>{tag}</Text>
                                <Text>저 님한테 관심있어요 !</Text>
                                <Text>좋아요 받아주셔서 감사합니다 ㅎㅎ</Text>
                            </View>
                        </View>
                    </View>
                    </TouchableOpacity>
                </View>
            ))
        );
    } else {
        return (
            <View>
                <Text>현재 개설된 채팅방은 없습니다.</Text>
            </View>
        );
    }
}

export default MatchTemplate;