/**
 * A modal for selecting the sorting type.
 */
import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {sortTypes} from './Types';
import {styles} from './Styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const {width} = Dimensions.get('screen');

interface Props {
  modalVisible: boolean;
  setSortType(sortType: sortTypes): void;
  closeModal(): void;
  current: sortTypes;
}
/**
 * With this modal user can select its desire sort type.
 * @param modalVisible - A boolean for making the modal visible or not.
 * @param setSortType - A callback for passing the selected sort type to 'Home.tsx'.
 * @param closeModal - A callback for closing the modal.
 * @param current - A props that defines the current applied sort.
 */
const SortModal: React.FC<Props> = ({
  modalVisible,
  setSortType,
  closeModal,
  current,
}) => {
  return (
    <Modal
      style={styles.modal}
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      useNativeDriver={true}
      isVisible={modalVisible}>
      <View style={styles.modal_contianer}>
        <View style={styles.price_button}>
          <Text style={styles.title}>{'Choose sort type'}</Text>
        </View>
        <TouchableOpacity
          style={styles.id_button}
          onPress={() => setSortType(sortTypes.price)}>
          <Text style={styles.button_title}>
            {'Price   '}
            {current === sortTypes.price && (
              <Icon name="check" size={23} color="#545498" />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.id_button}
          onPress={() => setSortType(sortTypes.id)}>
          <Text style={styles.button_title}>
            {'Id   '}
            {current === sortTypes.id && (
              <Icon name="check" size={23} color="#545498" />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.size_button}
          onPress={() => setSortType(sortTypes.size)}>
          <Text style={styles.button_title}>
            {'Size   '}
            {current === sortTypes.size && (
              <Icon name="check" size={23} color="#545498" />
            )}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.return_button} onPress={closeModal}>
          <Text style={styles.button_title}>{'Cancel'}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SortModal;
