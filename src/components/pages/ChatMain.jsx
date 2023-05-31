import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, List } from 'react-native-paper';
import axios from 'axios';

export default function ChatMain() {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:"white"
    },
    buttonContainer: {
      flexDirection: 'row',
      // justifyContent: 'space-between',
      paddingHorizontal: 20,
      paddingTop: 20,
      justifyContent: 'center',
    },
    activeButton: {
      backgroundColor: '#FF71A6',
      // borderRadius: 8,
      padding: 5,
      width: 130,
      justifyContent: 'center',
    },
    inactiveButton: {
      padding: 5,
      width: 130,
      // borderRadius: 8,
      backgroundColor: '#dcdcdc',
      justifyContent: 'center',
    },
    contentContainer: {
      flex: 1,
      paddingHorizontal: 20,
      paddingTop: 20,
    },
  })

  const tags = {}

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
        try {
            const response = await axios.get('https://q1nnafsjxe.execute-api.ap-northeast-1.amazonaws.com/getCategory');
            setData(response.data['body']);
            setIsLoading(false);
        } catch (error) {
            console.error(error);
            setIsLoading(false);
        }
        };

        fetchData();
    }, []);

    isLoading ? (
        console.log("loading....")
      ) : (
          data.length > 0 ? (
            // console.log(data)
            data.map(array => (
                // console.log(array)
                tags[array["id"]] = array["title"]
            ))
          ) : (
            console.log("No data available")
          )
    )
    console.log(tags)

  const [selectedButton, setSelectedButton] = useState("Button 1");

  const handleButtonPress = (button) => {
    setSelectedButton(button);
  };

  

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <View style={selectedButton === 'Button 1' ? styles.activeButton : styles.inactiveButton}>
          <Button textColor='white' onPress={() => handleButtonPress('Button 1')} style={{elevation: 0}}>
            매칭된 상대
          </Button>
        </View>
        <View style={selectedButton === 'Button 2' ? styles.activeButton : styles.inactiveButton}>
          <Button textColor='white' onPress={() => handleButtonPress('Button 2')} style={{elevation: 0}}> 
            메시지
          </Button>
        </View>
      </View>
      <View style={styles.contentContainer}>
        {selectedButton === 'Button 1' && (
          <View>
            <List.Item title="매칭을 통해 대화를 나눠보세요." />
          </View>
        )}
        {selectedButton === 'Button 2' && (
          <View>
            <List.Item title="여기는 메세지룸 표시" />
          </View>
        )}
      </View>
    </View>
  );
}
