/**
 * The app starts from here.
 * I used ReactNavigation as a navigator.
 * For more info visit @link https://reactnavigation.org/docs/getting-started
 */

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import 'react-native-gesture-handler';
import HomeRoute from './src/HomeRoute';

declare const global: {HermesInternal: null | {}};

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <HomeRoute />
    </NavigationContainer>
  );
};

export default App;
