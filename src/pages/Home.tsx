import React, {useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamsList} from '../types/StackParamsList';

//

const Home = ({
  navigation,
  route,
}: StackScreenProps<StackParamsList, 'Home'>) => {
  useEffect(() => {
    navigation.setOptions({
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
