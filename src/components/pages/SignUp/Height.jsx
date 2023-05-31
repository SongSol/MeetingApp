import { useContext, useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import Button from '@components/atoms/Button';
import RadioButton from '@components/atoms/RadioButton';
import AppContext from '@components/atoms/AppContext';
import CustomText from '@components/atoms/CustomText';

export default function Height({navigation}) {
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
      flexDirection: 'column',
    },
    topView: {
      justifyContent: 'center',
      textAlign: 'left',
      flex: 0.2,
    },
    middleView: {
      flex: 0.7,
      width: 300,
    },
    bottomView: {
      flex: 0.1,
      justifyContent: 'flex-end',
    },
    progress: {
      height: 10,
      width:undefined,
      backgroundColor: '#eee',
    }
  });

  const heightType = Object.values(require('@assets/signUpDataList/HeightType.json'));
  const myContext = useContext(AppContext);
  const [height, setHeight] = useState(''); 

  return (
    <View style={{ flex: 1 }}>
      <ProgressBar progress={0.4} style={styles.progress} color={MD3Colors.error50} />
      <View style={styles.container}>
        <View style={styles.topView}>
          <CustomText 
              style={"title"}
              variant="headlineSmall" 
              text="身長はいくつですか？" 
          />
        </View>
        <View style={styles.middleView}>
          <RadioButton 
            items={heightType} 
            value={height} 
            setValue={setHeight}/>
        </View>
        <View style={styles.bottomView}>
          <Button 
            type="long" 
            title="次へ" 
            onPress={() => {
              myContext.height = height;
              navigation.navigate('BodyType')
              }} 
          />
        </View>
      </View>
    </View>
  );
}
