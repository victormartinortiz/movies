import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { getVideoSource } from '../actions';

import '../assets/styles/components/Player.scss';

const Player = props => {
  const { match, playing } = props;
  const hasPlaying = Object.keys(playing).length > 0;

  useEffect(() => {
    props.getVideoSource(match.params.id);
  }, []);

  return hasPlaying ? (
    <div className='Player'>
      <video controls autoPlay>
        <source src={playing.source} type='video/mp4' />
      </video>
      <div className='Player-back'>
        <button
          type='button'
          onClick={() => props.history.goBack()}
        >
          Regresar
        </button>
      </div>
    </div>
  ) : (
    setTimeout(() => {
      <Redirect to='/404' />;
    }, 0)
  );
};

Player.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  playing: PropTypes.object.isRequired,
  getVideoSource: PropTypes.func.isRequired
}
const mapDispatchToProps = {
  getVideoSource
};

const mapStateToProps = state => {
  return {
    playing: state.playing
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Player);
