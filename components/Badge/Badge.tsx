import { FC, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { getFontFamily } from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

interface BadgeProps {
  title?: string;
}

const Badge: FC<BadgeProps> = ({ title = '' }) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef<Text>(null);
  const paddingHorizontal = 10;
  const tabWidth = { width: horizontalScale(paddingHorizontal * 2 + width) };

  return (
    <View style={[styles.badge, tabWidth]}>
      <Text
        onTextLayout={event => {
          const { width } = event.nativeEvent.lines[0];
          setWidth(width);
        }}
        ref={textRef}
        style={styles.title}
      >
        {title}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#145855',
    height: verticalScale(22),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter', '600'),
    fontSize: scaleFontSize(10),
    lineHeight: scaleFontSize(12),
    color: '#FFFFFF',
    textAlign: 'center',
  },
});

export default Badge;
