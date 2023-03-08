import { useDispatch, useSelector } from 'react-redux';
import Swal from 'sweetalert2';
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
    try {
      if (calendarEvent.id) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent);

        dispatch(updateEvents({ ...calendarEvent, user }));
      } else {
        const { data } = await calendarApi.post(
          '/events/create',
          calendarEvent
        );

        dispatch(addNewEvent({ ...calendarEvent, id: data.event.id, user }));
      }
    } catch ({ response }) {
      console.log(response);
      Swal.fire('Error al guardar', response.data.msg, 'error');
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

  const startDeletingEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`);

      dispatch(deleteEvent());
    } catch ({ response }) {
      console.log(response);
      Swal.fire('Error al eliminar', response.data.msg, 'error');
    }
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
