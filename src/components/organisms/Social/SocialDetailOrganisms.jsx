import React, { useEffect, useState, useContext } from 'react';
import axios from 'axios';
import {View, 
    StyleSheet,
    Text,
    Dimensions,
    TouchableOpacity
    } from 'react-native';

const SocialDetailOrganisms = (props) =>  {

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

    button: {
        width: width,
        padding: 10,
    },

    view_social: {
        backgroundColor: color.light_gray,
        borderRadius: 10,
        padding: 10,
    },

    view_social_info: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },

    title: {
      fontSize: 15,
      color: color.gray
    },

    view_image: {
        flexDirection: 'row',
        marginRight: 5,
    },

    image_profile: {
        backgroundColor: color.gray,
        width: 40,
        height: 40,
        borderRadius: 2,
        marginRight: 2
    },
});

useEffect(() => {
    const getSocialDetails = async () => {
        try {
            const res = await axios.get('https://6emh0gtr77.execute-api.ap-northeast-1.amazonaws.com/SocialDetail?social_room_id=1');
            console.log(res.data);
        } catch(e) {
            console.log(e);
        }
    }

    getSocialDetails();

    const interval = setInterval(() => {
        getSocialDetails();
      }, 5000);
      return () => clearInterval(interval);
},[]);

return (
    <View>
        <View style={styles.container}>
            <View style={styles.view_social_info}>
                <View style={styles.view_image}>
                    <View style={styles.image_profile}></View>
                </View>
                <Text>김OO 26</Text>
            </View>
            <View style={styles.view_social}>
                <Text style={styles.title}>오늘 이거봤음</Text>
                <Text style={styles.title}>내일은 이거 볼듯</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.view_social_info}>
                <View style={styles.view_image}>
                    <View style={styles.image_profile}></View>
                </View>
                <Text>김OO 26</Text>
            </View>
            <View style={styles.view_social}>
                <Text style={styles.title}>오늘 이거봤음</Text>
                <Text style={styles.title}>내일은 이거 볼듯</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.view_social_info}>
                <View style={styles.view_image}>
                    <View style={styles.image_profile}></View>
                </View>
                <Text>김OO 26</Text>
            </View>
            <View style={styles.view_social}>
                <Text style={styles.title}>오늘 이거봤음</Text>
                <Text style={styles.title}>내일은 이거 볼듯</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.view_social_info}>
                <View style={styles.view_image}>
                    <View style={styles.image_profile}></View>
                </View>
                <Text>김OO 26</Text>
            </View>
            <View style={styles.view_social}>
                <Text style={styles.title}>오늘 이거봤음</Text>
                <Text style={styles.title}>내일은 이거 볼듯</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.view_social_info}>
                <View style={styles.view_image}>
                    <View style={styles.image_profile}></View>
                </View>
                <Text>김OO 26</Text>
            </View>
            <View style={styles.view_social}>
                <Text style={styles.title}>오늘 이거봤음</Text>
                <Text style={styles.title}>내일은 이거 볼듯</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.view_social_info}>
                <View style={styles.view_image}>
                    <View style={styles.image_profile}></View>
                </View>
                <Text>김OO 26</Text>
            </View>
            <View style={styles.view_social}>
                <Text style={styles.title}>오늘 이거봤음</Text>
                <Text style={styles.title}>내일은 이거 볼듯</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.view_social_info}>
                <View style={styles.view_image}>
                    <View style={styles.image_profile}></View>
                </View>
                <Text>김OO 26</Text>
            </View>
            <View style={styles.view_social}>
                <Text style={styles.title}>오늘 이거봤음</Text>
                <Text style={styles.title}>내일은 이거 볼듯</Text>
            </View>
        </View>
        <View style={styles.container}>
            <View style={styles.view_social_info}>
                <View style={styles.view_image}>
                    <View style={styles.image_profile}></View>
                </View>
                <Text>김OO 26</Text>
            </View>
            <View style={styles.view_social}>
                <Text style={styles.title}>오늘 이거봤음</Text>
                <Text style={styles.title}>내일은 이거 볼듯</Text>
            </View>
        </View>
    </View>
);
}

export default SocialDetailOrganisms;