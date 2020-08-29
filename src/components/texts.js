import React from 'react';
import { Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { fontSize } from '../constants';

export const Title = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{ fontSize: fontSize.title, ...style }}
  >
    {text}
  </Text>
);

export const SubTitle = ({ text, style, ...props }) => (
  <Text
    {...props}
    style={{
      fontSize: fontSize.subtitle,
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
      fontSize: fontSize.heading,
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
      fontSize: fontSize.subheading,
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
      fontSize: fontSize.text,
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
      fontSize: fontSize.legends,
      ...style,
    }}
  >
    {text}
  </Text>
);

Title.propTypes = {
  text: PropTypes.string,
  style: PropTypes.object,
};

Title.defaultProps = {
  style: {},
  text: ""
};

Heading.propTypes = {
  ...Title.propTypes,
};

Heading.defaultProps = {
  ...Title.defaultProps,
};

SubHeading.propTypes = {
  ...Heading.propTypes,
};

SubHeading.defaultProps = {
  ...Heading.defaultProps,
};

Text.propTypes = {
  ...Heading.propTypes,
};

Text.defaultProps = {
  ...Heading.defaultProps,
};

SubTitle.propTypes = {
  ...Heading.propTypes,
};

SubTitle.defaultProps = {
  ...Heading.defaultProps,
};

Legend.propTypes = {
  ...Heading.propTypes,
};

Legend.defaultProps = {
  ...Heading.defaultProps,
};
