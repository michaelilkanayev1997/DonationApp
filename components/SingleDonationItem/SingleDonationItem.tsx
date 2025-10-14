import { FC } from 'react';
import {
  Image,
  View,
  StyleSheet,
  ImageSourcePropType,
  Pressable,
} from 'react-native';

import Badge from '../Badge/Badge';
import Header from '../Header/Header';
import { horizontalScale, verticalScale } from '../../assets/styles/scaling';

interface SingleDonationItemProps {
  uri: string;
  badgeTitle?: string;
  donationTitle: string;
  price: number;
  onPress?: (donationItemId: number) => void;
  donationItemId: number;
}

const SingleDonationItem: FC<SingleDonationItemProps> = ({
  uri,
  badgeTitle,
  donationTitle,
  price,
  onPress = () => {},
  donationItemId,
}) => {
  return (
    <Pressable
      onPress={() => {
        onPress(donationItemId);
      }}
    >
      <View>
        <View style={styles.badge}>
          <Badge title={badgeTitle} />
        </View>
        <Image
          resizeMode={'cover'}
          source={{ uri: uri }}
          style={styles.image}
        />
      </View>
      <View style={styles.donationInformation}>
        <Header
          title={donationTitle}
          type={3}
          color={'#0A043C'}
          numberOfLines={1}
        />
        <View style={styles.price}>
          <Header title={'$' + price.toFixed(2)} type={3} color={'#156CF7'} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(140),
    height: verticalScale(170),
    borderRadius: horizontalScale(20),
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
