import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom'
import { getCurrentUser } from '../aws_cognito';
import { connect } from 'react-redux';

import FaPlane from 'react-icons/lib/fa/plane';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaClose from 'react-icons/lib/fa/close';
import '../App.css';

class AirportToAirport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email:'',
            dateType: 'text',
            timeType: 'text',
            AirportPickup: '',
            AirlinePickup: '',
            PickupFlightNumber: '',
            PickupDate: '',
            ArrivalTime: '',
            AirportDropoff: '',
            AirlineDropoff: '',
            DropoffFlightNumber: '',
            DepartureTime: ''
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
                            <div style={{marginTop: '3em'}}>
                                <Link to="/login"><button className="btn btn-lg btn-default">Login</button></Link>
                                <h3 style={{marginTop: '2em'}}>Or</h3>
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
                onClick={() => this.SubmitAirportToAirportData()}
                type="button"
                style={{ backgroundColor: 'yellow', width: '260px' }}>
                Next
        </button>
        )
    }

    SubmitAirportToAirportData() {
        const {
            AirportPickup,
            AirlinePickup,
            PickupFlightNumber,
            PickupDate,
            ArrivalTime,
            AirportDropoff,
            AirlineDropoff,
            DropoffFlightNumber,
            DepartureTime } = this.state;

        console.log(this.state);
    }

    componentDidMount(){
        // console.log('this.props', this.props.user);
        const { email } = this.props.user;
        this.setState({email})
    }

    render() {
        // const { email } = this.props.user.user;
        const currentUser = getCurrentUser()
        return (
            <div class="polaroid">
                <div class="container">
                    <div className="form-inline">
                        <div className="form-group">
                            {/**
                         * Airport A Section
                         */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                onChange={event => this.setState({ AirportPickup: event.target.value })}>
                                <option value="" selected disabled>Choose Airport for pickup</option>
                                <option value="sfo">San Fransisco intl Airport</option>
                                <option value="soetta">Soekarno-Hatta intl Airport</option>
                            </select>
                            <hr />
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                onChange={event => this.setState({ AirlinePickup: event.target.value })}>
                                <option value="" selected disabled>Airline</option>
                                <option value="aa">American Airlines</option>
                                <option value="garuda">Garuda Airlines</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaPlane style={{ color: '#00bfff' }} /></span>
                                <input
                                    type="text"
                                    onChange={e => this.setState({ PickupFlightNumber: e.target.value })}
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
                                    onChange={e => this.setState({ PickupDate: e.target.value })}
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
                                    onChange={e => this.setState({ ArrivalTime: e.target.value })}
                                    onFocus={() => this.setState({ timeType: 'time' })}
                                    onBlur={() => this.setState({ timeType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            {/**
                             * Airport B Section
                             */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                onChange={event => this.setState({ AirportDropoff: event.target.value })}>
                                <option value="" selected disabled>Choose Airport for Drop off</option>
                                <option value="sfo">San Fransisco intl Airport</option>
                                <option value="soetta">Soekarno-Hatta intl Airport</option>
                            </select>
                            <hr />
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                onChange={event => this.setState({ AirlineDropoff: event.target.value })}>
                                <option value="" selected disabled>Airline</option>
                                <option value="aa">American Airlines</option>
                                <option value="garuda">Garuda Airlines</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaPlane style={{ color: '#e6e600' }} /></span>
                                <input
                                    type="text"
                                    onChange={e => this.setState({ DropoffFlightNumber: e.target.value })}
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
                                    onChange={e => this.setState({ DepartureTime: e.target.value })}
                                    onFocus={() => this.setState({ timeType: 'time' })}
                                    onBlur={() => this.setState({ timeType: 'text' })}
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            {
                                !currentUser ?
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

function mapsStateToProps(state) {
    const { user } = state;
    return {
      user
    }
  }

export default connect(mapsStateToProps, null)(AirportToAirport);

