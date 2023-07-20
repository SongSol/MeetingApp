import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Button from '@components/atoms/Button'

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
  text: {
    fontSize: '25px',
  }
});

export default function InitialPage({navigation}) {
	const title = '사진평가재도전';
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
                안타깝게도 심사에 탈락하셨습니다. 
            </Text>
            <Text style={styles.text}>
                다시 도전해주세요!!
            </Text>
			<View style={{margin:30}}>
			<Button title={title} w="" h="" c="" onPress={() => navigation.navigate('PictureUploadPage')} />
			</View>
        	<StatusBar style="auto" />
		</View>
	)
};

