import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {sortTypes} from './Types';
import {styles} from './Styles';

const {width} = Dimensions.get('screen');

interface Props {
  modalVisible: boolean;
  setSortType(sortType: sortTypes): void;
  closeModal(): void;
}
const SortModal: React.FC<Props> = ({
  modalVisible,
  setSortType,
  closeModal,
}) => {
  return (
    <Modal
      style={styles.modal}
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      useNativeDriver={true}
      isVisible={modalVisible}>
      <View style={styles.modal_contianer}>
        <TouchableOpacity
          style={styles.price_button}
          onPress={() => setSortType(sortTypes.price)}>
          <Text style={styles.button_title}>{'Price'}</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.id_button}
          onPress={() => setSortType(sortTypes.id)}>
          <Text style={styles.button_title}>{'Id'}</Text>
        </TouchableOpacity>
        <View style={styles.spacer} />
        <TouchableOpacity
          style={styles.size_button}
          onPress={() => setSortType(sortTypes.size)}>
          <Text style={styles.button_title}>{'Size'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.return_button} onPress={closeModal}>
          <Text style={styles.button_title}>{'Return'}</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SortModal;
