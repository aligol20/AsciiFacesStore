/**
 * Returns suitable 'url' according to the OS that is runing the code
 */
import {Platform} from 'react-native';

/**
 * Important: if you use an android device running the program,
 * you should set you computer Ip address,
 * to let android device connecting to the server correctly.
 */
export const url =
  Platform.OS === 'android'
    ? 'http://192.168.1.2:3000'
    : 'http://localhost:3000';
