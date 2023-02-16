import { useState } from 'react';

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
import { useCalendarStore, useUiStore } from '../../hooks';

export const CalendarPage = () => {
  const [lastView, setlastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  const { events, onSetActiveEvent } = useCalendarStore();

  const { onOpenDateModal } = useUiStore();

  const eventStyleGetter = (/*notes, start, end, isSelected*/) => {
    const style = {
      backgroundColor: '#437CF7',
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
