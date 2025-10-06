import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { getFontFamily } from './assets/fonts/helper';
import MainNavigation from './navigation/MainNavigation';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
