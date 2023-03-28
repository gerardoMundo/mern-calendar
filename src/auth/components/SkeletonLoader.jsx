import { MainPage } from '../layout/MainPage';

export const SkeletonLoader = () => {
  return (
    <MainPage title='Cargando'>
      <div className='d-flex justify-content-center'>
        <div
          className='spinner-grow text-light'
          style={{ width: '3rem', height: '3rem', marginBottom: '2rem' }}
          role='status'
        >
          <span className='visually-hidden'>Loading...</span>
        </div>
      </div>

      <div className='col align-items-center'>
        <p className='placeholder-glow'>
          <span className='placeholder col-6'></span>
        </p>

        <p className='placeholder-glow'>
          <span
            style={{ height: '2.4rem' }}
            className='placeholder placeholder-lg col-12 bg-light'
          ></span>
        </p>

        <p className='placeholder-glow'>
          <span className='placeholder col-6'></span>
        </p>
        <p className='placeholder-glow'>
          <span
            style={{ height: '2.4rem' }}
            className='placeholder placeholder-lg col-12 bg-light'
          ></span>
        </p>

        <div className='d-grid mt-4 mb-4'>
          <a className='btn btn-primary placeholder disabled'></a>
        </div>
      </div>
    </MainPage>
  );
};
