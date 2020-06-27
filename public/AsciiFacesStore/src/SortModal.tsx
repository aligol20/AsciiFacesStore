import React from 'react';
import {View, TouchableOpacity, Text, Dimensions} from 'react-native';
import Modal from 'react-native-modal';
import {sortTypes} from './Types';

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
      style={{
        justifyContent: 'flex-end',
        marginBottom: 0,
        alignItems: 'center',
      }}
      animationIn={'fadeInUp'}
      animationOut={'fadeOutDown'}
      useNativeDriver={true}
      isVisible={modalVisible}>
      <View
        style={{
          width: 0.97 * width,
          borderTopLeftRadius: 13,
          borderTopRightRadius: 13,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: 'white',
            borderTopRightRadius: 13,
            borderTopLeftRadius: 13,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setSortType(sortTypes.price)}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 13,
              marginBottom: 13,
              fontSize: 23,
              color: 'rgb(10,132,255)',
            }}>
            {'price'}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: width,
            height: 0.5,
            backgroundColor: 'rgb(199,199,204)',
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',

            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={() => setSortType(sortTypes.id)}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 13,
              marginBottom: 13,
              fontSize: 23,
              color: 'rgb(10,132,255)',
            }}>
            {'id'}
          </Text>
        </TouchableOpacity>
        <View
          style={{
            width: width,
            height: 0.5,
            backgroundColor: 'rgb(199,199,204)',
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: 'white',

            alignItems: 'center',
            justifyContent: 'center',
            borderBottomLeftRadius: 13,
            borderBottomRightRadius: 13,
          }}
          onPress={() => setSortType(sortTypes.size)}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 13,
              marginBottom: 13,
              fontSize: 23,
              color: 'rgb(10,132,255)',
            }}>
            {'size'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            marginTop: 13,
            backgroundColor: 'white',
            borderRadius: 13,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={closeModal}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 13,
              marginBottom: 13,
              fontSize: 23,
              color: 'rgb(10,132,255)',
            }}>
            {'return'}
          </Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

export default SortModal;
