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

import AirportToHotel from './components/airport_to_hotel';
import HotelToAirport from './components/hotel_to_airport';
import HotelToHotel from './components/hotel_to_hotel';
import AirportToAirport from './components/airport_to_airport';




class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Container fluid style={{ lineHeight: '35px' }}>
            <Row>
              <Col  md={9} push={{ md: 3 }}>
                <div>
                  <Header />
                  <SectionOne />
                  <SectionTwo />
                  <SectionThree />
                  <SectionFour />
                  <SectionFive />
                  <SectionSix />
                  <Footer />
                </div>
              </Col>
              <Col md={3} pull={{ md: 9 }}>
                <div style={{ padding: '10px' }}>
                  <Tabs defaultActiveKey={1} animation={false} id="noanim-tab-example">
                    <Tab eventKey={1} title="Airport-Hotel">
                      <AirportToHotel />
                    </Tab>
                    <Tab eventKey={2} title="Hotel-Airport">
                      <HotelToAirport />
                    </Tab>
                    <Tab eventKey={3} title="Hotel-Hotel">
                      <HotelToHotel />
                    </Tab>
                    <Tab eventKey={4} title="Airport-Airport">
                      <AirportToAirport />
                    </Tab>
                  </Tabs>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
