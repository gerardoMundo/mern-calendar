import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogOut,
} from '../store/auth/authSlice';

export const useAuthStore = () => {
  const { status, user, errorMessage } = useSelector(state => state.auth);

  const dispatch = useDispatch();

  const startLogin = async ({ email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post('/auth', { email, password });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-time', new Date().getTime());

      dispatch(onLogin({ uid: data.uid, name: data.name }));
    } catch (error) {
      dispatch(onLogOut('Credenciales incorrectas'));

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  return {
    status,
    user,
    errorMessage,

    //Métodos
    startLogin,
  };
};
