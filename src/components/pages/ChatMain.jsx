import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Button, List } from 'react-native-paper';
import axios from 'axios';
import { Text } from 'react-native-paper';
import MatchTemplate from '@components/templates/Match/MatchTemplate';
import ChatTemplate from '@components/templates/Chat/ChatTemplate';

export default function ChatMain() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white"
    },
    container_match: {  
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 20,
      justifyContent: 'center',
    },
    activeButton_match: {
      backgroundColor: '#FF71A6',
      borderTopLeftRadius:8,
      borderBottomLeftRadius:8,
      padding: 5,
      width: 130,
      justifyContent: 'center',
    },
    inactiveButton_match: {
      padding: 5,
      width: 130,
      borderTopLeftRadius:8,
      borderBottomLeftRadius:8,
      backgroundColor: '#dcdcdc',
      justifyContent: 'center',
    },
    activeButton_message: {
      backgroundColor: '#FF71A6',
      borderTopRightRadius:8,
      borderBottomRightRadius:8,
      padding: 5,
      width: 130,
      justifyContent: 'center',
    },
    inactiveButton_message: {
      padding: 5,
      width: 130,
      borderTopRightRadius:8,
      borderBottomRightRadius:8,
      backgroundColor: '#dcdcdc',
      justifyContent: 'center',
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
  })

  const [selectedButton, setSelectedButton] = useState("Button 1");

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  let match_from_count = 0

  useEffect(() => {
    const getMatch_count = async () => {
    try {
        const response = await axios.post('https://hjj50ekk6d.execute-api.ap-northeast-1.amazonaws.com/getMatch_count', {
          what: "count",  
          userid_like_to: 4
        });
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    getMatch_count();
  }, []);

  isLoading ? (
    console.log("loading....")
    ) : (
      data != [] ? (
        console.log(data),
        match_from_count = data
    ) : (
        console.log("No data available")
    )
    )

  const [data2, setData2] = useState([]);
  const [isLoading4, setIsLoading4] = useState(true);
  const match_from_ids = [];
  const userid = 4;
  useEffect(() => {
    const getMatch_count2 = async () => {
    try {
        const response2 = await axios.post('https://hjj50ekk6d.execute-api.ap-northeast-1.amazonaws.com/getMatch_count', {
            what: "match_from",
            userid_like_to:userid
        });
        console.log("checking");
        console.log(response2.data);
        setData2(response2.data);
        setIsLoading4(false);
      } catch (error) {
        console.error(error);
        setIsLoading4(false);
      }
    };

  getMatch_count2();
  }, []);

  isLoading4 ? (
      console.log("loading....2")
  ) : (
      data2.length > 0 ? (
          // console.log(data)
          data2.map(array => (
              // console.log(array),
              match_from_ids.push(array["userid_like_from"])
          ))
      ) : (
          console.log("No data available3")
      )
  )
  console.log("chatmain :::")
  console.log(match_from_ids)
  console.log(match_from_ids.length)

  const [data3, setData3] = useState([]);
  
  useEffect(() => {
    const getMatch_count3 = async () => {
        try {
          const responseData = [];
      
          for (let i = 0; i < match_from_ids.length; i++) {
            let response = null;
            let match_from_id = match_from_ids[i];
            
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
                console.log(result.data["body"][0]["nickname"]);
              } catch (error) {
                console.error(error);
                
                await new Promise((resolve) => setTimeout(resolve, 10000));
              }
            }
      
            responseData.push(response);
          }
      
          setData3(responseData);
        } catch (error) {
          console.error(error);
        }
      };
    getMatch_count3();
  }, []);



  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={selectedButton === 'Button 1' ? styles.activeButton_match : styles.inactiveButton_match}>
          <Button style={{borderRadius:8}} textColor='white' onPress={() => handleButtonPress('Button 1')}>
            매칭된 상대
          </Button>
        </View>
        <View style={selectedButton === 'Button 2' ? styles.activeButton_message : styles.inactiveButton_message}>
          <Button textColor='white' onPress={() => handleButtonPress('Button 2')}> 
            메시지
          </Button>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {selectedButton === 'Button 1' && (
          <View styles={styles.container_match}>
            {/* <List.Item title="매칭을 통해 대화를 나눠보세요." /> */}
            <ScrollView>
                <Text style={styles.title}>로그인 상태 : 사쿠라(user_id : 4)</Text>
                <Text style={styles.title}>현재 매칭된 유저 수 : {match_from_count}</Text>
                <Text style={styles.title}>좋아요 보낸 유저 : {data3}</Text>
                {match_from_ids.length > 0 && (
                  <MatchTemplate myProp={match_from_ids}></MatchTemplate>
                )}

            </ScrollView>
          </View>
        )}
        {selectedButton === 'Button 2' && (
          <View styles={styles.container_match}>
            {/* <List.Item title="여기는 메세지룸 표시" /> */}
            <ScrollView>
              {match_from_ids.length > 0 && (
                <ChatTemplate myProp={match_from_ids}></ChatTemplate>
              )}
            </ScrollView>
          </View>
        )}
      </View>
    </View>
  );
}
