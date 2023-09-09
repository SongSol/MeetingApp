import React, { useEffect, useState, useContext } from 'react';
import {View, StyleSheet, Text } from 'react-native';
import Image from '@components/atoms/Image';
import BarChartView from '@components/templates/BarChart';
import SelfLookScore from '@components/templates/SelfLookScore';
import { Divider } from 'react-native-paper';
import axios from 'axios';
import Button from '@components/atoms/Button';

export default function JudgeSelfLook({navigation}) {
    
    const [userScore, setUserScore] = useState();

    useEffect(() => {
        const getUserScore = async () => {
            try {
                const res = await axios.get('https://es93a6wdv6.execute-api.ap-northeast-1.amazonaws.com/UserProfileScore?', {
                    params: {
                    user: 1
                  }});
                  
                setUserScore(res.data[0]);
            } catch(e) {
                console.log(e);
            }
        }

        getUserScore();

        const interval = setInterval(() => {
            getUserScore();
          }, 5000);
          return () => clearInterval(interval);
    },[]);

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },

        image: {
            width: 300,
            height: 300,
            borderRadius: 20,
        },

        bar_chart: {
            flex: 2
        },

        score_container: {
            flexDirection: 'row',
            margin: 15
        },

        text_judge_user: {
            fontWeight: 800,
            fontSize: 20,
            margin : 10,
        },

        divider: {
            width: 1, height: '100%'
        }
    });

    let passJudgeText = ''
    if (userScore !== undefined) {
        passJudgeText = userScore.avg > 3 ? '축하합니다! 심사에 통과하셨습니다!' : '・' + userScore.sum + '명이 심사에 참여하였습니다.'
    }
    const passJudge = 
    <View>
        <Button 
            disabled
            onPress={() => console.log("시작")}
            type={'Long'}
            title='시작하기'
        />
    </View>

    if (userScore !== undefined) {
        return (
            <View style={styles.container}>
                <Image 
                    type='Profile'
                    src={'http://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/1.png'}
                />
                <View style={styles.score_container}>
                    <SelfLookScore 
                        userScore={userScore}
                    />
                    <Divider 
                        style={styles.divider}
                        horizontalInset={true}
                        bold={true}
                    />
                    <BarChartView 
                        style={styles.bar_chart}
                        userScore={userScore}
                    />
                </View>
                <Text style={styles.text_judge_user}>{passJudgeText}</Text>
                {userScore.avg > 3 ? passJudge : <></>}
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Image 
                    type='Profile'
                    src={'http://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/1.png'}
                />
                <View style={styles.score_container}>
                    <SelfLookScore 
                        userScore={userScore}
                    />
                    <Divider 
                        style={styles.divider}
                        horizontalInset={true}
                        bold={true}
                    />
                    <BarChartView 
                        style={styles.bar_chart}
                        userScore={userScore}
                    />
                </View>
                <Text style={styles.text_judge_user}>・명이 심사에 참여하였습니다.</Text>
                {passJudge}
            </View>
        );
    }
}