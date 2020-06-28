/**
 * A component for rendering the ads.
 */
import React from 'react';
import {Image} from 'react-native';
import {styles} from './Styles';
import {url} from './Url';

/**
 *
 * @param adsId -It's an id that comes from 'SectionList', is a value that has follow properties:
 * 1- returns a unique image.
 * 2- has been selected randomly
 */
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
