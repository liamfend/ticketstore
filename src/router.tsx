import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StackParamsList} from './types/StackParamsList';
import {} from '@react-navigation/stack';

import Home from './pages/Home';
import Consult from './pages/Consult';
import Mine from './pages/Mine';

const Stack = createStackNavigator<StackParamsList>();

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
    </Stack.Navigator>
  );
}

export default App;
