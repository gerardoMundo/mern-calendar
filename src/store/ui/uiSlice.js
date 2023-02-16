import { createSlice } from '@reduxjs/toolkit';

export const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isOpenDateModal: false,
  },
  reducers: {
    openDateModal: state => {
      state.isOpenDateModal = true;
    },
    closeDateModal: state => {
      state.isOpenDateModal = false;
    },
  },
});

export const { openDateModal, closeDateModal } = uiSlice.actions;
