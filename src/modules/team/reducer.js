import { createSlice } from '@reduxjs/toolkit';
import { ROLES, SCREENS, ACTIONS } from '../../constants';

const initialState = {
  allIds: [],
  byIds: {},
  currentScreen: SCREENS.LIST,
  selectedMember: 0,
  member: {
    first: "",
    last: "",
    role: ROLES.REGULAR,
    phone: "",
    email: "",
  },
};

export const teamList = createSlice({
  name: 'teamList',
  initialState,
  reducers: {
    saveMember: (state, action) => {
      let memberId = state.selectedMember;
      const actionType = action.payload;
      if (actionType === ACTIONS.SAVE) {
        if (!memberId) {
          memberId = (state.allIds[state.allIds.length - 1] || 0) + 1;
          state.allIds.push(memberId);
        }
        state.byIds[memberId] = state.member
      }
      if (actionType === ACTIONS.DELETE) {
        delete state.byIds[memberId];
        state.allIds.splice(state.allIds.indexOf(memberId), 1);
      }
      state.member = initialState.member;
      state.selectedMember = initialState.selectedMember;
      state.currentScreen = initialState.currentScreen;
    },
    updateMemberInfo: (state, action) => {
      state.member[action.payload.key] = action.payload.value;
    },
    editMember: (state, action) => {
      if(action.payload) {
        state.selectedMember = action.payload;
        state.member = state.byIds[action.payload];
      }
      state.currentScreen = SCREENS.EDIT;
    },
  }
})

export const { saveMember, editMember, updateMemberInfo } = teamList.actions

export default teamList.reducer