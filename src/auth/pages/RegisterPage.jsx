import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import { MainPage } from '../layout/MainPage';

export const RegisterPage = () => {
  const { name, email, password, repeatPassword, onInputChange } = useForm({
    name: '',
    email: '',
    password: '',
    repeatPassword: '',
  });

  const onRegisterSubmit = e => {
    e.preventDefault();
    console.log({ name, email, password, repeatPassword });
  };

  return (
    <MainPage title='Registro'>
      <div className=' col align-items-center'>
        <form onSubmit={onRegisterSubmit} action='submit'>
          <label className='form-label' htmlFor='name'>
            <h6>Nombre:</h6>
          </label>
          <input
            name='name'
            value={name}
            onChange={onInputChange}
            className='form-control'
            id='name'
            placeholder='correo@correo.com'
            type='text'
          />

          <label className='form-label mt-3' htmlFor='mail'>
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
            id='password'
            type='password'
            onChange={onInputChange}
            placeholder='Tu contraseña'
            className='form-control'
          />

          <label className='form-label mt-3' htmlFor='repeat-password'>
            <h6>Repite tu contraseña:</h6>
          </label>
          <input
            name='repeatPassword'
            value={repeatPassword}
            onChange={onInputChange}
            id='repeat-password'
            placeholder='Tu contraseña'
            type='password'
            className='form-control'
          />

          <div className='d-grid mt-4 mb-4'>
            <button className='btn btn-primary' type='submit'>
              Registrarte
            </button>
          </div>
          <Link to='/auth/login' className='link-primary mt-2'>
            Inicia sesión aquí
          </Link>
        </form>
      </div>
    </MainPage>
  );
};
