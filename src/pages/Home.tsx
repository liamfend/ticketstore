import React from 'react';
import {StyleSheet, SafeAreaView} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {StackParamsList} from '../types/StackParamsList';
import One from '../components/One';
import Two from '../components/Two';
import ShareList from '../components/ShareList';

const Home = ({
  navigation,
  route,
}: StackScreenProps<StackParamsList, 'Home'>) => {
  return (
    <SafeAreaView>
      <ShareList />
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
