import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerRequest } from '../actions';

import '../assets/styles/components/Register.scss';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleUpdate = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerRequest(form);
    props.history.push('/')
  };

  return (
    <section className='register'>
      <section className='register__container'>
        <h2>Regístrate</h2>
        <form className='register__container--form' onSubmit={handleSubmit}>
          <input
            className='input'
            type='text'
            placeholder='Nombre'
            name='name'
            onChange={handleUpdate}
          />
          <input
            className='input'
            type='text'
            placeholder='Correo'
            name='email'
            onChange={handleUpdate}
          />
          <input
            className='input'
            type='password'
            placeholder='Contraseña'
            name='password'
            onChange={handleUpdate}
          />
          <button className='button' type='submit'>
            Registrarme
          </button>
        </form>
        <Link to='/login'>Iniciar sesión</Link>
      </section>
    </section>
  );
};

const mapDispatchToProps = {
  registerRequest
}

export default connect(null, mapDispatchToProps)(Register);
