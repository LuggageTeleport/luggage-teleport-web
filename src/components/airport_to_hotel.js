import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
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
            selectedOption: '',
            dateType: 'text',
            timeType: 'text'
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
                         * Airport Section
                         */}
                            <Select
                                placeholder="Choose Airport for pickup"
                                value={this.state.selectedOption.value}
                                onChange={this.handleChange}
                                clearable={false}
                                options={[
                                    { value: 'sfo', label: 'San Fransisco intl Airport' },
                                    { value: 'soetta', label: 'Soekarno-Hatta intl Airport' },
                                ]}
                            />
                            <hr />
                            <Select
                                placeholder="Airline"
                                value={this.state.selectedOption.value}
                                onChange={this.handleChange}
                                clearable={false}
                                options={[
                                    { value: 'aa', label: 'American Airlines' },
                                    { value: 'garuda', label: 'Garuda Airlines' },
                                ]}
                            />
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaPlane style={{color:'#00bfff'}}/></span>
                                <input
                                    type="text"
                                    placeholder="Flight Number"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaCalendar style={{color:'#00bfff'}}/></span>
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
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaClockO style={{color:'#00bfff'}}/></span>
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
                             * Hotel Section
                             */}
                            <Select
                                placeholder="Hotel for Drop off"
                                value={this.state.selectedOption.value}
                                onChange={this.handleChange}
                                clearable={false}
                                options={[
                                    { value: 'shantika', label: 'Shantika Hotel Jakarta' },
                                    { value: 'ritzcarlton', label: 'Ritz-Carlton Hotel' },
                                ]}
                            />
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><MdHotel style={{color: '#e6e600'}}/></span>
                                <input
                                    type='text'
                                    placeholder="Hotel Booking Reference"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaUser style={{color: '#e6e600'}}/></span>
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
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaCalendar style={{color: '#e6e600'}}/></span>
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

export default AirportToHotel;