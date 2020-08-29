import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { saveOrExit, updateMemberInfo } from '../reducer';
import Header from '../header';
import { Heading, GhostButton, PrimaryButton, Input, RadioList, IconLink } from '../../../components';
import { SPACINGS, COLORS, ACTIONS } from '../../../constants';
import { memberDetail, roles } from './configuration';

const TeamList = () => {
  const { member, selectedMember } = useSelector(state => state.teamList);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Header
        title={selectedMember ? "Edit team member" : "Add a team member"}
        text={selectedMember ? "Edit contact info, location and role." : "Set email, location and role."}
      >
        <IconLink text="x" onPress={() => dispatch(saveOrExit())} />
      </Header>
      <ScrollView
        style={{ flex: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.section}>
          <Heading text="Info" />
          { memberDetail.map((fields) => (
            <Input
              key={fields.key}
              placeholder={fields.placeholder}
              value={member[fields.key]}
              keyboardType={fields.type}
              maxLength={fields.limit}
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
        <PrimaryButton text="Save" onPress={() => {
          dispatch(saveOrExit(ACTIONS.SAVE));
        }} />
        { !!selectedMember &&
          <GhostButton text="Delete" textColor={COLORS.danger} onPress={() => {
            dispatch(saveOrExit(ACTIONS.DELETE));
          }} />
        }
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
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
  },
});

export default TeamList;