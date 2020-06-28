/**
 * Component for rendering the 20 AsciiFaces as a grid.
 */
import React from 'react';
import {Text, View} from 'react-native';
import FormatDate from './functions/FormatDate';
import FormatPrice from './functions/FormatPrice';
import {styles} from './Styles';

/**
 * For rendering the every section before ads,
 * we should use 'map'.
 * As readMe file included in the test file, every product should be viewed with its real size,
 * Due to 'FlatList' limitation we couldn't show a Grid with the freedom in height and number of columns in every row,
 * So I used map for rendering the every 20 products,
 * As you saw in the 'Home.tsx', our main list maintainer is handled with 'SectionList'. So it doesn't affect the performance.
 *
 * @param item - value comes from 'sectionList'
 */

const RenderItem = (item: any) => {
  console.log(item, 'item ');
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
