import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
  _id: new Date().getTime(),
  title: 'cumpleaños',
  notes: 'Cumpleaños feliz gerMund',
  start: new Date(),
  end: addHours(new Date(), 2),
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Gerardo',
  },
};

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    events: [tempEvent],
    activeEvent: null,
  },
  reducers: {
    setActiveEvent: (state, { payload }) => {
      state.activeEvent = payload;
    },
    addNewEvent: (state, { payload }) => {
      state.events.push(payload);
      state.activeEvent = null;
    },
    updateEvents: (state, { payload }) => {
      state.events = state.events.map(event => {
        if (event._id === payload._id) {
          return payload;
        }
        return event;
      });
    },
    deleteEvent: state => {
      if (state.activeEvent) {
        state.events = state.events.filter(
          event => event._id !== state.activeEvent._id
        );
      }

      state.activeEvent = null;
    },
  },
});

export const { setActiveEvent, addNewEvent, updateEvents, deleteEvent } =
  calendarSlice.actions;
