import React, {PropsWithChildren, useEffect, useRef} from 'react';
import {} from 'react';
import {Animated, Text} from 'react-native';
interface OneProps {
  style: Object;
}

const One = ({children, style}: PropsWithChildren<OneProps>) => {
  const FadeIn = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    Animated.parallel([
      Animated.timing(FadeIn, {
        duration: 2000,
        toValue: 1,
        useNativeDriver: true,
      }),
      // Animated.timing(FadeIn, {
      //   duration: 2000,
      //   toValue: 300,
      //   useNativeDriver: true,
      // }),
    ]).start();
  }, [FadeIn]);
  return (
    <Animated.View
      style={{
        ...style,
        opacity: FadeIn,
      }}>
      <Text>afdsf</Text>
      {children}
    </Animated.View>
  );
};

export default One;
