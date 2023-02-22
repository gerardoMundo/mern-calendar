import { Link } from 'react-router-dom';
import { MainPage } from '../layout/MainPage';

export const RegisterPage = () => {
  return (
    <MainPage title='Registro'>
      <div className=' col align-items-center'>
        <form action='submit'>
          <label className='form-label' htmlFor='name'>
            <h6>Nombre:</h6>
          </label>
          <input
            className='form-control'
            id='name'
            placeholder='correo@correo.com'
            type='text'
          />

          <label className='form-label mt-3' htmlFor='mail'>
            <h6>Correo:</h6>
          </label>
          <input
            className='form-control'
            id='mail'
            placeholder='correo@correo.com'
            type='mail'
          />

          <label className='form-label mt-3' htmlFor='password'>
            <h6>Contraseña:</h6>
          </label>
          <input
            className='form-control'
            id='password'
            placeholder='Tu contraseña'
            type='password'
          />

          <label className='form-label mt-3' htmlFor='repeat-password'>
            <h6>Repite tu contraseña:</h6>
          </label>
          <input
            className='form-control'
            id='repeat-password'
            placeholder='Tu contraseña'
            type='password'
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
