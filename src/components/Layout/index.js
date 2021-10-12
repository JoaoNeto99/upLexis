import React from "react";
import Footer from '../Footer/Footer';
import Routes from '../../Routes';
import { BrowserRouter } from "react-router-dom";


export default function Layout() {
  return (
    <BrowserRouter>
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}