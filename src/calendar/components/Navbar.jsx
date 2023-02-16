import React from 'react';

export const Navbar = () => {
  return (
    <div className='navbar navbar-dark bg-dark mb-4 px-4 p-3 align-items-center'>
      <span className='navbar-brand'>
        <i className='fas fa-calendar-alt'></i>
        &nbsp; Username
      </span>
      <button className='btn btn-danger'>
        <i className='fas fa-sign-out'></i>
        &nbsp;
        <span>Salir</span>
      </button>
    </div>
  );
};
