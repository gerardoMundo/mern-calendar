import { useEffect, useState } from 'react';

import { Calendar } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import {
  Navbar,
  CalendarEvent,
  CalendarModal,
  FabAddNew,
  FabDelete,
} from '../components';
import { localizer, getMessages } from '../../helpers';
import { useAuthStore, useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {
  const [lastView, setlastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  const { user } = useAuthStore();
  const { events, onSetActiveEvent, startLoadingEvents } = useCalendarStore();

  const { onOpenDateModal } = useUiStore();

  const eventStyleGetter = (event, start, end, isSelected) => {
    const isMyEvent =
      event.user?._id === user.uid || event.user?.uid === user.uid;

    const style = {
      backgroundColor: isMyEvent ? '#437CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return { style };
  };

  const onDoubleClick = () => {
    onOpenDateModal();
  };

  const onSelect = event => {
    onSetActiveEvent(event);
  };

  const onViewChanged = event => {
    localStorage.setItem('lastView', event);
  };

  useEffect(() => {
    startLoadingEvents();
  }, []);

  return (
    <>
      <Navbar />
      <Calendar
        culture='es'
        localizer={localizer}
        defaultView={lastView}
        events={events}
        startAccessor='start'
        endAccessor='end'
        messages={getMessages()}
        style={{ height: 'calc(100vh - 100px)' }}
        eventPropGetter={eventStyleGetter}
        components={{ event: CalendarEvent }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  );
};
