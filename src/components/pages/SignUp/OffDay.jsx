import { useContext, useEffect, useState } from 'react';
import CustomText from '@components/atoms/CustomText';
import OffDayData from '@assets/SignUpDataList/OffDayData';
import {View, StyleSheet} from 'react-native';
import Button from '@components/atoms/Button';
import { ProgressBar, MD3Colors } from 'react-native-paper';
import RadioButton from '@components/atoms/RadioButton';
import AppContext from '@components/atoms/AppContext';

export default function OffDay({navigation}) {
    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          justifyContent: 'center',
        },
        button: {
            width: 100,
            height: 50,
            margin: 10
        },
        progress: {
          height: 10,
          width:undefined,
          backgroundColor: '#eee',
        }
    });
    const Item = ({title}) => (
      <View style={styles.item}>
        <Button mode="text" onPress={() => navigation.navigate('JudgeLookPage')}>
          {title}
        </Button>
      </View>
    );

    const [offday, setOffday] = useState();
    const myContext = useContext(AppContext);
    useEffect(() => {
      console.log(myContext);
    }, [])

    return (
      <View style={{ flex: 1 }}>
        <ProgressBar progress={0.9} style={styles.progress} color={MD3Colors.error50} />
        <View style={styles.container}>
          <CustomText text="お休みはいつですか"/>
          <RadioButton
            items={OffDayData()}
            value={offday}
            setValue={setOffday}
          />
          <Button 
            type="long" 
            title="次へ" 
            onPress={() => {
              myContext.offday = offday;
              navigation.navigate('JudgeLookPage');
            }} 
          />
        </View>
      </View>
  );
}
