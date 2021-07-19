import React, {useRef} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef,
} from 'react-native-shared-element';
import {ShareDetailsStackScreenProps} from '../types/StackParamsList';
import Heroes from '../assets/Heroes';
interface Props extends ShareDetailsStackScreenProps {}

const ShareDetails = ({navigation, route}: Props) => {
  const detail = useRef(
    Heroes.find(item => item.id === route.params.id),
  ).current;
  return detail ? (
    <View>
      <View style={styles.wrapper}>
        <Text>{detail.name}</Text>
      </View>
      <Image
        style={{height: 200, width: '100%', borderRadius: 5}}
        source={detail.photo}
        resizeMode={'contain'}
      />
      <View style={styles.wrapper}>
        <Text>{detail?.description}</Text>
      </View>
    </View>
  ) : (
    <></>
  );
};

export default ShareDetails;

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 5,
    borderRadius: 10,
  },
});
