import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {HomeScreenNavigationProps} from '../types/StackParamsList';

import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import Heros from '../assets/Heroes';
import type {Hero} from '../types/Hero';

interface Props {}

const ShareList = (_props: Props) => {
  const nav = useNavigation<HomeScreenNavigationProps>();
  const _renderItem = ({id, photo, name}: Hero) => {
    return (
      <TouchableWithoutFeedback
        onPress={() => {
          nav.navigate('ShareDetails', {id});
        }}>
        <View key={id} style={styles.item}>
          <Image
            source={photo}
            style={{height: 200, width: '100%', borderRadius: 5}}
            resizeMode={'cover'}
          />
          <View>
            <Text>{name}</Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  };

  return (
    <SafeAreaView>
      <FlatList<Hero>
        data={Heros}
        renderItem={list => _renderItem(list.item)}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {},
  item: {
    flex: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});

export default ShareList;
