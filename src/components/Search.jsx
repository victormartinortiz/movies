/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { connect } from 'react-redux';
import { searchRequest } from '../actions';

import Categories from './Categories';
import Carousel from './Carousel';
import CarouselItem from './CarouselItem';

import '../assets/styles/components/Search.scss';

const Search = (props) => {
  const { search } = props;
  const hasSearch = Object.keys(search).length > 0;

  const handleInput = event => {
    console.log(event.target.value);
    props.searchRequest(event.target.value)
  };

  return (
    <>
      <section className='main'>
        <h2 className='main__title'>¿Qué quieres ver hoy?</h2>
        <input
          type='text'
          className='input'
          onChange={handleInput}
          placeholder='Buscar...'
        />
      </section>
      {hasSearch ? (
        <Categories title='Busqueda'>
          <Carousel>
            {search.map((item) =>
              <CarouselItem key={item.id} {...item} />
            )}
          </Carousel>
        </Categories>
      ) : null}
    </>
  );
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals,
    search: state.search
  };
};

const mapDispatchToProps = {
  searchRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);
