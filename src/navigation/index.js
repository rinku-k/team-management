import React from 'react';
import { useSelector } from 'react-redux';
import { SCREENS } from '../constants';

import TeamList from '../modules/team/list';
import MemberForm from '../modules/team/form';

const Navigation = () => {
  const currentScreen = useSelector(state => state.teamList.currentScreen);
  if (currentScreen === SCREENS.EDIT) {
    return <MemberForm />;
  }
  return <TeamList />;
}

export default Navigation;
