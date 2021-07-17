import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const Mine = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text>Mine</Text>
    </View>
  );
};

export default Mine;

const styles = StyleSheet.create({
  wrapper: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
