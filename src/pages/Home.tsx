import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {StackParamsList} from '../types/StackParamsList';

//

const Home = ({
  navigation,
  route,
}: NativeStackScreenProps<StackParamsList, 'Home'>) => {
  useEffect(() => {
    navigation.setOptions({
      headerShadowVisible: false,
      headerTranslucent: true,
      headerBlurEffect: 'dark',
      headerStyle: {
        backgroundColor: 'red',
      },
    });
  }, [navigation]);
  return (
    // <View style={styles.wrapper}>
    //   <Text>Home</Text>

    //   <Button
    //     title={'click'}
    //     onPress={() => {
    //       navigation.navigate('Consult', {userId: 'aaa'});
    //       // navigation;
    //       //props.navigation.navigate('Mine');
    //     }}
    //   />

    // </View>
    <SafeAreaView>
      <ScrollView>
        <Text>adafdsaf</Text>
        <View style={styles.scroll_view}>
          <Text>test</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  scroll_view: {
    height: 2000,
    backgroundColor: 'red',
  },
});
