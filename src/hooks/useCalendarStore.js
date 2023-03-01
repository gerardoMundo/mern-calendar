import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import { convertDate } from '../helpers';
import {
  setActiveEvent,
  addNewEvent,
  updateEvents,
  deleteEvent,
  onLoadingEvents,
} from '../store';

export const useCalendarStore = () => {
  const { events, activeEvent } = useSelector(state => state.calendar);
  const { user } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const onSetActiveEvent = calendarEvent => {
    dispatch(setActiveEvent(calendarEvent));
  };

  const startSavingNewNote = async calendarEvent => {
    //TODO: esperar respuesta de backend

    if (calendarEvent.id) {
      await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);

      dispatch(updateEvents({ ...calendarEvent, user }));
    } else {
      const { data } = await calendarApi.post('/events/create', calendarEvent);

      dispatch(addNewEvent({ ...calendarEvent, id: data.event.id, user }));
    }
  };

  const startLoadingEvents = async () => {
    try {
      const { data } = await calendarApi.get('/events');

      const events = convertDate(data.events);

      dispatch(onLoadingEvents(events));
    } catch (error) {
      console.log(error);
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
    startLoadingEvents,
  };
};
