import React from 'react';
import { withRouter } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = withRouter(({ children, location }) => (
  <div className='app'>
    <Header location={location}/>
    {children}
    <Footer />
  </div>
));

export default Layout;
