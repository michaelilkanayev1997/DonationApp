import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { SafeAreaView, ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';

import { horizontalScale, verticalScale } from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';
import { RootState } from '../../redux/store';
import BackButton from '../../components/BackButton/BackButton';

type SingleDonationItemProps = {
  navigation: StackNavigationProp<any>;
};

const SingleDonationItem: FC<SingleDonationItemProps> = ({ navigation }) => {
  const donationItemInformation = useSelector(
    (state: RootState) => state.donations.selectedDonationInformation,
  );

  console.log(donationItemInformation);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
        <BackButton onPress={() => navigation.goBack()} />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: horizontalScale(20),
    marginTop: verticalScale(7),
  },
});

export default SingleDonationItem;
