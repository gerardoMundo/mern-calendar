import { useSelector } from 'react-redux';
import { useAuthStore } from '../../hooks';

export const Navbar = () => {
  const { user } = useSelector(state => state.auth);
  const { startLogOut } = useAuthStore();

  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4 p-3 align-items-center'>
      <span className='navbar-brand'>
        <i className='fas fa-calendar-alt'></i>
        &nbsp; {user.name}
      </span>
      <button onClick={startLogOut} className='btn btn-danger'>
        <i className='fas fa-sign-out'></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  );
};
