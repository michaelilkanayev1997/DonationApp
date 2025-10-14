import { StyleSheet } from 'react-native';

import { verticalScale } from './scaling';

const styles = StyleSheet.create({
  backgroundWhite: {
    backgroundColor: '#FFFFFF',
  },
  flex: {
    flex: 1,
  },
  marginBottom24: {
    marginBottom: verticalScale(24),
  },
});

export default styles;
