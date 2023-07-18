import {View, StyleSheet, Text, Dimensions} from 'react-native';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

const MatchTemplate = ({myProp}) =>  {

    const color = require('@assets/color.json');

    var width = Dimensions.get('window').width;
    var height = Dimensions.get('window').height;

    const styles = StyleSheet.create({
        container: {
            padding: 10,
            marginTop: 5,
            marginBottom: 5,
            width: width,
        },

        view_social: {
            backgroundColor: color.light_gray,
            borderRadius: 10,
            padding: 10,
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
            backgroundColor: color.gray,
            width: 40,
            height: 40,
            borderRadius: 2,
            marginRight: 2,
        },
    });

    const [data2, setData2] = useState([]);
    const [isLoading2, setIsLoading2] = useState(true);
    const match_from_ids2 = []

    useEffect(() => {
    const getMatch_count2 = async () => {
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
      getMatch_count2();
    }, []);

    isLoading2 ? (
        console.log("loading....2")
      ) : (
          data2.length > 0 ? (
            // console.log(data)
            data2.map(array => (
                // console.log(array)
                match_from_ids2.push(array)
            ))
          ) : (
            console.log("No data available2")
          )
    )

    if (match_from_ids2.length > 0) {
        return (
            match_from_ids2.map(tag => ( 
                <View style={styles.container}>
                    <View style={styles.view_social}>
                        <View style={styles.view_social_info}>
                            <View style={styles.view_image}>
                                <View style={styles.image_profile}><Icon name="heart" size={20} color="pink" /></View>                
                            </View>                            
                            <Text> {tag}님이 좋아요를 보냈습니다.</Text>
                        </View>
                    </View>
                </View>
            ))
        );
    } else {
        return (
            <View>
                <Text>좋아요를 보낸 유저가 없습니다.</Text>
            </View>
        );
    }
}

export default MatchTemplate;