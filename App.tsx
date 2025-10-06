import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { getFontFamily } from './assets/fonts/helper';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 70, fontFamily: getFontFamily('Inter', '700') }}>
        Hello, World!
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
