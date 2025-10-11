import { FC, useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Header from '../../components/Header/Header';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { RootState } from '../../redux/store';
import { StyleSheet } from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';
import globalStyle from '../../assets/styles/globalStyle';

import { StackNavigationProp } from '@react-navigation/stack';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';

type HomeProps = {
  navigation: StackNavigationProp<any>;
};

const Home: FC<HomeProps> = ({ navigation }) => {
  const user = useSelector((state: RootState) => state.user);
  const categories = useSelector((state: RootState) => state.categories);
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <View>
            <Text style={styles.headerIntroText}>Hello, </Text>
            <View style={styles.username}>
              <Header
                title={user.firstName + ' ' + user.lastName[0] + '. 👋'}
              />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={styles.profileImage}
            resizeMode={'contain'}
          />
        </View>
        <View style={styles.searchBox}>
          <Search />
        </View>
        <Pressable style={styles.highlightedImageContainer}>
          <Image
            style={styles.highlightedImage}
            source={require('../../assets/images/highlighted_image.png')}
            resizeMode={'contain'}
          />
        </Pressable>
        <View style={styles.categoryHeader}>
          <Header title={'Select Category'} type={2} />
        </View>
        <View style={styles.categories}>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categories.categories}
            renderItem={({ item }) => (
              <View style={styles.categoryItem} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={value => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerIntroText: {
    fontFamily: 'Inter',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    fontWeight: '400',
    color: '#636776',
  },
  username: {
    marginTop: verticalScale(5),
  },
  profileImage: {
    width: horizontalScale(50),
    height: verticalScale(50),
  },
  searchBox: {
    marginHorizontal: horizontalScale(24),
    marginTop: verticalScale(20),
  },
  highlightedImageContainer: {
    marginHorizontal: horizontalScale(24),
  },
  highlightedImage: {
    width: '100%',
    height: verticalScale(160),
  },
  categoryHeader: {
    marginHorizontal: horizontalScale(24),
    marginBottom: verticalScale(16),
    marginTop: verticalScale(6),
  },
  categories: {
    marginLeft: horizontalScale(24),
  },
  categoryItem: {
    marginRight: horizontalScale(10),
  },
  donationItemsContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  singleDonationItem: {
    maxWidth: '49%',
    marginBottom: verticalScale(23),
  },
});

export default Home;
