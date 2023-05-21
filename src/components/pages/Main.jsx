import  { useState, useCallback }  from 'react';
import {
    View, StyleSheet, Text, RefreshControl, ScrollView, } from 'react-native';
import { Card } from 'react-native-paper';

export default function Main({}) {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: 'pink',
            // alignItems: 'center', 안에 들어오는 아이템 위아래를 중앙정렬
            justifyContent: 'center', // 안에 적는 글자 중앙정렬
            flexDirection: 'column',
        },
        topView: {
            flex: 0.2,
            backgroundColor: 'green',
        },
        middleView: {
            flex: 0.7,
            backgroundColor: 'red',
            flexDirection: 'row',
        },
        bottomView: {
            flex: 0.1,
            backgroundColor: 'yellow',
            alignItems: 'center',
            justifyContent: 'center'
        },
        card: {
            flex: 1,
        },
        cardCover: {
            margin: 10,
        }
    });

    const [refreshing, setRefreshing] = useState(false);

    const handleClick = (event) => {
        console.log("dddd");
        alert("ddd");
    }
    const onRefresh = useCallback(() => {
        setRefreshing(true);
        setTimeout(() => setRefreshing(false), 2000);
    }, []);

    return (    
        <View style={styles.container}>
            <ScrollView
            contentContainerStyle={styles.scrollView}
            refreshControl={ <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}>
                <View style={styles.topView}>
                    <Card style={styles.card} >
                        <Card.Cover source={{ uri: 'http://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/1.png' }} onClick={handleClick}/>
                    </Card>
                </View>
                <View style={styles.middleView}>
                    <Card style={styles.card}>
                        <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/700'}} onClick={handleClick}/>
                        <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/701'}} onClick={handleClick}/>
                        <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/702'}} onClick={handleClick}/>
                    </Card>
                    <Card style={styles.card}>
                    <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/703'}} onClick={handleClick}/>
                        <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/704'}} onClick={handleClick}/>
                        <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/705'}} onClick={handleClick}/>
                    </Card>
                </View>
            </ScrollView>
            <View style={styles.bottomView}>
                <Text>푸터 넣을공간?</Text>
            </View>
        </View>
    );
}
