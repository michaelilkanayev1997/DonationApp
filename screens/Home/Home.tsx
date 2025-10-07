import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import Button from '../../components/Button/Button';
import Tab from '../../components/Tab/Tab';

const Home: FC = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title="Michael Magic" type={1} />
      <Tab title="Active" isInactive={false} onPress={() => {}} />
      <Tab title="Inactive" isInactive onPress={() => {}} />
      <Button title="Press Me" onPress={() => {}} />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
