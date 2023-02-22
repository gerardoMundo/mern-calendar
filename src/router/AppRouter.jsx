import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes } from '../auth';
import { CalendarPage } from '../calendar';

export const AppRouter = () => {
  const authStatus = 'not-authenticated';
  return (
    <Routes>
      {authStatus === 'authenticated' ? (
        <Route path='/*' element={<CalendarPage />} />
      ) : (
        <Route path='auth/*' element={<AuthRoutes />} />
      )}
      <Route path='/*' element={<Navigate to='/auth/login' />} />
    </Routes>
  );
};
