import React, { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';

const Home: FC = () => {
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title="Michael Magic" type={1} />
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
