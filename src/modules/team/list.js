import React from 'react';
import { View, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';
import Member from './member';
import Header from './header';
import { SPACINGS } from '../../constants';

const TeamList = () => {
  const members = useSelector(state => state.teamList.allIds);
  // TODO: Add Flatlist (to handle large list items)
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