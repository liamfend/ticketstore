import React, {useEffect} from 'react';
import {StyleSheet, Text, View, ScrollView, SafeAreaView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamsList} from '../types/StackParamsList';
import One from '../components/One';
import Two from '../components/Two';

//

const Home = ({
  navigation,
  route,
}: StackScreenProps<StackParamsList, 'Home'>) => {
  useEffect(() => {
    navigation.setOptions({
      // headerStyle: {
      //   backgroundColor: 'red',
      // },
    });
  }, [navigation]);
  return (
    <SafeAreaView>
      {/* <Text>adafdsaf</Text> */}

      {/* <One style={styles.scroll_view}>
        <Text>test</Text>
      </One> */}
      <Two />
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
    backgroundColor: 'green',
  },
});
