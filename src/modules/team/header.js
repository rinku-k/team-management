import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Title, SubTitle } from '../../components';
import { TEXT_COLORS, SPACINGS, COLORS, BORDERS } from '../../constants';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <View>
        <Title text={props.title} />
        <SubTitle
          text={props.text}
          style={{ color: TEXT_COLORS.light }}
        />
      </View>
      {props.children}
    </View>
  )
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: SPACINGS.headerPadding,
    borderBottomColor: COLORS.border,
    borderBottomWidth: BORDERS.thin,
  }
});

export default Header;