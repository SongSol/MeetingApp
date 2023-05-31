import React, { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Card } from 'react-native-paper';
import Carousel, { Pagination } from 'react-native-snap-carousel';

export default function CustomCarousel() {
  const color = require('@assets/color.json');
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: color.light_gray,
    },
    slideTitle: {
      fontSize: 18,
      color: 'white',
    },
    paginationContainer: {
    paddingVertical: 10,
    right: 140,
    },
    paginationDot: {
      width: 10,
      height: 5,
      borderRadius: 5,
      // marginHorizontal: 1,
      backgroundColor: color.red,
    },  
    overlay: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(0, 0, 0, 0.6)',
    },
    titleText: {
      color: color.red,
    },
    card: {
      flex: 1,
      backgroundColor: 'red',
    },
    cardCover: {
      margin: 10,
    }
  });
  
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);

  const data = [
    { uri: 'http://hyple.s3.ap-northeast-1.amazonaws.com/public/profile_image/1.png' },
    { uri: 'https://picsum.photos/701' },
    { uri: 'https://picsum.photos/702' },
  ];

  const renderItem = ({ item, index }) => {
    return (
      <Card style={styles.card} >
        <Card.Cover resizeMode="cover" source={{ uri: item.uri }}/>
        {index === 0 &&
        (<View style={styles.overlay}> 
          <Text style={styles.titleText}>HYPLE</Text>
        </View>)
        }
      </Card>
    );
  };

  return (
    <View style={styles.container}>
      <Carousel
        style={styles.corousel}
        data={data}
        renderItem={renderItem}
        sliderWidth={350}
        itemWidth={350}
        onSnapToItem={(index) => setActiveSlideIndex(index)}
      />
      <Pagination
          dotsLength={data.length}
          activeDotIndex={activeSlideIndex}
          containerStyle={styles.paginationContainer}
          dotStyle={styles.paginationDot}
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
      />
    </View>
  );

}
