/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { Text } from 'react-native';
import PropTypes from 'prop-types';
import { FONT_SIZE } from '../constants';

export const Title = ({ text, style, ...props }) => (
  <Text {...props} style={{ fontSize: FONT_SIZE.title, ...style }}>
    {text}
  </Text>
);

export const SubTitle = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.subtitle,
      ...style,
    }}
  >
    {text}
  </Text>
);

export const Heading = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.heading,
      fontWeight: 'bold',
      ...style,
    }}
  >
    {text}
  </Text>
);

export const SubHeading = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.subheading,
      ...style,
    }}
  >
    {text}
  </Text>
);

export const Content = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.text,
      ...style,
    }}
  >
    {text}
  </Text>
);

export const Legend = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: FONT_SIZE.legends,
      ...style,
    }}
  >
    {text}
  </Text>
);

Title.propTypes = {
  text: PropTypes.string,
  style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
};

Title.defaultProps = {
  style: {},
  text: '',
};

Heading.propTypes = {
  ...Title.propTypes,
};

Heading.defaultProps = {
  ...Title.defaultProps,
};

SubHeading.propTypes = {
  ...Title.propTypes,
};

SubHeading.defaultProps = {
  ...Title.defaultProps,
};

Text.propTypes = {
  ...Title.propTypes,
};

Text.defaultProps = {
  ...Title.defaultProps,
};

SubTitle.propTypes = {
  ...Title.propTypes,
};

SubTitle.defaultProps = {
  ...Title.defaultProps,
};

Content.propTypes = {
  ...Title.propTypes,
};

Content.defaultProps = {
  ...Title.defaultProps,
};

Legend.propTypes = {
  ...Title.propTypes,
};

Legend.defaultProps = {
  ...Title.defaultProps,
};
