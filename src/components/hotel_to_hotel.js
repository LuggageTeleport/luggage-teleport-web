import React, { Component } from 'react';

import FaCalendar from 'react-icons/lib/fa/calendar';
import MdHotel from 'react-icons/lib/md/hotel';
import FaUser from 'react-icons/lib/fa/user';
import '../App.css';

class HotelToHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            dateType: 'text',
            timeType: 'text',
            hotelPickup: '',
            hotelDropoff: ''
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
                         * Hotel A Section
                         */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                value={this.state.hotelPickup}
                                onChange={event => this.setState({ hotelPickup: event.target.value })}>
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
                                    placeholder="Pick up Date"
                                    onFocus={() => this.setState({ dateType: 'date' })}
                                    onBlur={() => this.setState({ dateType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            {/**
                             * Hotel B Section
                             */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                value={this.state.hotelDropoff}
                                onChange={event => this.setState({ hotelDropoff: event.target.value })}>
                                <option value="" selected disabled>Hotel for Drop off</option>
                                <option value="shantika">Shantika Hotel Jakarta</option>
                                <option value="ritzcarlton">Ritz-Carlton Hotel</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#e6e600' }} /></span>
                                <input
                                    type='text'
                                    placeholder="Hotel Booking Reference"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaUser style={{ color: '#e6e600' }} /></span>
                                <input
                                    type='text'
                                    placeholder="Name under Hotel Reservation"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div>
                                <label style={{ float: 'left', marginRight: 5 }}>Overnight Storage</label>
                                <input type="radio" name="optradio" value="1" />Yes
                                <input type="radio" name="optradio" value="0" style={{ marginLeft: 5 }} />No
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaCalendar style={{ color: '#e6e600' }} /></span>
                                <input
                                    type={this.state.dateType}
                                    className="form-control"
                                    placeholder="Drop off Date"
                                    onFocus={() => this.setState({ dateType: 'date' })}
                                    onBlur={() => this.setState({ dateType: 'text' })}
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

export default HotelToHotel;