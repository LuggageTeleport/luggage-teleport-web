import React, { Component } from 'react';

import FaPlane from 'react-icons/lib/fa/plane';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaCalendar from 'react-icons/lib/fa/calendar';
import '../App.css';

class AirportToAirport extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedOption: '',
            dateType: 'text',
            timeType: 'text',
            airportPickup: '',
            airportDropoff: '',
            airlinePickup: '',
            airlineDropoff: ''
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
                         * Airport A Section
                         */}
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                value={this.state.airportPickup}
                                onChange={event => this.setState({ airportPickup: event.target.value })}>
                                <option value="" selected disabled>Choose Airport for pickup</option>
                                <option value="sfo">San Fransisco intl Airport</option>
                                <option value="soetta">Soekarno-Hatta intl Airport</option>
                            </select>
                            <hr />
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                value={this.state.airlinePickup}
                                onChange={event => this.setState({ airlinePickup: event.target.value })}>
                                <option value="" selected disabled>Airline</option>
                                <option value="aa">American Airlines</option>
                                <option value="garuda">Garuda Airlines</option>
                            </select>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaPlane style={{ color: '#00bfff' }} /></span>
                                <input
                                    type="text"
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
                                value={this.state.airportDropoff}
                                onChange={event => this.setState({ airportDropoff: event.target.value })}>
                                <option value="" selected disabled>Choose Airport for Drop off</option>
                                <option value="sfo">San Fransisco intl Airport</option>
                                <option value="soetta">Soekarno-Hatta intl Airport</option>
                            </select>
                            <hr />
                            <select
                                className="form-control"
                                style={{ height: '35px', width: '260px' }}
                                value={this.state.airlineDropoff}
                                onChange={event => this.setState({ airlineDropoff: event.target.value })}>
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

export default AirportToAirport;

