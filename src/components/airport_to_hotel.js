import React, { Component } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import { getCurrentUser } from '../aws_cognito';
import { FormGroup, InputGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import { PassBookData } from '../actions'

import FaPlane from 'react-icons/lib/fa/plane';
import FaClockO from 'react-icons/lib/fa/clock-o';
import FaCalendar from 'react-icons/lib/fa/calendar';
import MdHotel from 'react-icons/lib/md/hotel';
import FaUser from 'react-icons/lib/fa/user';
import FaClose from 'react-icons/lib/fa/close';
import '../App.css';

class AirportToHotel extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Email: '',
            PhoneNumber: '',
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
            OvernightStorage: false,
            showModal: false,
            BookingType: 'ATH'
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

    ValidationForm(){
        const {
            Airport,
            Airline,
            Hotel,
            FlightNumber,
            ArrivalTime,
            PickupDate,
            DropoffDate,
            HotelBookingRef,
            NameUnderHotelRsv,
        } =  this.state;

        return (
            Airport.length > 0 && Airline.length > 0 && Hotel.length > 0
            && FlightNumber.length > 0 && ArrivalTime.length > 0 && PickupDate.length > 0
            && HotelBookingRef.length > 0 && NameUnderHotelRsv.length > 0 && DropoffDate.length > 0
        )
    }

    buttonSubmit() {
        return (
            <Link to="/athreview" style={{color: 'black'}}>
                <button
                    className="btn btn-lg"
                    onClick={() => this.SubmitHotelToAirportData()}
                    type="button"
                    disabled={!this.ValidationForm()}
                    style={{ backgroundColor: 'yellow', width: '260px' }}>
                    Next
            </button>
            </Link>
        )
    }

    GetAirportData() {
        const AirportData = [
            {
                id: 1,
                name: "San Fransisco Intl Airport"
            },
            {
                id: 2,
                name: "Oakland Intl Airport"
            },
            {
                id: 3,
                name: "McCarran Intl Airport"
            }
        ]
        return AirportData;
    }

    GetAirlineData() {
        const AirlineData = [
            {
                id: 1,
                name: "Aer Lingus"
            },
            {
                id: 2,
                name: "Aeromexico"
            },
            {
                id: 3,
                name: "Alaska Airlines"
            },
            {
                id: 4,
                name: "Allegiant Air"
            },
            {
                id: 5,
                name: "Air Berlin"
            },
            {
                id: 6,
                name: "Air Canada"
            },
            {
                id: 7,
                name: "Air France"
            },
            {
                id: 8,
                name: "Air Mexico"
            },
            {
                id: 9,
                name: "American Airlines"
            },
            {
                id: 10,
                name: "ANAs"
            },
            {
                id: 11,
                name: "Austrian Airlines"
            },
            {
                id: 12,
                name: "Bangkok"
            },
            {
                id: 13,
                name: "British Airlines"
            },
            {
                id: 14,
                name: "Cathay Pacific"
            },
            {
                id: 15,
                name: "China Airlines"
            },
            {
                id: 16,
                name: "China Eastern Airlines"
            },
            {
                id: 17,
                name: "China Southern Airlines"
            },
            {
                id: 18,
                name: "Delta Airlines"
            },
            {
                id: 19,
                name: "easyJet"
            },
            {
                id: 20,
                name: "Egyptair"
            },
            {
                id: 21,
                name: "Emirites"
            },
            {
                id: 22,
                name: "Etihads Airlines"
            },
            {
                id: 23,
                name: "Eurowings"
            },
            {
                id: 24,
                name: "FinnAir"
            },
            {
                id: 25,
                name: "Frontier Airlines"
            },
            {
                id: 26,
                name: "Garuda Indonesia"
            },
            {
                id: 27,
                name: "Hawaiian Airlines"
            },
            {
                id: 28,
                name: "Hong Kong Airlines"
            },
            {
                id: 29,
                name: "Iberia"
            },
            {
                id: 30,
                name: "Icelandair"
            },
            {
                id: 31,
                name: "Indigo"
            },
            {
                id: 32,
                name: "Japan Airlines"
            },
            {
                id: 33,
                name: "jetBlue"
            },
            {
                id: 34,
                name: "Jetstar Asia"
            },
            {
                id: 35,
                name: "KLM"
            },
            {
                id: 36,
                name: "LAN Airlines"
            },
            {
                id: 37,
                name: "Lufthansa"
            },
            {
                id: 38,
                name: "Malaysia Airlines"
            },
            {
                id: 39,
                name: "Norwegian Airlines"
            },
            {
                id: 40,
                name: "Royal Jordanian"
            },
            {
                id: 41,
                name: "RyanAir"
            },
            {
                id: 42,
                name: "SAS Scandinavian"
            },
            {
                id: 43,
                name: "Scoot"
            },
            {
                id: 44,
                name: "SilkAir"
            },
            {
                id: 45,
                name: "S7 Airlines"
            },
            {
                id: 46,
                name: "SkyWest Airlines"
            },
            {
                id: 47,
                name: "South African Airlines"
            },
            {
                id: 48,
                name: "Southwest Airlines"
            },
            {
                id: 49,
                name: "Swiss International Airlines"
            },
            {
                id: 50,
                name: "Spirit Airlines"
            },
            {
                id: 51,
                name: "Turkish Airlines"
            },
            {
                id: 52,
                name: "United Airlines"
            },
            {
                id: 53,
                name: "Virgin America"
            },
            {
                id: 54,
                name: "Virgin Atlantic"
            },
            {
                id: 55,
                name: "Virgin Australia"
            },
            {
                id: 56,
                name: "Qantas Airlines"
            },
            {
                id: 57,
                name: "Qatar Airlines"
            },
            {
                id: 58,
                name: "Vivaaerobus"
            },
            {
                id: 59,
                name: "Volaris"
            },
            {
                id: 60,
                name: "WestJet"
            }
        ]
        return AirlineData;
    }

    GetHotelData() {
        const HotelData = [
            {
                id: 1,
                name: "Alexis Park"
            },
            {
                id: 2,
                name: "Arizona Charlie’s"
            },
            {
                id: 3,
                name: "Arizona Charlie’s Border"
            },
            {
                id: 4,
                name: "Alon"
            },
            {
                id: 5,
                name: "Bally’s"
            },
            {
                id: 6,
                name: "Bellagio"
            },
            {
                id: 7,
                name: "Best Western Plus Casino Royale"
            },
            {
                id: 8,
                name: "Boulder Station"
            },
            {
                id: 9,
                name: "California Hotel"
            },
            {
                id: 10,
                name: "Casino Royale"
            },
            {
                id: 11,
                name: "The Cannery"
            },
            {
                id: 12,
                name: "Ceasar’s Palace"
            },
            {
                id: 13,
                name: "Circus Circus"
            },
            {
                id: 14,
                name: "CityCenter"
            },
            {
                id: 15,
                name: "Clarion"
            },
            {
                id: 16,
                name: "Cosmopolitan"
            },
            {
                id: 17,
                name: "The Cromwell"
            },
            {
                id: 18,
                name: "Delano"
            },
            {
                id: 19,
                name: "Encore"
            },
            {
                id: 20,
                name: "Excalibur"
            },
            {
                id: 21,
                name: "Fiesta Henderson"
            },
            {
                id: 22,
                name: "Flamingo"
            },
            {
                id: 23,
                name: "Fontainebleau"
            },
            {
                id: 24,
                name: "Four Seasons Las Vegas"
            },
            {
                id: 25,
                name: "Golden Nugget Las Vegas Hotel & Casino"
            },
            {
                id: 26,
                name: "Green Valley Ranch"
            },
            {
                id: 27,
                name: "Hard Rock Hotel & Casino Las Vegas"
            },
            {
                id: 28,
                name: "Harrah’s"
            },
            {
                id: 29,
                name: "Hyatt Regency Las Vegas"
            },
            {
                id: 30,
                name: "Hyatt Regency Resort Las Vegas"
            },
            {
                id: 31,
                name: "Imperial Palace"
            },
            {
                id: 32,
                name: "Las Vegas Club"
            },
            {
                id: 33,
                name: "The Line"
            },
            {
                id: 34,
                name: "Luxor"
            },
            {
                id: 35,
                name: "JW Marriot Las Vegas"
            },
            {
                id: 36,
                name: "Main Street Station Casino & Hotel"
            },
            {
                id: 37,
                name: "Mandalay Bay"
            },
            {
                id: 38,
                name: "MGM Grand"
            },
            {
                id: 39,
                name: "The Mirage"
            },
            {
                id: 40,
                name: "Monte Carlo"
            },
            {
                id: 41,
                name: "New York-New York"
            },
            {
                id: 42,
                name: "Orleans"
            },
            {
                id: 43,
                name: "Palace Station"
            },
            {
                id: 44,
                name: "The Palazzo"
            },
            {
                id: 45,
                name: "Paris"
            },
            {
                id: 46,
                name: "Planet Hollywood"
            },
            {
                id: 47,
                name: "Plaza Hotel & Casino"
            },
            {
                id: 48,
                name: "Polo Towers"
            },
            {
                id: 49,
                name: "Quality Inn Las Vegas"
            },
            {
                id: 50,
                name: "Residence Inn Las Vegas"
            },
            {
                id: 51,
                name: "The Resort at Summerlin"
            },
            {
                id: 52,
                name: "Resorts World"
            },
            {
                id: 53,
                name: "Rio Suite Hotel"
            },
            {
                id: 54,
                name: "Riviera"
            },
            {
                id: 55,
                name: "Sam’s Town"
            },
            {
                id: 56,
                name: "SLS"
            },
            {
                id: 57,
                name: "Stratosphere"
            },
            {
                id: 58,
                name: "St. Tropez"
            },
            {
                id: 59,
                name: "Suncoast Casino Hotel"
            },
            {
                id: 60,
                name: "Sunset Station"
            },
            {
                id: 61,
                name: "Treasure Island"
            },
            {
                id: 62,
                name: "Tropicana"
            },
            {
                id: 63,
                name: "Tuscany Hotel & Casino"
            },
            {
                id: 64,
                name: "The Venetian"
            },
            {
                id: 65,
                name: "Western Hotel"
            },
            {
                id: 66,
                name: "Westgate Las Vegas Resort & Casino"
            },
            {
                id: 67,
                name: "The Westin Casuarina"
            },
            {
                id: 68,
                name: "Wild Wild West Hotel"
            },
            {
                id: 69,
                name: "Wynn Las Vegas"
            }
        ]

        return HotelData;
    }

    SubmitHotelToAirportData() {
        let datas = [];
        datas.push(this.state);
        this.props.PassBookData(datas);
    }



    componentDidMount() {
        console.log('this.props', this.props.user);
        const { Email, PhoneNumber } = this.props.user;
        this.setState({
            Email,
            PhoneNumber
        })
    }

    render() {

        const currentUser = getCurrentUser()
        // console.log(email, 'email')
        return (
            <div class="polaroid">
                <div class="container">
                    <div className="form-inline">
                        <div className="form-group">
                            <form>
                                {/**
                                * Airport Section
                                */}
                                <FormGroup>
                                    <InputGroup>
                                        <select
                                            className="form-control"
                                            style={{ height: '35px', width: '260px' }}
                                            onChange={event => this.setState({ Airport: event.target.value })}>
                                            <option value="" selected disabled>Choose Airport for pickup</option>
                                            {
                                                this.GetAirportData().map((airport) => {
                                                    return <option key={airport.id} value={airport.name}>{airport.name}</option>
                                                })
                                            }
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <select
                                            className="form-control"
                                            style={{ height: '35px', width: '260px' }}
                                            onChange={event => this.setState({ Airline: event.target.value })}>
                                            <option value="" selected disabled>Airline</option>
                                            {
                                                this.GetAirlineData().map((airline) => {
                                                    return <option key={airline.id} value={airline.name}>{airline.name}</option>
                                                })
                                            }
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaPlane style={{ color: '#00bfff' }} /></InputGroup.Addon>
                                        <input
                                            type="text"
                                            onChange={event => this.setState({ FlightNumber: event.target.value })}
                                            placeholder="Flight Number"
                                            className="form-control"
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
                                            className="form-control"
                                            placeholder="Pick up Date"
                                            onChange={event => this.setState({ PickupDate: event.target.value })}
                                            onFocus={() => this.setState({ dateType: 'date' })}
                                            onBlur={() => this.setState({ dateType: 'text' })}
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><FaClockO style={{ color: '#00bfff' }} /></InputGroup.Addon>
                                        <input
                                            type={this.state.timeType}
                                            placeholder="Estimated Time of Arrival"
                                            className="form-control"
                                            onChange={event => this.setState({ ArrivalTime: event.target.value })}
                                            onFocus={() => this.setState({ timeType: 'time' })}
                                            onBlur={() => this.setState({ timeType: 'text' })}
                                            style={{ width: '220px' }}
                                        />
                                    </InputGroup>
                                </FormGroup>
                                {/**
                             * Hotel Section
                             */}
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <select
                                            className="form-control"
                                            style={{ height: '35px', width: '260px' }}
                                            onChange={event => this.setState({ Hotel: event.target.value })}>
                                            <option value="" selected disabled>Hotel for Drop off</option>
                                            {
                                                this.GetHotelData().map((hotel) => {
                                                    return <option key={hotel.id} value={hotel.name}>{hotel.name}</option>
                                                })
                                            }
                                        </select>
                                    </InputGroup>
                                </FormGroup>
                                <hr />
                                <FormGroup>
                                    <InputGroup>
                                        <InputGroup.Addon style={{ backgroundColor: 'white' }}><MdHotel style={{ color: '#e6e600' }} /></InputGroup.Addon>
                                        <input
                                            type='text'
                                            onChange={event => this.setState({ HotelBookingRef: event.target.value })}
                                            placeholder="Hotel Booking Reference"
                                            className="form-control"
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
                                            placeholder="Name under Hotel Reservation"
                                            className="form-control"
                                            onChange={event => this.setState({ NameUnderHotelRsv: event.target.value })}
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
                                            className="form-control"
                                            placeholder="Drop off Date"
                                            onChange={event => this.setState({ DropoffDate: event.target.value })}
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

export default connect(mapsStateToProps, { PassBookData })(AirportToHotel);