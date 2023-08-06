import  { useState, useCallback, useEffect }  from 'react';
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
    },
    text: {
      marginLeft: 10,
      justifyContent: 'center', // 안에 적는 글자 중앙정렬
      alignItems: 'center'
    }
  });

  const [refreshing, setRefreshing] = useState(false);
  const [users1, setUsers1] = useState([]);
  const [users2, setUsers2] = useState([]);

  const handleClick = () => {
      console.log("dddd");
      alert("ddd");
      
  }

  useEffect(() => {
    const getUser = async () => {
      try { 
        const response = await axios.get(
          'https://gbp4u8anb3.execute-api.ap-northeast-1.amazonaws.com/User'
        )
        const halfLength = Math.ceil(response.data.body.length / 2);

        const extractedData1 = response.data.body.slice(0, halfLength).map(user => ({
          id: user.id,
          nickname: user.nickname
        }));
        setUsers1(extractedData1);

        const extractedData2 = response.data.body.slice(halfLength).map(user => ({
          id: user.id,
          nickname: user.nickname
        }));
        setUsers2(extractedData2);

      } catch(e){
        alert("getUser 실패!");
        console.log(e);
      }
    }
    getUser();
  }, []);

  const onRefresh = useCallback(() => {
      setRefreshing(true);
      setTimeout(() => setRefreshing(false), 1000);
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
            {users1.map((user) => (
              <>
                <Card.Cover style={styles.cardCover} source={{ uri: `http://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/${user.id}.png`}} onPress={handleClick}/>
                <Text style={styles.text}>{user.nickname}</Text>
              </>
            ))}
            
          </Card>
          <Card style={styles.card}>
            {users2.map((user) => (
              <>
                <Card.Cover style={styles.cardCover} source={{ uri: `http://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/${user.id}.png`}} onPress={handleClick}/>
                <Text style={styles.text}>{user.nickname}</Text>
              </>
            ))}
          </Card>
        </View>
      </ScrollView>
      <View style={styles.bottomView}>
        <Text>푸터 넣을공간푸터 넣을공간푸터 넣을공간푸터 넣을공간푸터 넣을공간</Text>
      </View>
    </View>
  );
}
