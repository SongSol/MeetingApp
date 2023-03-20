import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.text}>
                안타깝게도 심사에 탈락하셨습니다. 
            </Text>
            <Text style={styles.text}>
                다시 도전해주세요!!
            </Text>
			
        	<StatusBar style="auto" />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
  text: {
    fontSize: '20px',
  }
});