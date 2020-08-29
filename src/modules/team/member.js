import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { editMember } from './reducer';

const Member = (props) => {
  const memberDetails = useSelector(state => state.teamList.byIds[props.id])
  const dispatch = useDispatch();
  if (!memberDetails) {
    return null;
  }
  return (
    <TouchableNativeFeedback
      onPress={() => {
        dispatch(editMember({
          id: props.id,
        }));
      }}
    >
      <View style={styles.container}>
        <Text>{memberDetails.name}</Text>
      </View>
    </TouchableNativeFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    // alignItems: 'center',
  },
});

Member.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Member;