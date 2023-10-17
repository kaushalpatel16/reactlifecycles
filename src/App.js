import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Fetchapi from './fetchapi';
import HeaderNavbar from './headernavbar';
export default class componentName extends Component {
  render() {
    return (
      <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HeaderNavbar/>}>
          <Route index element={<Fetchapi />} />
        </Route>
      </Routes>
    </BrowserRouter>
   </>
    );
  }
}

