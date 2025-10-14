import { StyleSheet, Image, View, Text } from 'react-native';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import { RootState } from '../../redux/store';
import BackButton from '../../components/BackButton/BackButton';
import Badge from '../../components/Badge/Badge';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import { Category } from '../../redux/reducers/Categories';
import { DonationItem } from '../../redux/reducers/Donations';

type SingleDonationItemProps = {
  navigation: StackNavigationProp<any>;
  route: RouteProp<{ params: { categoryInformation: Category } }, 'params'>;
};

const SingleDonationItem: FC<SingleDonationItemProps> = ({
  navigation,
  route,
}) => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  ) as DonationItem | null;

  const { categoryInformation } = route.params;

  if (!donationItemInformation) {
    return (
      <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
        <Text style={{ textAlign: 'center', marginTop: 50 }}>
          No donation item selected.
        </Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />

        <Image
          source={{ uri: donationItemInformation.image }}
          style={styles.image}
        />

        <View style={styles.badge}>
          <Badge title={categoryInformation.name} />
        </View>

        <Header type={1} title={donationItemInformation.name} />

        <Text style={styles.description}>
          {donationItemInformation.description.repeat(7)}
        </Text>
      </ScrollView>

      <View style={styles.button}>
        <Button
          title="Donate"
          onPress={() => {
            console.log('Donate');
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
  image: {
    marginTop: verticalScale(12),
    marginBottom: verticalScale(24),
    width: '100%',
    height: verticalScale(240),
    borderRadius: horizontalScale(5),
  },
  badge: {
    marginBottom: verticalScale(16),
  },
  description: {
    marginTop: verticalScale(7),
    marginHorizontal: horizontalScale(7),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(14),
    marginBottom: verticalScale(10),
  },
  button: {
    marginHorizontal: horizontalScale(20),
  },
});

export default SingleDonationItem;
