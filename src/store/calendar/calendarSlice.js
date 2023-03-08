import { createSlice } from '@reduxjs/toolkit';

/*
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
*/

export const calendarSlice = createSlice({
  name: 'calendar',
  initialState: {
    isLoadingEvents: true,
    events: [],
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
        if (event.id === payload.id) {
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
    onLoadingEvents: (state, { payload }) => {
      (state.isLoadingEvents = false),
        payload.forEach(event => {
          const exist = state.events.some(dbEvent => dbEvent.id === event.id);
          if (!exist) {
            state.events.push(event);
          }
        });
    },
    onLogOutCalendar: state => {
      state.isLoadingEvents = true;
      state.events = [];
      state.activeEvent = null;
    },
  },
});

export const {
  setActiveEvent,
  addNewEvent,
  updateEvents,
  deleteEvent,
  onLoadingEvents,
  onLogOutCalendar,
} = calendarSlice.actions;
