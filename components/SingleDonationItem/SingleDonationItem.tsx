import { FC } from 'react';
import { Image, View, StyleSheet, ImageSourcePropType } from 'react-native';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

interface SingleDonationItemProps {
  uri: string;
  badgeTitle: string;
  donationTitle: string;
  price: number;
}

const SingleDonationItem: FC<SingleDonationItemProps> = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
}) => {
  return (
    <View>
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image
          resizeMode={'contain'}
          source={{ uri: uri }}
          style={styles.image}
        />
      </View>
      <View style={styles.donationInformation}>
        <Header title={donationTitle} type={3} color={'#0A043C'} />
        <View style={styles.price}>
          <Header title={'$' + price.toFixed(2)} type={3} color={'#156CF7'} />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(155),
    height: verticalScale(170),
  },
  badge: {
    position: 'absolute',
    zIndex: 1,
    top: verticalScale(13),
    left: horizontalScale(10),
  },
  donationInformation: {
    marginTop: verticalScale(16),
  },
  price: {
    marginTop: verticalScale(5),
  },
});

export default SingleDonationItem;
