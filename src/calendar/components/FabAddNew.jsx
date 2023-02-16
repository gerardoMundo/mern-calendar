import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';

export const FabAddNew = () => {
  const { onOpenDateModal } = useUiStore();
  const { onSetActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
    onSetActiveEvent({
      title: '',
      notes: '',
      start: new Date(),
      end: addHours(new Date(), 2),
      bgColor: '#fafafa',
      user: {
        _id: '123',
        name: 'Gerardo',
      },
    });
    onOpenDateModal();
  };

  return (
    <button onClick={handleClickNew} className='btn btn-primary fab'>
      <i className='fas fa-plus'></i>
    </button>
  );
};
