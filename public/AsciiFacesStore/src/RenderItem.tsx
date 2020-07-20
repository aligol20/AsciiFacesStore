/**
 * Component for rendering the 20 AsciiFaces as a grid.
 */
import React, {useState} from 'react';
import {Text, View, Dimensions} from 'react-native';
import FormatDate from './functions/FormatDate';
import FormatPrice from './functions/FormatPrice';
import {styles} from './Styles';
import {item} from './Types';
import Icon from 'react-native-vector-icons/FontAwesome';

/**
 * For rendering the every section before ads,
 * we should use 'map'.
 * As readMe file included in the test file, every product should be viewed with its real size,
 * Due to 'FlatList' limitation we couldn't show a Grid with the freedom in height and number of columns in every row,
 * So I used map for rendering the every 20 products,
 * As you saw in the 'Home.tsx', our main list maintainer is handled with 'SectionList'. So it doesn't affect the performance.
 *
 * @param item - Value comes from 'sectionList'.
 * @param realSize -A boolean for making the items at the same size.
 */

interface Props {
  item: item[];
  realSize: boolean;
}
const {width} = Dimensions.get('screen');

const RenderItem: React.FC<Props> = ({item, realSize}) => {
  return (
    <View style={styles.item_container}>
      {item &&
        item.map((x: any) => (
          <View
            key={x.id}
            style={
              realSize ? styles.item_organizer : styles.item_organizer_same_size
            }>
            <Text style={styles.date}>{FormatDate(x.date)}</Text>

            <Text
              style={[
                realSize ? styles.face : styles.face_same_size,
                realSize && {fontSize: x.size},
              ]}>
              {x.face}
            </Text>
            <View style={styles.space} />
            <View style={styles.details_org}>
              <Text style={styles.price_title}>
                <Icon name="dollar" size={11} color="#707070" />

                {'price:'}
              </Text>
              <Text style={styles.price}>{FormatPrice(x.price)}</Text>
            </View>
            <View style={styles.details_org}>
              <Text style={styles.size_title}>
                <Icon name="arrows-alt" size={11} color="#707070" />
                {'size:'}
              </Text>
              <Text style={styles.size}>{x.size}</Text>
            </View>
          </View>
        ))}
    </View>
  );
};

export default RenderItem;
