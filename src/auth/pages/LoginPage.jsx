import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { MainPage } from '../layout/MainPage';

export const LoginPage = () => {
  const { onInputChange, email, password } = useForm({
    email: '',
    password: '',
  });

  const onLoginSubmit = e => {
    e.preventDefault();
  };

  return (
    <MainPage title='Iniciar sesión'>
      <div className=' col align-items-center'>
        <form onSubmit={onLoginSubmit} action='submit'>
          <label className='form-label' htmlFor='email'>
            <h6>Correo:</h6>
          </label>
          <input
            name='email'
            value={email}
            onChange={onInputChange}
            className='form-control'
            id='email'
            placeholder='correo@correo.com'
            type='email'
          />

          <label className='form-label mt-3' htmlFor='password'>
            <h6>Contraseña:</h6>
          </label>
          <input
            name='password'
            value={password}
            onChange={onInputChange}
            className='form-control'
            id='password'
            placeholder='Tu contraseña'
            type='password'
          />

          <div className='d-grid mt-4 mb-4'>
            <button className='btn btn-primary' type='submit'>
              Iniciar sesión
            </button>
          </div>
          <Link to='/auth/register' className='link-primary mt-2'>
            ¿Aún no te has registrado? Crea tu cuenta aquí
          </Link>
        </form>
      </div>
    </MainPage>
  );
};
