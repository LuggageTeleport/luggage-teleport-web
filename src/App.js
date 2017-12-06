import React, { Component } from 'react';
import logo from './logo.svg';
import { Tabs, Tab } from 'react-bootstrap';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';

import Header from './components/header';
import SectionOne from './components/section_one';
import SectionTwo from './components/section_two';
import SectionThree from './components/section_three';
import SectionFour from './components/section_four';
import SectionFive from './components/section_five';
import SectionSix from './components/section_six';
import Footer from './components/footer';




class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <Footer />
      </div>
    );
  }
}

export default App;
