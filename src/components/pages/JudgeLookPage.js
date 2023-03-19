import React, { useState } from 'react';
import {View, StyleSheet, Text } from 'react-native';
import JudgeLookTemplate from '@components/templates/JudgeLookTemplate';

export default function JudgeLookPage({navigation}) {
    const [memberId, setMemberId] = useState(1);
    
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

        score_btn: {
            width: 100,
            height: 50,
            margin: 10
        },

        count_judge: {
            textAlign: 'right',
            fontWeight: 800
        }
    });

    const members = [
        { id: 1, src: require('@assets/images/김채원.png') },
        { id: 2, src: require('@assets/images/사쿠라.png') },
        { id: 3, src: require('@assets/images/카즈하.png') },
        { id: 4, src: require('@assets/images/허윤진.png') },
        { id: 5, src: require('@assets/images/hong.png') }
    ];

    return (
        <View style={styles.container}>
            <Text
                style={styles.count_judge}
            >
                {memberId} / {members.length}
            </Text>
            {
                members.map( member => {
                    if(memberId === member.id) {
                        return (
                            <JudgeLookTemplate
                                src={member.src}
                                onPress={ memberId < members.length ? () => setMemberId(memberId + 1) : () => navigation.navigate('JudgeSelfLook')}
                                memberId={this.memberId}
                                key={member.id}
                            />
                        )
                    }
                })
            }
        </View>
    );
}