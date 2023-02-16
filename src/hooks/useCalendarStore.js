import { useDispatch, useSelector } from 'react-redux';
import {
  setActiveEvent,
  addNewEvent,
  updateEvents,
  deleteEvent,
} from '../store';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector(state => state.calendar);
  const dispatch = useDispatch();

  const onSetActiveEvent = calendarEvent => {
    dispatch(setActiveEvent(calendarEvent));
  };

  const startSavingNewNote = async calendarEvent => {
    //TODO: esperar respuesta de backend

    if (calendarEvent._id) {
      dispatch(updateEvents(calendarEvent));
    } else {
      dispatch(addNewEvent({ ...calendarEvent, _id: new Date().getTime() }));
    }
  };

  const startDeletingEvent = () => {
    dispatch(deleteEvent());
  };

  return {
    //Propoerties
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //Methods
    onSetActiveEvent,
    startSavingNewNote,
    startDeletingEvent,
  };
};
