import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface Props {}

const Consult = (props: Props) => {
  return (
    <View style={styles.wrapper}>
      <Text>consult</Text>
    </View>
  );
};

export default Consult;

const styles = StyleSheet.create({
  wrapper: {
    alignContent: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
