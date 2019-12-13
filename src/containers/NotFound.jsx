import React from 'react';

import notFoundIcon from '../assets/static/404.png';
import '../assets/styles/components/NotFound.scss'

const notFound = () => (
  <>
    <div className='errorpage'>
      <div className='erropage-container'>
        <div className='errorpage-topImage'>
          <figure className='errorpage-image'>
            <img
              src={notFoundIcon}
              alt='page not found 404'
            />
          </figure>
        </div>
        <div className='errorpage-text'>
          <h3>Hmmm!</h3>
          <p>No encontramos lo que buscabas.</p>
        </div>
      </div>
    </div>
  </>
);

export default notFound;
