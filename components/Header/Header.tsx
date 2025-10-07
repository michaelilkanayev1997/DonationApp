import { FC } from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { getFontFamily } from '../../assets/fonts/helper';
import { scaleFontSize } from '../../assets/styles/scaling';

interface HeaderProps {
  title?: string;
  type?: number;
}

const Header: FC<HeaderProps> = ({ title = '', type }) => {
  const stylesToApply = () => {
    switch (type) {
      case 1:
        return styles.title1;
      case 2:
        return styles.title2;
      case 3:
        return styles.title3;
      default:
        return styles.title1;
    }
  };

  return (
    <View>
      <Text style={stylesToApply()}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  title1: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(24),
    lineHeight: scaleFontSize(29),
  },
  title2: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(18),
    lineHeight: scaleFontSize(22),
  },
  title3: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
  },
});
export default Header;
