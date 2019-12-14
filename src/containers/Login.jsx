import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginRequest } from '../actions/index';

import googleIcon from '../assets/static/google-icon.png';
import twitterIcon from '../assets/static/twitter-icon.png';

import '../assets/styles/components/Login.scss';

const Login = props => {
  const [form, setValue] = useState({
    email: ''
  });

  const handleInput = event => {
    setValue({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginRequest(form);
    props.history.push('/');
  };

  return (
    <section className='login'>
      <section className='login__container'>
        <h2>Inicia sesión</h2>
        <form className='login__container--form' onSubmit={handleSubmit}>
          <input
            name='email'
            className='input'
            type='text'
            placeholder='Correo'
            onChange={handleInput}
          />
          <input
            name='password'
            className='input'
            type='password'
            placeholder='Contraseña'
            onChange={handleInput}
          />
          <button className='button' type='submit'>
            Iniciar sesión
          </button>
          <div className='login__container--remember-me'>
            <label htmlFor='cbox1'>
              <input type='checkbox' id='cbox1' value='first_checkbox' />
              Recuérdame
            </label>
            <Link to='/'>Olvidé mi contraseña</Link>
          </div>
        </form>
        <section className='login__container--social-media'>
          <div>
            <img src={googleIcon} alt='google-icon' /> Inicia sesión con Google
          </div>
          <div>
            <img src={twitterIcon} alt='twitter-icon' /> Inicia sesión con
            Twitter
          </div>
        </section>
        <p className='login__container--register'>
          No tienes ninguna cuenta?
          <Link to='/register'> Regístrate</Link>
        </p>
      </section>
    </section>
  );
};

Login.propTypes = {
  loginRequest: PropTypes.func
}

const mapDispatchToProps = {
  loginRequest,
};

export default connect(null, mapDispatchToProps)(Login);
