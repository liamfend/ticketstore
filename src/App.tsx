import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StyleSheet, Text, View, SafeAreaView, StatusBar} from 'react-native';
import Routers from './router';
const App = () => {
  return (
    <NavigationContainer>
      <Routers />
      {/* <SafeAreaView>
        <StatusBar />
        <View style={styles.wrapper}>
          <Text>{'this is  text'}</Text>
        </View>
      </SafeAreaView> */}
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  wrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'red',
    flex: 1,
  },
});
