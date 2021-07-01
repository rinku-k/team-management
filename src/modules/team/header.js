import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Title, SubTitle } from '../../components';
import { TEXT_COLORS, SPACINGS, COLORS, BORDERS } from '../../constants';

export const Header = ({ title, text, children }) => (
  <View style={styles.header}>
    <View>
      <Title text={title} />
      <SubTitle text={text} style={{ color: TEXT_COLORS.light }} />
    </View>
    {children}
  </View>
);

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SPACINGS.headerPadding,
    borderBottomColor: COLORS.border,
    borderBottomWidth: BORDERS.thin,
  },
});

Header.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.node,
};

Header.defaultProps = {
  children: null,
};
