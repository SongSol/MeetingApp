import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip, Text} from 'react-native-paper';
import axios from 'axios';


export default function TagSelect({navigation}) {
    const styles = StyleSheet.create({
        chip: {
            justifyContent: 'center',
            margin:4,
            marginBottom: 10,
        },
        row: {
            display: "inline-block",
            flexDirection: 'row',
            flexWrap: 'wrap',
            paddingHorizontal: 12,
            marginTop: 10,
            marginBottom: 10,
        },
        warning: {
            color: 'red', 
            fontSize:15, 
            fontWeight:'bold',
            marginBottom: 10,
        },
        button:{
            width: 100,
            height: 50,
            marginTop: 50,
            marginLeft: 140,
            alignItems: 'center',
        }
    });

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

    const [selectedChips, setSelectedChips] = useState([]);

    function handleChipPress(chipLabel) {
        setSelectedChips(prevSelectedChips => {
            if (prevSelectedChips.includes(chipLabel)) {
                return prevSelectedChips.filter(label => label !== chipLabel);
            } else {
                return [...prevSelectedChips, chipLabel];
            }
        });
    }

    return (
        <View>
            <View style={styles.row}>
                {selectedChips.length < 3 && (
                    <Text style={styles.warning}>⚠️ 少なくとも３個以上のタグを選択してください ⚠️</Text>
                )}
                {Object.keys(tags).map((key) => (
                    <Chip key={key} onPress={() => handleChipPress(key)} selected={selectedChips.includes(key)} style={styles.chip}>
                        {tags[key]}
                    </Chip>
                 ))}
            </View>
            <View>
                <Chip onPress={() => console.log(selectedChips)} style={styles.button} mode="outlined">
                    次へ
                </Chip>
            </View>
        </View>
    );
}