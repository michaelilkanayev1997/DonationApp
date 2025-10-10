import { FC } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import globalStyle from '../../assets/styles/globalStyle';
import Header from '../../components/Header/Header';
import { RootState } from '../../redux/store';

const Home: FC = () => {
  const user = useSelector((state: RootState) => state.user);
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <Header title={user.firstName + ' ' + user.lastName} />
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
