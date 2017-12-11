import React, { Component } from 'react';

import FaCalendar from 'react-icons/lib/fa/calendar';
import MdHotel from 'react-icons/lib/md/hotel';
import FaUser from 'react-icons/lib/fa/user';
import '../App.css';

class HotelToHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dateType: 'text',
            timeType: 'text',
            HotelPickup: '',
            HotelPickupBookingRef: '',
            RsvpNameHotelPickup: '',
            HotelPickupDate: '',
            HotelDropoff: '',
            HotelDropoffBookingRef: '',
            RsvpNameHotelDropoff: '',
            OvernightStorage: false,
            HotelDropoffDate: ''
        }
    }

    SubmitHotelToHotelData() {
        const {
            HotelPickup,
            HotelPickupBookingRef,
            RsvpNameHotelPickup,
            HotelPickupDate,
            HotelDropoff,
            HotelDropoffBookingRef,
            RsvpNameHotelDropoff,
            OvernightStorage,
            HotelDropoffDate } = this.state;

        console.log(this.state);
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
                                onChange={event => this.setState({ HotelPickup: event.target.value })}>
                                <option value="" selected disabled>Hotel for Pick up</option>
                                <option value="shantika">Shantika Hotel Jakarta</option>
                                <option value="ritzcarlton">Ritz-Carlton Hotel</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#00bfff' }} /></span>
                                <input
                                    type='text'
                                    onChange={e => this.setState({ HotelPickupBookingRef: e.target.value })}
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
                                    onChange={e => this.setState({ RsvpNameHotelPickup: e.target.value })}
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
                                    onChange={e => this.setState({ HotelPickupDate: e.target.value })}
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
                                onChange={event => this.setState({ HotelDropoff: event.target.value })}>
                                <option value="" selected disabled>Hotel for Drop off</option>
                                <option value="shantika">Shantika Hotel Jakarta</option>
                                <option value="ritzcarlton">Ritz-Carlton Hotel</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#e6e600' }} /></span>
                                <input
                                    type='text'
                                    onChange={e => this.setState({ HotelDropoffBookingRef: e.target.value })}
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
                                    onChange={e => this.setState({ RsvpNameHotelDropoff: e.target.value })}
                                    placeholder="Name under Hotel Reservation"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div>
                                <label style={{ float: 'left', marginRight: 5 }}>Overnight Storage</label>
                                <input type="radio" name="optradio" onChange={e => this.setState({ OvernightStorage: true })} />Yes
                                <input type="radio" name="optradio" style={{ marginLeft: 5 }} onChange={e => this.setState({ OvernightStorage: false })} />No
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaCalendar style={{ color: '#e6e600' }} /></span>
                                <input
                                    type={this.state.dateType}
                                    className="form-control"
                                    placeholder="Drop off Date"
                                    onChange={e => this.setState({ HotelDropoffDate: e.target.value })}
                                    onFocus={() => this.setState({ dateType: 'date' })}
                                    onBlur={() => this.setState({ dateType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />

                            <button
                                className="btn btn-lg"
                                type="button"
                                onClick={() => this.SubmitHotelToHotelData()}
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