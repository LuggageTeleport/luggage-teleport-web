import React, { Component } from 'react';

import FaPlane from 'react-icons/lib/fa/plane';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaCalendar from 'react-icons/lib/fa/calendar';
import MdHotel from 'react-icons/lib/md/hotel';
import FaUser from 'react-icons/lib/fa/user';
import '../App.css';

class HotelToAirport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            dateType: 'text',
            timeType: 'text',
            hotel: '',
            airport: '',
            airline: ''
        }
    }

    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Selected: ${selectedOption.label}`);
    }

    render() {
        return (
            <div class="polaroid">
                <div class="container">
                    <div className="form-inline">
                        <div className="form-group">
                            {/**
                         * Hotel Section
                         */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                value={this.state.hotel}
                                onChange={event => this.setState({ hotel: event.target.value })}>
                                <option value="" selected disabled>Hotel for Pick up</option>
                                <option value="shantika">Shantika Hotel Jakarta</option>
                                <option value="ritzcarlton">Ritz-Carlton Hotel</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#00bfff' }} /></span>
                                <input
                                    type='text'
                                    placeholder="Hotel Booking Reference"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaUser style={{ color: '#00bfff' }} /></span>
                                <input
                                    type='text'
                                    placeholder="Name under Hotel Reservation"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaCalendar style={{ color: '#00bfff' }} /></span>
                                <input
                                    type={this.state.dateType}
                                    className="form-control"
                                    placeholder="Pick up Date and Time"
                                    onFocus={() => this.setState({ dateType: 'datetime-local' })}
                                    onBlur={() => this.setState({ dateType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            {/**
                             * Airport Section
                             */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                value={this.state.airport}
                                onChange={event => this.setState({ airport: event.target.value })}>
                                <option value="" selected disabled>Choose Airport for Drop off</option>
                                <option value="sfo">San Fransisco intl Airport</option>
                                <option value="soetta">Soekarno-Hatta intl Airport</option>
                            </select>
                            <hr />
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                value={this.state.airline}
                                onChange={event => this.setState({ airline: event.target.value })}>
                                <option value="" selected disabled>Airline</option>
                                <option value="aa">American Airlines</option>
                                <option value="garuda">Garuda Airlines</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaPlane style={{ color: '#e6e600' }} /></span>
                                <input
                                    type="text"
                                    placeholder="Flight Number"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaClockO style={{ color: '#e6e600' }} /></span>
                                <input
                                    type={this.state.timeType}
                                    placeholder="Departure Time"
                                    className="form-control"
                                    onFocus={() => this.setState({ timeType: 'time' })}
                                    onBlur={() => this.setState({ timeType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <button
                                className="btn btn-lg"
                                type="button"
                                style={{ backgroundColor: 'yellow', width: '260px' }}>
                                Next
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelToAirport;