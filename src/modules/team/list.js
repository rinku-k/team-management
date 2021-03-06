import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { addOrEditMember } from './reducer';
import { Member } from './member';
import { Header } from './header';
import { IconLink } from '../../components';
import { SPACINGS } from '../../constants';

export const TeamList = () => {
  const members = useSelector((state) => state.teamList.allIds);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        title="Team members"
        text={`You have ${members.length} team members.`}
      >
        <IconLink
          text="+"
          onPress={() => {
            dispatch(addOrEditMember());
          }}
        />
      </Header>
      <FlatList
        data={members}
        keyExtractor={(id) => `${id}`}
        renderItem={({ item }) => <Member key={`${item}`} id={item} />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: SPACINGS.container,
  },
});
