import { FC, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';

import { scaleFontSize, verticalScale } from '../../assets/styles/scaling';

interface InputProps {
  label: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  onChangeText?: (value: string) => void;
}

const Input: FC<InputProps> = ({
  label,
  placeholder,
  keyboardType = 'default',
  secureTextEntry = false,
  onChangeText = () => {},
}) => {
  const [value, setValue] = useState<string>('');

  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder || ''}
        style={styles.input}
        value={value}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        onChangeText={(val: string) => {
          setValue(val);
          onChangeText(val);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    fontFamily: 'Inter',
    fontWeight: '400',
    color: '#36455A',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
  },
  input: {
    paddingVertical: verticalScale(12),
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(167, 167, 167, 0.5)',
  },
});

export default Input;
