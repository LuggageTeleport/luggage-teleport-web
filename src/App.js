import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Container, Row, Col } from 'react-grid-system';
import MdLocalAirport from 'react-icons/lib/md/local-airport';
import MdHotel from 'react-icons/lib/md/hotel';
import GoArrowSmallRight from 'react-icons/lib/go/arrow-small-right';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import MediaQuery from 'react-responsive';
import ReactTooltip from 'react-tooltip';
import { slide as Menu } from 'react-burger-menu'
import { connect } from 'react-redux';

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

import BookingForm from './components/booking_form';



class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    // console.log('this.props', this.props.user);
    return (
      <div>
        <ReactTooltip place="bottom" type="info" effect="solid" />
        <div>
        {
            /**
             * Desktop View
             */
          }
          <MediaQuery query="(min-device-width: 800px)">
            <Container fluid style={{ lineHeight: '35px' }}>
              <Row>
                <Col md={9} push={{ md: 3 }}>
                  <div>
                    <Header/>
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
                  <BookingForm />
                </Col>
              </Row>
            </Container>
          </MediaQuery>
          {
            /**
             * Mobile View
             */
          }
          <MediaQuery query="(max-device-width: 800px)">
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
          </MediaQuery>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { user } = state;
  return {
    user
  }
}

export default connect(mapStateToProps, null)(App);
