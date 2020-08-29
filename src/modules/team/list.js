import React from 'react';
import { View, Text } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addMember } from './reducer';
import Member from './member';

const TeamList = () => {
  const members = useSelector(state => state.teamList.allIds);
  const dispatch = useDispatch();
  return (
    <View>
      { members.map((memberId, index) => (
          <Member key={`${memberId}`} id={memberId} />
        ))
      }
    </View>
  );
};

export default TeamList;