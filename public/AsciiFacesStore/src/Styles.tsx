/**
 * All the app styles can be found here.
 */
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
  main_view: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  safe_area: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  spacer: {
    width: width,
    height: 0.5,
    backgroundColor: 'rgb(199,199,204)',
  },
  button_title: {
    textAlign: 'center',
    marginTop: 13,
    marginBottom: 13,
    fontSize: 23,
    color: 'rgb(10,132,255)',
  },
  price_button: {
    backgroundColor: 'white',
    borderTopRightRadius: 13,
    borderTopLeftRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  size_button: {
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
    borderBottomLeftRadius: 13,
    borderBottomRightRadius: 13,
  },
  return_button: {
    marginTop: 13,
    backgroundColor: 'white',
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },
  id_button: {
    backgroundColor: 'white',

    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    justifyContent: 'flex-end',
    marginBottom: 0,
    alignItems: 'center',
  },
  modal_contianer: {
    width: 0.97 * width,
    borderTopLeftRadius: 13,
    borderTopRightRadius: 13,
  },
  end_message: {width: '100%', height: 40},
  header_color: {color: 'white'},
  header_background: {backgroundColor: '#20B87B'},
});
