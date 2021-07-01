import React from 'react';
import PropTypes from 'prop-types';
import { View, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { SubHeading, Content } from '../../components';
import { addOrEditMember } from './reducer';
import { TEXT_COLORS, SPACINGS, COLORS, BORDERS, ROLES } from '../../constants';

export const Member = (props) => {
  const memberDetails = useSelector((state) => state.teamList.byIds[props.id]);
  const dispatch = useDispatch();
  if (!memberDetails) {
    return null;
  }
  const { first, last, role, phone, email } = memberDetails;
  return (
    <TouchableNativeFeedback
      onPress={() => {
        dispatch(addOrEditMember(props.id));
      }}
    >
      <View style={styles.container}>
        <View style={styles.imageDummy} />
        <View>
          <SubHeading
            text={`${first} ${last} ${role === ROLES.ADMIN ? '(admin)' : ''}`}
          />
          <Content text={phone} style={styles.light} />
          <Content text={email} style={styles.light} />
        </View>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: SPACINGS.container,
    borderBottomColor: COLORS.border,
    borderBottomWidth: BORDERS.thin,
  },
  imageDummy: {
    width: 40,
    height: 40,
    backgroundColor: COLORS.shadow,
    marginRight: SPACINGS.container,
    borderRadius: 20,
  },
  light: {
    color: TEXT_COLORS.light,
  },
});

Member.propTypes = {
  id: PropTypes.number.isRequired,
};
