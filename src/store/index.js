import { configureStore } from '@reduxjs/toolkit'

import teamList from '../modules/team/reducer';

const store = configureStore({
  reducer: {
    teamList,
  }
})

export default store;