/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
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
