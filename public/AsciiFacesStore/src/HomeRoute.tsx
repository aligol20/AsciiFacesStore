import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import Home from './Home';
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
          headerTitleStyle: {
            color: 'white',
          },
          headerStyle: {backgroundColor: '#20B87B'},
        })}
      />
    </Stack.Navigator>
  );
};
export default HomeRoute;
