import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'

import FaCalendar from 'react-icons/lib/fa/calendar';
import MdHotel from 'react-icons/lib/md/hotel';
import FaUser from 'react-icons/lib/fa/user';
import FaClose from 'react-icons/lib/fa/close';
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

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }


    handleOpenModal() {
        this.setState({ showModal: true });
    }

    handleCloseModal() {
        this.setState({ showModal: false });
    }

    PopupModal() {
        return (
            <div>
                <button
                    className="btn btn-lg"
                    onClick={this.handleOpenModal}
                    type="button"
                    style={{ backgroundColor: 'yellow', width: '260px' }}>
                    Next
                </button>
                <Modal
                    isOpen={this.state.showModal}
                    contentLabel="onRequestClose Example"
                    onRequestClose={this.handleCloseModal}
                    style={{ position: 'fixed' }}
                >
                    <div className="popup-image">
                        <button style={{ margin: 5 }} className="btn btn-sm btn-danger" onClick={this.handleCloseModal}><FaClose /></button>

                        <div align="center" style={{ marginTop: '10px' }}>
                            <img
                                src="https://www.luggageteleport.com/wp-content/themes/luggage/images/logo.png"
                                style={{ padding: '10px', margin: '20px' }}
                            />
                            <div style={{ marginTop: '3em' }}>
                                <Link to="/login"><button className="btn btn-lg btn-default">Login</button></Link>
                                <h3 style={{ marginTop: '2em' }}>Or</h3>
                                <Link to="/register"><button className="btn btn-lg btn-default">Sign Up</button></Link>
                            </div>
                        </div>
                    </div>
                </Modal>
            </div>
        );
    }

    buttonSubmit() {
        return (
            <button
                className="btn btn-lg"
                onClick={() => this.SubmitHotelToAirportData()}
                type="button"
                style={{ backgroundColor: 'yellow', width: '260px' }}>
                Next
        </button>
        )
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
        const { email, isLogin } = this.props.user.user;
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

                            {
                                !isLogin ?
                                    this.PopupModal()
                                    : this.buttonSubmit()
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default HotelToHotel;