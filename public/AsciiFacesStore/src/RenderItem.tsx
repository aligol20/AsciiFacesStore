import React from 'react';
import {View, Text} from 'react-native';
import FormatPrice from './functions/FormatPrice';
import FormatDate from './functions/FormatDate';
import {styles} from './Styles';

const RenderItem = (item: any) => {
  return (
    <View style={styles.item_container}>
      {item &&
        item.item &&
        item.item.map((x: any) => (
          <View key={x.id} style={styles.item_organizer}>
            <Text style={[styles.face, {fontSize: x.size}]}>{x.face}</Text>
            <Text style={styles.price}>{FormatPrice(x.price)}</Text>
            <Text style={styles.size}>{x.size}</Text>
            <Text style={styles.date}>{FormatDate(x.date)}</Text>
          </View>
        ))}
    </View>
  );
};

export default RenderItem;
