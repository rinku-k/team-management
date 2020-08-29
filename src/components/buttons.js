import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, TEXT_COLORS, BORDERS } from '../constants';
import { Content } from './texts';

export const GhostButton = ({ color, text, textColor, style, ...props }) => (
  <TouchableOpacity
    style={[styles.button, { borderColor: color }, style]}
    {...props}
  >
    <Content
      text={text}
      style={{ alignSelf: 'center', paddingHorizontal: 20, color: textColor }}
    />
  </TouchableOpacity>
);

export const PrimaryButton = ({ color, text, textColor, style, ...props }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: color, borderColor: color }, style]}
    {...props}
  >
    <Content
      text={text}
      style={{ alignSelf: 'center', paddingHorizontal: 20, color: textColor }}
    />
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: BORDERS.medium,
    borderRadius: BORDERS.radius,
    borderColor: COLORS.primary,
    padding: 10,
    marginTop: 10,
  },
});

PrimaryButton.propTypes = {
  text: PropTypes.string.isRequired,
  style: PropTypes.object,
  color: PropTypes.string,
  textColor: PropTypes.string,
};

PrimaryButton.defaultProps = {
  color: COLORS.primary,
  style: {},
  textColor: TEXT_COLORS.lightest,
};

GhostButton.propTypes = {
  ...PrimaryButton.propTypes,
};

GhostButton.defaultProps = {
  ...PrimaryButton.defaultProps,
  color: COLORS.border,
  textColor: TEXT_COLORS.dark,
};