import React, { Component } from "react";
import { Slide } from "react-slideshow-image";
import "./styles.css";
import "react-slideshow-image/dist/styles.css";
import { QRCode } from 'react-qrcode-logo';
import Gallery  from "./gallery";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/DAO">
            <DAO />
          </Route>


          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}




function Home() {
  return <Gallery/>;
}

function DAO() {
  return <h2>About</h2>;
}

