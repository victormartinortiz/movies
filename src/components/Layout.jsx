import React from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './Header';
import Footer from './Footer';

const Layout = withRouter(({ children, location }) => (
  <div className='app'>
    <Header location={location}/>
    {children}
    <Footer />
  </div>
));

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  location: PropTypes.object
}

export default Layout;
