import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import '../App.css';
import { Link } from 'react-router-dom';

import AirportToHotel from './airport_to_hotel';
import HotelToAirport from './hotel_to_airport';
import HotelToHotel from './hotel_to_hotel';
import AirportToAirport from './airport_to_airport';

import MdLocalAirport from 'react-icons/lib/md/local-airport';
import MdHotel from 'react-icons/lib/md/hotel';
import GoArrowSmallRight from 'react-icons/lib/go/arrow-small-right';

class BookingForm extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="bookingForm" style={{ marginLeft: 9 }}>
                <div className="SideBar" style={{ marginBottom: '20px;' }}>
                    <button type="button" class="btn btn-danger">
                        <Link to="/" style={{color: 'white'}}> Back</Link>
                    </button>
                </div>
                <div style={{ marginTop: '30px' }}>

                    <Tabs>
                        <TabList>
                            <Tab data-tip="Airport - Hotel">
                                <MdLocalAirport style={{ fontSize: '1.1em', color: '#00bfff' }} />
                                <GoArrowSmallRight />
                                <MdHotel style={{ fontSize: '1.1em', color: '#e6e600' }} />
                            </Tab>
                            <Tab data-tip="Hotel - Airport">
                                <MdHotel style={{ fontSize: '1.1em', color: '#00bfff' }} />
                                <GoArrowSmallRight />
                                <MdLocalAirport style={{ fontSize: '1.1em', color: '#e6e600' }} />
                            </Tab>
                            <Tab data-tip="Hotel - Hotel">
                                <MdHotel style={{ fontSize: '1.1em', color: '#00bfff' }} />
                                <GoArrowSmallRight />
                                <MdHotel style={{ fontSize: '1.1em', color: '#e6e600' }} />
                            </Tab>
                            <Tab data-tip="Airport - Airport">
                                <MdLocalAirport style={{ fontSize: '1.1em', color: '#00bfff' }} />
                                <GoArrowSmallRight />
                                <MdLocalAirport style={{ fontSize: '1.1em', color: '#e6e600' }} />
                            </Tab>
                        </TabList>

                        <TabPanel>
                            <AirportToHotel />
                        </TabPanel>
                        <TabPanel>
                            <HotelToAirport />
                        </TabPanel>
                        <TabPanel>
                            <HotelToHotel />
                        </TabPanel>
                        <TabPanel>
                            <AirportToAirport />
                        </TabPanel>
                    </Tabs>
                </div>
            </div>
        )
    }

}

export default BookingForm;