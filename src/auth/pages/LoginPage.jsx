import { Link } from 'react-router-dom';
import { MainPage } from '../layout/MainPage';

export const LoginPage = () => {
  return (
    <MainPage title='Iniciar sesión'>
      <div className=' col align-items-center'>
        <form action='submit'>
          <label className='form-label' htmlFor='mail'>
            <h6>Correo:</h6>
          </label>
          <input
            className='form-control'
            id='mail'
            placeholder='correo@correo.com'
            type='mail'
          />

          <label className='form-label mt-3' htmlFor='mail'>
            <h6>Contraseña:</h6>
          </label>
          <input
            className='form-control'
            id='mail'
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
