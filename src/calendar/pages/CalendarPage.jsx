import { Calendar } from 'react-big-calendar';
import { addHours } from 'date-fns';
import 'react-big-calendar/lib/css/react-big-calendar.css';

import { Navbar, CalendarEvent, CalendarModal } from './components';
import { localizer, getMessages } from '../../helpers';
import { useState } from 'react';

const events = [
  {
    title: 'cuple',
    notes: 'Cumpleaños feliz',
    start: new Date(),
    end: addHours(new Date(), 2),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Gerardo',
    },
  },
];

export const CalendarPage = () => {
  const [lastView, setlastView] = useState(
    localStorage.getItem('lastView') || 'week'
  );

  const eventStyleGetter = (notes, start, end, isSelected) => {
    const style = {
      backgroundColor: '#437CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white',
    };

    return { style };
  };

  const onDoubleClick = event => {
    //console.log(event);
  };

  const onSelected = event => {
    //console.log(event);
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
        selectedEvent={onSelected}
        onView={onViewChanged}
      />
      <CalendarModal />
    </>
  );
};
