import { FC, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';

import { getFontFamily } from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

interface TabProps {
  tabId: number;
  title?: string;
  isInactive?: boolean;
  onPress: (value: number) => void;
}

const Tab: FC<TabProps> = ({
  tabId,
  title = '',
  isInactive = false,
  onPress,
}) => {
  const [width, setWidth] = useState(0);
  const textRef = useRef<Text>(null);
  const paddingHorizontal = 33;
  const tabWidth = { width: horizontalScale(paddingHorizontal * 2 + width) };

  return (
    <Pressable
      disabled={isInactive}
      style={[styles.tab, isInactive && styles.inactiveTab, tabWidth]}
      onPress={() => onPress(tabId)}
    >
      <Text
        onTextLayout={event => {
          const { width } = event.nativeEvent.lines[0];
          setWidth(width);
        }}
        ref={textRef}
        style={[styles.title, isInactive && styles.inactiveTitle]}
      >
        {title}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  tab: {
    backgroundColor: '#2979F2',
    height: verticalScale(50),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  inactiveTab: {
    backgroundColor: '#F3F5F9',
  },
  inactiveTitle: {
    color: '#79869F',
  },
});

export default Tab;
