import { createSlice } from '@reduxjs/toolkit';

export const teamList = createSlice({
  name: 'teamList',
  initialState: {
    allIds: [1, 2],
    byIds: {
      1: {
        name: "Tester 1",
      },
      2: {
        name: "Tester 2",
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
        name: `${state.byIds[action.payload.id].name} new`,
      }
    },
  }
})

export const { addMember, editMember } = teamList.actions

export default teamList.reducer