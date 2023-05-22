import { useEffect, useState } from 'react';
import {View, StyleSheet, ScrollView, Dimensions } from 'react-native';
import axios from 'axios';
import SocialListOrganisms from '@components/organisms/Social/SocialListOrganisms';

const JudgeLookTemplate = props =>  {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://q1nnafsjxe.execute-api.ap-northeast-1.amazonaws.com/getCategory');
            setData(response.data['body']);
        } catch (error) {
            console.error(error);
        }
        };

        fetchData();
    }, []);

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },

        social_list: {
            backgroundColor: '#fff',
        }
    });

    if (data.length > 0) {
        return (
            <ScrollView
            showsVerticalScrollIndicator={false}>
                {data.map(tag =>{
                    return (
                        <SocialListOrganisms 
                        styles= {styles.social_list}
                        title = {tag.title}/>
                    )
                })}
            </ScrollView>
        );
    } else {
        return (
            <View></View>
        );
    }
}

export default JudgeLookTemplate;