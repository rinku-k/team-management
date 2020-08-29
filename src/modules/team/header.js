import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, Heading } from '../../components';
import { TEXT_COLORS, SPACINGS, COLORS, BORDERS } from '../../constants';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Title text={props.title} />
      <Heading
        text={props.text}
        style={{ color: TEXT_COLORS.light }}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    paddingBottom: SPACINGS.headerPadding,
    borderBottomColor: COLORS.border,
    borderBottomWidth: BORDERS.thin,
  }
});

export default Header;