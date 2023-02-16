import { useDispatch, useSelector } from 'react-redux';
import { closeDateModal, openDateModal } from '../store';

export const useUiStore = () => {
  const dispatch = useDispatch();

  const { isOpenDateModal } = useSelector(state => state.ui);

  const onOpenDateModal = () => {
    dispatch(openDateModal());
  };

  const onCloseDateModal = () => {
    dispatch(closeDateModal());
  };

  return {
    // propiedades
    isOpenDateModal,

    //métodos
    onOpenDateModal,
    onCloseDateModal,
  };
};
