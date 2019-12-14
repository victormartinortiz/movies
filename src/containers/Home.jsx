import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';

import '../assets/styles/App.scss';

const Home = props => {
  const { myList, trends, originals } = props;

  return (
    <>
      <Search />

      {myList.length > 0 && (
        <Categories title='My List'>
          <Carousel>
            {myList.map(item => (
              // eslint-disable-next-line react/jsx-props-no-spreading
              <CarouselItem key={item.id} {...item} isList />
            ))}
          </Carousel>
        </Categories>
      )}
      <Categories title='Trends'>
        <Carousel>
          {trends.map(item => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>

      <Categories title='Originals'>
        <Carousel>
          {originals.map(item => (
            // eslint-disable-next-line react/jsx-props-no-spreading
            <CarouselItem key={item.id} {...item} />
          ))}
        </Carousel>
      </Categories>
    </>
  );
};

Home.propTypes = {
  myList: PropTypes.array,
  trends: PropTypes.array,
  originals: PropTypes.array
};

const mapStateToProps = state => {
  return {
    myList: state.myList,
    trends: state.trends,
    originals: state.originals
  };
};

export default connect(mapStateToProps, null)(Home);
