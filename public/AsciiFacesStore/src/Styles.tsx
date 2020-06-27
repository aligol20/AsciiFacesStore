import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  header_right_button: {
    marginRight: 13,
    borderWidth: 0.7,
    borderColor: 'white',
    padding: 3,
    borderRadius: 5,
  },
  header_button_title: {color: 'white'},
  container_on_loading: {
    width: '100%',
    height: '97%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    width: '100%',
    height: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  loading_conatianer: {
    height: '3%',
    width: width,
  },
  loading_conatianer_absolute: {
    height: '3%',
    width: width,
  },
  ads_image: {
    width: width,
    height: 200,
  },
  item_container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  item_organizer: {
    flexDirection: 'column',
    margin: 3,
    borderWidth: 0.7,
    borderColor: 'grey',
    alignItems: 'center',
    minWidth: '20%',
    padding: 5,
    alignSelf: 'center',
    borderRadius: 7,
    backgroundColor: '#336e7b',
  },
  face: {color: 'white'},
  price: {color: 'yellow'},
  size: {color: 'white'},
  date: {color: 'white'},
});
