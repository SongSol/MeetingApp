import {View, 
        StyleSheet,
        Text,
        Dimensions,
        TouchableOpacity
        } from 'react-native';

const SocialListOrganisms = (props) =>  {

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
            marginRight: 2
        },
    });

    return (
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <View style={styles.view_social}>
                <View style={styles.view_social_info}>
                    <View style={styles.view_image}>
                        <View style={styles.image_profile}></View>
                        <View style={styles.image_profile}></View>
                        <View style={styles.image_profile}></View>
                    </View>
                    <Text>+253</Text>
                </View>
                <Text style={styles.title}>{props.tag.title}</Text>
            </View>
        </TouchableOpacity>
    );
}

export default SocialListOrganisms;