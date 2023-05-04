import React, { useState, useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { Chip, BottomNavigation, Text} from 'react-native-paper';
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
        },
        barStyle: {
            paddingBottom: 48,
            height: 50,
        }
    });

    const tag = {
        1: "movie",
        2: "sports",
        3: "cooking",
        4: "game",
        5: "cleaning",
        6: "TV",
        7: "books",
        8: "shopping",
        9: "coding",
        10: "work"
    }

    const getCategory = async () => {
        try {
          const response = await axios.get(
            'https://q1nnafsjxe.execute-api.ap-northeast-1.amazonaws.com/getCategory'
            , {} 
          )
          console.log(response.data['body'][0]);
          console.log("결과값 확인");
        } catch(e){
          console.log(e);
        }
      }

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

    const MusicRoute = () => <Text>Music</Text>
    const AlbumsRoute = () => <Text>Albums</Text>
    const RecentsRoute = () => <Text>Recents</Text>

    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        {key: 'music', title: 'Music', icon: 'queue-music', color: '#3F51B5'},
        {key: 'albums', title: 'Albums', icon: 'album', color: '#009688'},
        {key: 'recents', title: 'Recents', icon: 'history', color: '#795548'},
        {key: 'purchased', title:'Purchased', icon: 'shopping-cart', color: '#607D8B'},
    ])

    const renderScene = BottomNavigation.SceneMap({
        music: MusicRoute,
        albums: AlbumsRoute,
        recents: RecentsRoute,
    })

    return (
        <View>
            <View style={styles.row}>
                {selectedChips.length < 3 && (
                    <Text style={styles.warning}>⚠️ 少なくとも３個以上のタグを選択してください ⚠️</Text>
                )}
                {Object.keys(tag).map((key) => (
                    <Chip key={key} onPress={() => handleChipPress(key)} selected={selectedChips.includes(key)} style={styles.chip}>
                        {tag[key]}
                    </Chip>
                 ))}
            </View>
            <View>
                {/* <Chip onPress={() => console.log(selectedChips)} style={styles.button} mode="outlined"> */}
                <Chip onPress={() => getCategory()} style={styles.button} mode="outlined">
                    次へ
                </Chip>
            </View>
            {/* <BottomNavigation navigationState={{index, routes}} onIndexChange={setIndex} renderScene={renderScene} /> */}
        </View>
    );
}