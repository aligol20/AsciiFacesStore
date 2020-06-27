import {Platform} from 'react-native';

export const url =
  Platform.OS === 'android'
    ? 'http://192.168.1.2:3000'
    : 'http://localhost:3000';
