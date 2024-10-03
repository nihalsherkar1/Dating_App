import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text, View} from 'react-native';
import Company from './components/Company';
import StyleTutorial from './components/StyleTutorial';

const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Company" component={Company} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
