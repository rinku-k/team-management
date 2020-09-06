import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { COLORS, TEXT_COLORS, SPACINGS, BORDERS, ROLES } from '../constants';
import { Content } from './texts';

export const RadioList = ({ items, onPress, selected }) => items.map((item) => (
  <TouchableOpacity key={item.type} style={styles.item} onPress={() => onPress(item.type)}>
    <Content text={item.text} style={{ color: TEXT_COLORS.regular }} />
    <View style={styles.radio}>
      { item.type === selected ?
        <View style={styles.radioSelected}/>
        : null
      }
    </View>
  </TouchableOpacity>
));

RadioList.propTypes = {
  items: PropTypes.array,
  selected: PropTypes.number,
};

RadioList.defaultProps = {
  items: [],
  selected: ROLES.REGULAR,
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    paddingVertical: SPACINGS.container,
    borderBottomColor: COLORS.border,
    borderBottomWidth: BORDERS.thin,
    justifyContent: 'space-between',
  },
  radio: {
    height: 20,
    width: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: COLORS.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioSelected: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: COLORS.primary,
  }
});
