import { FC } from 'react';
import { Pressable, StyleSheet, Text } from 'react-native';
import { getFontFamily } from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

interface ButtonProps {
  title?: string;
  isDisabled?: boolean;
  onPress: () => void;
}

const Button: FC<ButtonProps> = ({
  title = '',
  isDisabled = false,
  onPress,
}) => {
  return (
    <Pressable
      disabled={isDisabled}
      style={[styles.button, isDisabled && styles.disabled]}
      onPress={() => onPress()}
    >
      <Text style={styles.title}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2979F2',
    height: verticalScale(55),
    justifyContent: 'center',
    borderRadius: horizontalScale(50),
  },
  title: {
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#FFFFFF',
    textAlign: 'center',
  },
  disabled: {
    opacity: 0.5,
  },
});

export default Button;
