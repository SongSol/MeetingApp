import { useContext, useState } from 'react';
import {View, StyleSheet} from 'react-native';
import { ProgressBar, MD3Colors } from 'react-native-paper';

import Button from '@components/atoms/Button';
import CustomText from '@components/atoms/CustomText';
import AddressData from '@assets/signUpDataList/AddressData';
import RadioButton from '@components/atoms/RadioButton';
import AppContext from '@components/atoms/AppContext';

export default function Address({navigation}) {
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

    const [address, setAddress] = useState();
    const myContext = useContext(AppContext);

    return (
      <View style={{ flex: 1 }}>
        <ProgressBar progress={0.6} style={styles.progress} color={MD3Colors.error50} />
        <View style={styles.container}>
          <CustomText text="お住まいはどこですか" />
          <RadioButton 
            items={AddressData()}
            value={address}
            setValue={setAddress}
          />
          <Button 
            type="long" 
            title="次へ" 
            onPress={() => {
              myContext.address = address;
              navigation.navigate('Job')
            }} 
          />
        </View>
      </View>
  );
}
