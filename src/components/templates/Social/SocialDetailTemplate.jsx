import {StyleSheet, ScrollView} from 'react-native';
import SocialDetailOrganisms from '@components/organisms/Social/SocialDetailOrganisms';

const SocialDetailTemplate = props =>  {
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

    return (
        <ScrollView
            showsVerticalScrollIndicator={false}>
            <SocialDetailOrganisms />
        </ScrollView>
    );
}

export default SocialDetailTemplate;