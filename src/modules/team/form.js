import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { saveMember, updateMemberInfo } from './reducer';
import Header from './header';
import { Heading, GhostButton, PrimaryButton, Input, RadioList } from '../../components';
import { SPACINGS, COLORS } from '../../constants';
import { memberDetail, roles } from './configuration';

const TeamList = () => {
  const { member, selectedMember } = useSelector(state => state.teamList);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        title={selectedMember ? "Edit team member" : "Add a team member"}
        text={selectedMember ? "Edit contact info, location and role." : "Set email, location and role."}
      />
      <ScrollView style={{ flex: 1 }} keyboardShouldPersistTaps="handled">
        <View style={styles.section}>
          <Heading text="Info" />
          { memberDetail.map((fields) => (
            <Input
              placeholder={fields.placeholder}
              value={member[fields.key]}
              keyboardType={fields.type}
              onChangeText={(textValue) => {
                // TODO: Validate
                dispatch(updateMemberInfo({ key: fields.key, value: textValue }))
              }}
            />
          ))
          }
        </View>
        <View style={styles.section}>
          <Heading text="Role" />
          <RadioList
            items={roles}
            selected={member.role}
            onPress={(value) => {
              dispatch(updateMemberInfo({ key: "role", value }))
            }}
          />
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <GhostButton text="Delete" textColor={COLORS.danger} onPress={() => {
          dispatch(deleteMember());
          // TODO: Navigate to list UI
        }} />
        <PrimaryButton text="Save" onPress={() => {
           dispatch(saveMember());
          // TODO: Navigate to list UI
        }} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: SPACINGS.container,
    flex: 1,
  },
  section: {
    paddingVertical: SPACINGS.container,
  },
  footer: {
    justifyContent: 'flex-end',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default TeamList;