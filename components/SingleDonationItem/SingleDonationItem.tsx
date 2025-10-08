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
        <Badge title={badgeTitle} />
        <Image source={{ uri }} style={styles.image} />
      </View>

      <Header title={donationTitle} type={3} color="#0A043C" />
      <Header title={`$${price.toFixed(2)}`} type={3} color="#156CF7" />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: horizontalScale(155),
    height: verticalScale(170),
  },
});

export default SingleDonationItem;
