import React, { Component } from 'react';
import Select from 'react-select';
import 'react-select/dist/react-select.css';
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
                            <input
                                type="text"
                                placeholder="Flight Number"
                                className="form-control"
                                style={{ width: '260px' }}
                            />
                            <hr />
                            <input
                                type={this.state.dateType}
                                className="form-control"
                                placeholder="Pick up Date"
                                onFocus={() => this.setState({ dateType: 'date' })}
                                onBlur={() => this.setState({ dateType: 'text' })}
                                style={{ width: '260px' }}
                            />
                            <hr />
                            <input
                                type={this.state.timeType}
                                placeholder="Estimated Time of Arrival"
                                className="form-control"
                                onFocus={() => this.setState({ timeType: 'time' })}
                                onBlur={() => this.setState({ timeType: 'text' })}
                                style={{ width: '260px' }}
                            />
                            <hr />
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
                            <input
                                type="text"
                                placeholder="Flight Number"
                                className="form-control"
                                style={{ width: '260px' }}
                            />
                            <hr />
                            <input
                                type={this.state.timeType}
                                placeholder="Departure Time"
                                className="form-control"
                                onFocus={() => this.setState({ timeType: 'time' })}
                                onBlur={() => this.setState({ timeType: 'text' })}
                                style={{ width: '260px' }}
                            />
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

