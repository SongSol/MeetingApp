import  { useState, useCallback }  from 'react';
import { View, StyleSheet, Text, RefreshControl, ScrollView, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-paper';
import axios from 'axios';
import Carousel from '@components/atoms/CustomCarousel';

export default function Main({}) {

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      // backgroundColor: 'pink',
      // alignItems: 'center', // 안에 들어오는 아이템 위아래를 중앙정렬
      justifyContent: 'center', // 안에 적는 글자 중앙정렬
      flexDirection: 'column',
    },
    topView: {
      flex: 0.2,
      // backgroundColor: 'green',
    },
    middleView: {
      flex: 0.7,
      // backgroundColor: 'red',
      flexDirection: 'row',
    },
    bottomView: {
      flex: 0.1,
      backgroundColor: 'pink',
      bottom: 0,
      left: 0,
      right: 0,
      height: 60,
      position: 'absolute',
    },
    card: {
      flex: 1,
    },
    cardCover: {
      margin: 10,
    }
  });

  const [refreshing, setRefreshing] = useState(false);

  const handleClick = () => {
      console.log("dddd");
      alert("ddd");
      // getUser();
  }
  const getUser = async () => {
    try { 
      const response = await axios.get(
        'https://gbp4u8anb3.execute-api.ap-northeast-1.amazonaws.com/User'
      )
      console.log(response);
    } catch(e){
      alert("login失敗!");
      console.log(e);
    }
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
          <Carousel />
        </View>
        <View style={styles.middleView}>
          <Card style={styles.card}>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/700'}} onPress={handleClick}/>
            <Text>    이름 나이</Text>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/701'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/702'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/703'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/704'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/705'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/706'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/707'}} onPress={handleClick}/>
          </Card>
          <Card style={styles.card}>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/708'}} onPress={handleClick}/>
            <Text>    이름 나이</Text>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/709'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/710'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/711'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/712'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/713'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/714'}} onPress={handleClick}/>
            <Card.Cover style={styles.cardCover} source={{ uri: 'https://picsum.photos/715'}} onPress={handleClick}/>
          </Card>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <Text>푸터 넣을공간푸터 넣을공간푸터 넣을공간푸터 넣을공간푸터 넣을공간</Text>
      </View>
    </View>
  );
}
