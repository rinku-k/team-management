import React from 'react';
import { TextInput, StyleSheet } from 'react-native';
import { COLORS, TEXT_COLORS, FONT_SIZE, BORDERS, SPACINGS } from '../constants';

export const Input = (props) => (
  <TextInput
    maxLength={20}
    placeholderTextColor={TEXT_COLORS.light}
    style={styles.inputBox}
    {...props}
  />
);

const styles = StyleSheet.create({
  inputBox: {
    flex: 1,
    fontSize: FONT_SIZE.text,
    color: TEXT_COLORS.darkest,
    paddingVertical: 5,
    paddingHorizontal: SPACINGS.inner,
    marginVertical:  SPACINGS.inner,
    borderColor: COLORS.border,
    borderWidth: BORDERS.medium,
    borderRadius: BORDERS.radius,
  },
});
