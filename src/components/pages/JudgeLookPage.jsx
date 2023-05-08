import React, { useState, useEffect } from 'react';
import {View, StyleSheet, Text } from 'react-native';
import JudgeLookTemplate from '@components/templates/JudgeLookTemplate';
import axios from 'axios';

const JudgeLookPage = ({navigation}) => {
    const [judgeList, setJudgeList] = useState([{userId : 0, image_id: 0}]);
    const [index, setIndex] = useState(0);
    useEffect(() => {
        const getJudgeList = async () => {
            try {
                const res = await axios.post
                ('https://hdl1680qch.execute-api.ap-northeast-1.amazonaws.com/JudgeProfile',
                    {
                        userId : 1,
                        limit : 5
                    });

                    if (res !== '') {
                        setJudgeList(res.data);
                    }
            } catch(e) {
                console.log(e);
            }
        };
        getJudgeList();
    }, []);

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

        count_judge: {
            textAlign: 'right',
            fontWeight: 800
        }
    });

    function judgeLook (score) {
        axios.post(
            'https://es93a6wdv6.execute-api.ap-northeast-1.amazonaws.com/UserProfileScore',
            {
                user_id : judgeList[index].id,
                like_from_user_id : 1,
                score : score
            }
        ).then((res) => {
            if (index + 1 == judgeList.length) {
                navigation.navigate('JudgeSelfLook');
            } else {
                setIndex(index + 1);
            }
        });
    }

    const members = [
        { id: 1, src: 'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/1.png' },
        { id: 2, src: 'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/2.png' },
        { id: 3, src: 'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/3.png' },
        { id: 4, src: 'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/4.png' },
    ];

    if (judgeList.length > 0) {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.count_judge}
                >
                    {index} / {judgeList.length}
                </Text>
                <JudgeLookTemplate
                    src={'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/' + judgeList[index].image_id + '.png'}
                    memberId={judgeList[index].userId}
                    judgeLook={judgeLook}
                />
            </View>
        );
    } else {
        return (
            <View style={styles.container}>
                <Text
                    style={styles.count_judge}
                >
                    {index} / {members.length}
                </Text>
                <JudgeLookTemplate
                    // src={'https://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/' + judgeList[index].image_id + '.png'}
                    // memberId={memberId}
                    // judgeLook={judgeLook}
                />
            </View>
        );
    }
}

export default JudgeLookPage;