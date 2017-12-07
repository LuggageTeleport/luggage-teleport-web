import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
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
                         * Airport A Section
                         */}
                            <Select
                                placeholder="Choose Airport for pick up"
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
                             * Airport B Section
                             */}
                            <Select
                                placeholder="Choose Airport for Drop off"
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
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaPlane style={{color: '#e6e600'}}/></span>
                                <input
                                    type="text"
                                    placeholder="Flight Number"
                                    className="form-control"
                                    style={{ width: '220px' }}
                                />
                            </div>
                            <hr />
                            <div class="input-group">
                                <span class="input-group-addon" style={{ backgroundColor: 'white' }}><FaClockO style={{color: '#e6e600'}}/></span>
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

