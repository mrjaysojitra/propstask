import React from 'react'
import PropTypes from 'prop-types'
import { Footer } from './Footer';

import Header from './Header';


const MyHoc = (Component) => () => (
    <div>
        <Header />

            <div><Component /></div>


        <Footer />
    </div>
);

export default MyHoc;