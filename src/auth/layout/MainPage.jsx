import React from 'react';
import PropTypes from 'prop-types';

export const MainPage = ({ children, title }) => {
  return (
    <div style={{ backgroundColor: '#c6e2ff' }}>
      <div className='container d-grid col-5 vh-100'>
        <div className='col align-self-center'>
          <h3 className='text-center mb-4'>{title}</h3>
          {children}
        </div>
      </div>
    </div>
  );
};

MainPage.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
