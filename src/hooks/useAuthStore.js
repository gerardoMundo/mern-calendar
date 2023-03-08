import { useDispatch, useSelector } from 'react-redux';
import calendarApi from '../api/calendarApi';
import {
  clearErrorMessage,
  onChecking,
  onLogin,
  onLogOut,
} from '../store/auth/authSlice';
import { onLogOutCalendar } from '../store/calendar/calendarSlice';

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

  const startRegistry = async ({ name, email, password }) => {
    dispatch(onChecking());

    try {
      const { data } = await calendarApi.post('/auth/register', {
        name,
        email,
        password,
      });

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-time', new Date().getTime());

      dispatch(onLogin({ uid: data.uid, name: data.name }));
    } catch ({ response }) {
      console.log({ response });
      dispatch(
        onLogOut(
          response.data?.msg ||
            'Hubo un problema al registrarse, intente de nuevo'
        )
      );

      setTimeout(() => {
        dispatch(clearErrorMessage());
      }, 10);
    }
  };

  const checkAuthToken = async () => {
    const token = localStorage.getItem('token');
    if (!token) return dispatch(onLogOut());

    try {
      const { data } = await calendarApi.get('/auth/renew');

      localStorage.setItem('token', data.token);
      localStorage.setItem('token-init-time', new Date().getTime());

      dispatch(onLogin({ uid: data.uid, name: data.name }));
    } catch (error) {
      localStorage.clear();
      dispatch(onLogOut());
    }
  };

  const startLogOut = () => {
    localStorage.clear();

    dispatch(onLogOutCalendar());
    dispatch(onLogOut());
  };

  return {
    status,
    user,
    errorMessage,

    //Métodos
    checkAuthToken,
    startLogin,
    startLogOut,
    startRegistry,
  };
};
