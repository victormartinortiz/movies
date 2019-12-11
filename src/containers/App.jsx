import React from 'react';
import useFetch from '../hooks/useFetch';

import Header from '../components/Header';
import Search from '../components/Search';
import Categories from '../components/Categories';
import Carousel from '../components/Carousel';
import CarouselItem from '../components/CarouselItem';
import Footer from '../components/Footer';

import '../assets/styles/App.scss';

const API = 'http://localhost:3000/initalState';
// 'https://yts.lt/api/v2/list_movies.json';

const App = () => {
  const [data, loading] = useFetch(API);

  return (
    <div className='App'>
      <Header />
      <Search />
      <>
        {data.mylist !== undefined && data.mylist.length > 0 && (
          <Categories title='My List'>
            <Carousel>
              {data.mylist.map(item => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Categories>
        )}
        {loading ? (
          <div>loading...</div>
        ) : (
          <Categories title='Trends'>
            <Carousel>
              {data.trends.map(item => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Categories>
        )}
        {loading ? (
          <div>loading...</div>
        ) : (
          <Categories title='Originals'>
            <Carousel>
              {data.originals.map(item => (
                // eslint-disable-next-line react/jsx-props-no-spreading
                <CarouselItem key={item.id} {...item} />
              ))}
            </Carousel>
          </Categories>
        )}
      </>
      <Footer />
    </div>
  );
};

export default App;
