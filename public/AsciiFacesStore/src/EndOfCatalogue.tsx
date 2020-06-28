/**
 * A message for the time our list reaching end.
 */
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Styles';

/**
 * Simple function that returns '~ end of catalogue ~' message
 */
const EndOfCatalogue = () => {
  return (
    <View style={styles.end_message}>
      <Text>{'~ end of catalogue ~'}</Text>
    </View>
  );
};
export default EndOfCatalogue;
