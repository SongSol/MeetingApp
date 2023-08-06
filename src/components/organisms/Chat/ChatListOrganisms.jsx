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
    const chats = {};
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
            data.map(array => (
                chatroom_ids.push(array["chatroom_id"])
            ))
        ) : (
            console.log("No data available3")
        )
    )
  
    data.forEach(item => {
      chats[item.chatroom_id] = {};
    });
    // console.log(chats);

    const [data5, setData5] = useState([]);
    const [isLoading5, setIsLoading5] = useState(true);
    const chatroom_ids5 = {};

    useEffect(() => {
      const getChat_mem = async () => {
          try {
            const responseData5 = {};
            
            for (let i = 0; i < chatroom_ids.length; i++) {
              let response5 = null;
              let chatroomid = chatroom_ids[i];
              
              while (!response5) {
                try {
                  const result5 = await axios.post(
                    'https://7xdpowakpg.execute-api.ap-northeast-1.amazonaws.com/chatroom'
                    ,{
                      what: "chatroom_mem",
                      chatroom_id: chatroomid
                    } 
                  )
                  response5 = result5.data;
                } catch (error) {
                  console.error(error);
                  
                  await new Promise((resolve) => setTimeout(resolve, 1000));
                }
              }
              responseData5[chatroomid] = [];
                
              if(response5){
                responseData5[chatroomid].push(response5[0]);
                // chats[chatroomid] = { chatroom_id: 1, messages: [] };
              }
            }
            // if(response5){
            //   responseData5
            //   setData5(response5);
            //   setIsLoading5(false);
            // }
            setData5(responseData5);
            setIsLoading5(false);
          } catch (error) {
            console.error(error);
            setIsLoading5(false);
          }
        };
        getChat_mem();
      }, []);

    console.log(data5);

    for (let key in data5) {
      if (data5.hasOwnProperty(key)) {
        const chatList = data5[key];
          
        chatList.forEach(chat => {
          if (chat.userid_like_from == userid || chat.userid_like_to == userid) {
            console.log(`Match found for user ${userid} in chat ${key}`);
          }
        });
      }
    }

    const [data2, setData2] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true);
    const match_from_ids = []
    
    useEffect(() => {
      const getUser = async () => {
        try {
          const responseData = [];
          const chatroom_ids2 = {};
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
            if(response){
              chatroom_ids2[match_from_id] = response;
            }
          }
          
          setData2(chatroom_ids2);
          setIsLoading2(false);
        } catch (error) {
          console.error(error);
          setIsLoading2(false);
        }
      };
      getUser();
    }, []);
    // console.log(data2)

    const [data3, setData3] = useState([]);
    const [isLoading3, setIsLoading3] = useState(true);

    useEffect(() => {
        const getChat = async () => {
            try {
              const responseData2 = {};
              
              for (let i = 0; i < chatroom_ids.length; i++) {
                let response2 = null;
                let chatroomid = chatroom_ids[i];
                
                while (!response2) {
                  try {
                    // console.log("checking : " + chatroomid)
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
                  responseData2[chatroomid].push(response2[0]["chat_content"]);
                  chats[chatroomid] = { chatroom_id: 1, messages: [] };
                }
                // chats[chatroomid] = response2[0]["chat_content"];
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
    // console.log(data3);
    
    for (let key in data3) {
      // console.log(key);
      chats[key] = data3[key][0];
      
    }
    
    // console.log(chats);

    if (Object.keys(data2).length > 0) {
        return (
          Object.entries(data2).map(([key, value])  => ( 
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => navigation.navigate('Chat', { chat_id : data2[key]} )}>
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
                                <Text style={styles.point}>{value}</Text>
                                <Text>{data3[key]}</Text>
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