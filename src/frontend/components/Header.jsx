import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import propTypes from 'prop-types';
import { logoutRequest } from '../actions';

import gravatar from '../utils/gravatar';

import '../assets/styles/components/Header.scss';
import logo from '../assets/static/logo-platzi-video-BW2.png';
import userIcon from '../assets/static/user-icon.png';

const Header = props => {
  const { user, location } = props;
  const hasUser = Object.keys(user).length > 0;

  const handleLogout = () => {
    props.logoutRequest({});
  };

  return (
    <>
      {location.pathname === '/login' || location.pathname === '/register' ? (
        <Link to='/'>
          <header className='header header--loginOrRegister'>
            <img className='header__img' src={logo} alt='Platzi Video' />
          </header>
        </Link>
      ) : (
        <header className='header'>
          <Link to='/'>
            <img className='header__img' src={logo} alt='Platzi Video' />
          </Link>
          <div className='header__menu'>
            <div className='header__menu--profile'>
              <img
                src={hasUser ? gravatar(user.email) : userIcon}
                alt='User Icon'
              />
              <p>Perfil</p>
            </div>
            <ul>
              {hasUser ? (
                <li>
                  <Link to='#logout' onClick={handleLogout}>
                    Cerrar Sesión
                  </Link>
                </li>
              ) : (
                <li>
                  <Link to='/login'>Iniciar Sesión</Link>
                </li>
              )}
            </ul>
          </div>
        </header>
      )}
    </>
  );
};

Header.propTypes = {
  user: propTypes.object
};

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

const mapDispatchToProps = {
  logoutRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
