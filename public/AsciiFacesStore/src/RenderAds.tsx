import React from 'react';
import {Image, Dimensions} from 'react-native';
import {styles} from './Styles';
import {url} from './Url';

const {width} = Dimensions.get('screen');

const RenderAds = (adsId: string) => {
  return (
    <Image
      style={styles.ads_image}
      source={{
        uri: url + `/ads/?r=${adsId}`,
      }}
    />
  );
};

export default RenderAds;
