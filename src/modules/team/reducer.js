import { createSlice } from '@reduxjs/toolkit';
import { ROLES } from '../../constants';

export const teamList = createSlice({
  name: 'teamList',
  initialState: {
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
    selectedMember: 0,
    member: {
      first: "",
      last: "",
      role: ROLES.REGULAR,
      phone: "",
      email: "",
    },
  },
  reducers: {
    saveMember: (state) => {
      let editId = state.selectedMember;
      if (!editId) {
        editId = (state.allIds[state.allIds.length - 1] || 0) + 1;
        state.allIds.push(editId);
      }
      state.byIds[editId] = state.member
      state.member = initialState.member;
      state.selectedMember = initialState.selectedMember;
    },
    deleteMember: (state) => {
      const memberId = state.selectedMember;
      delete state.byIds[memberId];
      state.allIds.splice(state.allIds.indexOf(memberId), 1);
      state.member = initialState.member;
      state.selectedMember = initialState.selectedMember;
    },
    updateMemberInfo: (state, action) => {
      state.member[action.payload.key] = action.payload.value;
    },
    editMember: (state, action) => {
      state.selectedMember = action.payload;
      state.member = state.byIds[action.payload];
    },
  }
})

export const { saveMember, deleteMember, editMember, updateMemberInfo } = teamList.actions

export default teamList.reducer