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
  },
  reducers: {
    addMember: (state, action) => {
      const newId = (state.allIds[state.allIds.length - 1] || 0) + 1;
      state.allIds.push(newId);
      state.byIds[newId] = {
        name: "Rinku",
      }
    },
    editMember: (state, action) => {
      state.byIds[action.payload.id] = {
        ...state.byIds[action.payload.id],
        last: `${state.byIds[action.payload.id].last} new`,
      }
    },
  }
})

export const { addMember, editMember } = teamList.actions

export default teamList.reducer