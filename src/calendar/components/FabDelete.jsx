import { useCalendarStore } from '../../hooks';

export const FabDelete = () => {
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
