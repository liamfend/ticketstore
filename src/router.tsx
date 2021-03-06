import * as React from 'react';
// import {createStackNavigator} from '@react-navigation/stack';
import {StackParamsList} from './types/StackParamsList';

import Home from './pages/Home';
import Consult from './pages/Consult';
import Mine from './pages/Mine';
import ShareDetails from './components/ShareDetails';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
const Stack = createSharedElementStackNavigator<StackParamsList>();

function App() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={{title: 'aa'}} />
      <Stack.Screen
        name="Consult"
        component={Consult}
        initialParams={{userId: 'a'}}
      />
      <Stack.Screen name="Mine" component={Mine} />
      <Stack.Screen name="ShareDetails" component={ShareDetails} />
    </Stack.Navigator>
  );
}

export default App;
