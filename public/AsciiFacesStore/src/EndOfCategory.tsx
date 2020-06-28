/**
 * A message for when our list reaching end.
 */
import React from 'react';
import {View, Text} from 'react-native';
import {styles} from './Styles';

/**
 * Simple function that returns 'end of category' message
 */
const EndOfCategory = () => {
  return (
    <View style={styles.end_message}>
      <Text>{'end of category'}</Text>
    </View>
  );
};
export default EndOfCategory;
