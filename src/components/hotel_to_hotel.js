import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../aws_cognito';
import { FormGroup, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';

import FaCalendar from 'react-icons/lib/fa/calendar';
import MdHotel from 'react-icons/lib/md/hotel';
import FaUser from 'react-icons/lib/fa/user';
import FaClose from 'react-icons/lib/fa/close';
import '../App.css';

class HotelToHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            PhoneNumber: '',
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
            HotelDropoffDate: '',
            BookingType: 'HTH'
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
            <Link to="/hthreview" style={{color: 'black'}}>
                <button
                    className="btn btn-lg"
                    onClick={() => this.SubmitHotelToHotelData()}
                    type="button"
                    style={{ backgroundColor: 'yellow', width: '260px' }}>
                    Next
            </button>
            </Link>
        )
    }

    SubmitHotelToHotelData() {
        let datas = [];
        datas.push(this.state);
        this.props.PassBookData(datas);
    }

    componentDidMount() {
        // console.log('this.props', this.props.user);
        const { Email, PhoneNumber } = this.props.user;
        this.setState({ Email, PhoneNumber })
    }

    render() {
        const currentUser = getCurrentUser()
        return (
            <div class="polaroid">
                <div class="container">
                    <div className="form-inline">
                        <div className="form-group">
                            <form>
                                {/**
                                * Hotel A Section
                                */}
                                <FormGroup>
                                    <InputGroup>
                                        <select
                                            className="inputResponsive"
                                            style={{ height: '35px', width: '260px' }}
                                            onChange={event => this.setState({ HotelPickup: event.target.value })}>
                                            <option value="" selected disabled>Hotel for Pick up</option>
                                            <option value="Shantika Hotel Jakarta">Shantika Hotel Jakarta</option>
                                            <option value="Ritz-Carlton Hotel">Ritz-Carlton Hotel</option>
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#00bfff' }} /></InputGroup.Addon>
                                        <input
                                            type='text'
                                            onChange={e => this.setState({ HotelPickupBookingRef: e.target.value })}
                                            placeholder="Hotel Booking Reference"
                                            className="inputResponsive"
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaUser style={{ color: '#00bfff' }} /></InputGroup.Addon>
                                        <input
                                            type='text'
                                            onChange={e => this.setState({ RsvpNameHotelPickup: e.target.value })}
                                            placeholder="Name under Hotel Reservation"
                                            className="inputResponsive"
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaCalendar style={{ color: '#00bfff' }} /></InputGroup.Addon>
                                        <input
                                            type={this.state.dateType}
                                            className="inputResponsive"
                                            placeholder="Pick up Date"
                                            onChange={e => this.setState({ HotelPickupDate: e.target.value })}
                                            onFocus={() => this.setState({ dateType: 'date' })}
                                            onBlur={() => this.setState({ dateType: 'text' })}
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                {/**
                                * Hotel B Section
                                */}
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <select
                                            className="inputResponsive"
                                            style={{ height: '35px', width: '260px' }}
                                            onChange={event => this.setState({ HotelDropoff: event.target.value })}>
                                            <option value="" selected disabled>Hotel for Drop off</option>
                                            <option value="Shantika Hotel Jakarta">Shantika Hotel Jakarta</option>
                                            <option value="Ritz-Carlton Hotel">Ritz-Carlton Hotel</option>
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#e6e600' }} /></InputGroup.Addon>
                                        <input
                                            type='text'
                                            onChange={e => this.setState({ HotelDropoffBookingRef: e.target.value })}
                                            placeholder="Hotel Booking Reference"
                                            className="inputResponsive"
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaUser style={{ color: '#e6e600' }} /></InputGroup.Addon>
                                        <input
                                            type='text'
                                            onChange={e => this.setState({ RsvpNameHotelDropoff: e.target.value })}
                                            placeholder="Name under Hotel Reservation"
                                            className="inputResponsive"
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                {/* <div>
                                    Overnight Storage
                                    <input type="radio" name="optradio" onChange={e => this.setState({ OvernightStorage: true })} />Yes
                                    <input type="radio" name="optradio" onChange={e => this.setState({ OvernightStorage: false })} />No
                                </div>
                                <hr /> */}
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaCalendar style={{ color: '#e6e600' }} /></InputGroup.Addon>
                                        <input
                                            type={this.state.dateType}
                                            className="inputResponsive"
                                            placeholder="Drop off Date"
                                            onChange={e => this.setState({ HotelDropoffDate: e.target.value })}
                                            onFocus={() => this.setState({ dateType: 'date' })}
                                            onBlur={() => this.setState({ dateType: 'text' })}
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                {
                                    !currentUser ?
                                        this.PopupModal()
                                        : this.buttonSubmit()
                                }
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

function mapsStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapsStateToProps, { PassBookData })(HotelToHotel);