/**
 * For making navigation between screens possible,
 * we should create a component like follow:
 * more info @link https://reactnavigation.org/docs/hello-react-navigation
 */

import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Home';
import {styles} from './Styles';
const Stack = createStackNavigator();

const HomeRoute = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation, route}) => ({
          headerShown: true,
          headerTitle: 'AsciiFacesStore',
          headerTitleStyle: styles.header_color,
          headerStyle: styles.header_background,
        })}
      />
    </Stack.Navigator>
  );
};
export default HomeRoute;
