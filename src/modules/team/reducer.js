import { createSlice } from '@reduxjs/toolkit';
import { ROLES, SCREENS, ACTIONS } from '../../constants';

const initialState = {
  allIds: [1, 2],
  byIds: {
    1: {
      first: "Charlene",
      last: "Pham",
      role: ROLES.ADMIN,
      phone: "454-234-1245",
      email: "blah@gmail.com",
    },
    2: {
      first: "Adrien",
      last: "Blah",
      role: ROLES.REGULAR,
      phone: "354-123335",
      email: "tetsf@gmail.com",
    }
  },
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