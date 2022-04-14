import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Gallery from './gallery';
import DAO from './dao';

const Webpages = () => {
    return(
        <Router>
            <Route path="/" element= {<Gallery/>} />
            <Route path = "/DAO" element = {<DAO/>} />

        </Router>
    );
};
export default Webpages;