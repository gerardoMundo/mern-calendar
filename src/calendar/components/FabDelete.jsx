import { addHours } from 'date-fns';
import { useCalendarStore, useUiStore } from '../../hooks';

export const FabDelete = () => {
  const { onOpenDateModal } = useUiStore();
  const { startDeletingEvent, hasEventSelected } = useCalendarStore();

  const handleClickDelete = () => {
    startDeletingEvent();
  };

  return (
    <button
      style={{ display: hasEventSelected ? '' : 'none' }}
      onClick={handleClickDelete}
      className='btn btn-danger fab-delete'
    >
      <i className='fas fa-trash-alt'></i>
    </button>
  );
};
