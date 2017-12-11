import React, { Component } from 'react';

import FaPlane from 'react-icons/lib/fa/plane';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaCalendar from 'react-icons/lib/fa/calendar';
import MdHotel from 'react-icons/lib/md/hotel';
import FaUser from 'react-icons/lib/fa/user';
import '../App.css';

class AirportToHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateType: 'text',
            timeType: 'text',
            Airport: '',
            Airline: '',
            Hotel: '',
            FlightNumber: '',
            ArrivalTime: '',
            PickupDate: '',
            DropoffDate: '',
            HotelBookingRef: '',
            NameUnderHotelRsv: '',
            OvernightStorage: false
        }
    }

    SubmitHotelToAirportData() {
        const {
            airline,
            airport,
            hotel,
            FlightNumber,
            ArrivalTime,
            PickupDate,
            DropoffDate,
            HotelBookingRef,
            NameUnderHotelRsv } = this.state;

            console.log(this.state)
    }

    render() {
        return (
            <div class="polaroid">
                <div class="container">
                    <div className="form-inline">
                        <div className="form-group">
                            {/**
                         * Airport Section
                         */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                onChange={event => this.setState({ Airport: event.target.value })}>
                                <option value="" selected disabled>Choose Airport for pickup</option>
                                <option value="sfo">San Fransisco intl Airport</option>
                                <option value="soetta">Soekarno-Hatta intl Airport</option>
                            </select>
                            <hr />
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                onChange={event => this.setState({ Airline: event.target.value })}>
                                <option value="" selected disabled>Airline</option>
                                <option value="aa">American Airlines</option>
                                <option value="garuda">Garuda Airlines</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaPlane style={{ color: '#00bfff' }} /></span>
                                <input
                                    type="text"
                                    onChange={event => this.setState({ FlightNumber: event.target.value })}
                                    placeholder="Flight Number"
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
                                    onChange={event => this.setState({ PickupDate: event.target.value })}
                                    onFocus={() => this.setState({ dateType: 'date' })}
                                    onBlur={() => this.setState({ dateType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaClockO style={{ color: '#00bfff' }} /></span>
                                <input
                                    type={this.state.timeType}
                                    placeholder="Estimated Time of Arrival"
                                    className="form-control"
                                    onChange={event => this.setState({ ArrivalTime: event.target.value })}
                                    onFocus={() => this.setState({ timeType: 'time' })}
                                    onBlur={() => this.setState({ timeType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            {/**
                             * Hotel Section
                             */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                onChange={event => this.setState({ Hotel: event.target.value })}>
                                <option value="" selected disabled>Hotel for Drop off</option>
                                <option value="shantika">Shantika Hotel Jakarta</option>
                                <option value="ritzcarlton">Ritz-Carlton Hotel</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#e6e600' }} /></span>
                                <input
                                    type='text'
                                    onChange={event => this.setState({ HotelBookingRef: event.target.value })}
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
                                    onChange={event => this.setState({ NameUnderHotelRsv: event.target.value })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div>
                                <label style={{ float: 'left', marginRight: 5 }}>Overnight Storage</label>
                                <input type="radio" name="optradio" onChange={e => this.setState({OvernightStorage: true})}/>Yes
                                <input type="radio" name="optradio" style={{ marginLeft: 5 }} onChange={e => this.setState({OvernightStorage: false})}/>No
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaCalendar style={{ color: '#e6e600' }} /></span>
                                <input
                                    type={this.state.dateType}
                                    className="form-control"
                                    placeholder="Drop off Date"
                                    onChange={event => this.setState({ DropoffDate: event.target.value })}
                                    onFocus={() => this.setState({ dateType: 'date' })}
                                    onBlur={() => this.setState({ dateType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />

                            <button
                                className="btn btn-lg"
                                onClick={() => this.SubmitHotelToAirportData()}
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

export default AirportToHotel;