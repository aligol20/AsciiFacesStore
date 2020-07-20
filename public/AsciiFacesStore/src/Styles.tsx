/**
 * All the app styles can be found here.
 */
import {StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('screen');
export const styles = StyleSheet.create({
  header_right_button: {
    marginRight: 13,
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
  content_container: {alignItems: 'center'},
  loading_conatianer: {
    height: '3%',
    width: width,
  },
  loading_conatianer_absolute: {
    height: '3%',
    width: width,
  },
  ads_image: {
    height: 200,
    borderRadius: 7,
    width: 0.95 * width,
  },
  item_container: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: 0.97 * width,
  },
  item_organizer: {
    flexDirection: 'column',
    margin: 3,
    borderColor: 'grey',
    minWidth: '20%',
    padding: 2,
    borderRadius: 7,
    maxWidth: 0.97 * width,
    backgroundColor: '#ffffff',
  },
  item_organizer_same_size: {
    flexDirection: 'column',
    margin: 3,
    borderColor: 'grey',
    alignItems: 'center',
    width: '23%',
    padding: 2,
    borderRadius: 7,
    height: 120,
    justifyContent: 'space-between',
    maxWidth: 0.97 * width,
    backgroundColor: '#ffffff',
  },
  face: {
    color: '#474554',
    textAlign: 'center',
    maxWidth: 0.97 * width,
    marginBottom: 1,
  },
  face_same_size: {
    color: '#474554',
    textAlign: 'center',
    maxWidth: 0.97 * width,
    marginBottom: 1,
    fontSize: 13,
    height: '20%',
    alignSelf: 'center',
  },
  space: {
    width: '90%',
    height: 0.7,
    backgroundColor: 'white',
    marginBottom: 3,
    marginTop: 3,
  },
  details_org: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    color: '#5F78BE',
    textAlign: 'right',
    fontSize: 13,
  },
  price_title: {
    color: '#707070',
    textAlign: 'left',
    fontSize: 13,
  },
  size_title: {
    color: '#707070',
    textAlign: 'left',
    fontSize: 13,
  },
  size: {color: '#5F78BE', textAlign: 'right', fontSize: 13},
  date: {color: '#CFCFCF', textAlign: 'left', width: '100%', fontSize: 13},
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
  title: {
    textAlign: 'center',
    marginTop: 13,
    marginBottom: 13,
    fontSize: 23,
    color: '#707070',
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
    marginBottom: 23,
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
  end_message: {
    width: width,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header_color: {color: 'white', alignSelf: 'center'},
  header_background: {backgroundColor: '#545498'},
  switch_container: {flexDirection: 'row', alignItems: 'center', marginLeft: 5},
  switch_title: {color: 'white'},
  end_message_title: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: 'green',
  },
});
