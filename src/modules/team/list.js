import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMember } from './reducer';
import Member from './member';
import Header from './header';
import { SPACINGS } from '../../constants';

const TeamList = () => {
  const members = useSelector(state => state.teamList.allIds);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header title="Team members" text={`You have ${members.length} team members.`} />
      { members.map((memberId, index) => (
          <Member key={`${memberId}`} id={memberId} />
        ))
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACINGS.container,
    // alignItems: 'center',
  },
});

export default TeamList;