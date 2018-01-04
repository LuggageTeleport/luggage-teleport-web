import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';
import axios from 'axios';

class ATHFinalReview extends Component {


    constructor(props) {
        super(props);

        this.state = {
            isLoading: false
        }
    }


    PushData() {
        const { dispatch } = this.props;
        dispatch(PassBookData(this.props.BookData));
    }
    backToPayment = async => {
        this.PushData()
        this.props.history.push('/payment');
    }
    Submit = async => {
        const { Airline, Airport, ArrivalTime, DropoffDate, Email, FlightNumber, Hotel, HotelBookingRef,
            NameUnderHotelRsv, OvernightStorage, PhoneNumber, PickupDate } = this.props.BookData[0]
        console.log('final submit', this.props.BookData[0])
        let data = JSON.stringify({
            flightNumber: FlightNumber,
            status: 'Awaiting Payment',
            hotelReservationName: NameUnderHotelRsv,
            airport: Airport,
            hotel: Hotel,
            pickupDate: PickupDate,
            overnight: OvernightStorage,
            airline: Airline,
            estimatedArrival: ArrivalTime,
            type: 'Airport to Hotel',
            overnightDropoffdate: DropoffDate,
            hotelReference: HotelBookingRef,
            email: Email,
            phone: PhoneNumber
        })

        let token = localStorage.getItem('token')
        // console.log('token', token)
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }
        this.setState({ isLoading: true })

        axios.post('https://adf5ue28ya.execute-api.us-east-1.amazonaws.com/dev/handler/booking-create', data, config)
            .then((response) => {
                // console.log(response);
                alert('success booked!')
                this.props.history.push('/');
            }, (err) => {
                // console.log(err);
                this.setState({ isLoading: false })
            })
    }

    render() {
        const { Airline, Airport, ArrivalTime, DropoffDate, Email, FlightNumber, Hotel, HotelBookingRef,
            NameUnderHotelRsv, OvernightStorage, PhoneNumber, PickupDate } = this.props.BookData[0]
        const { PaymentMethod } = this.props.payment;
        return (
            <div>
                <div className="containerProgressBar" style={{ marginTop: '1em' }}>
                    <ul className="progressbar">
                        <li className="active">Booking</li>
                        <li className="active">Booking Review</li>
                        <li className="active">Payment Method</li>
                        <li>Booking/Payment Review &amp; Submit</li>
                    </ul>
                    <div className="receipt">
                        <h3>Contact Info</h3>
                        <p><strong>Email</strong> = {Email}</p>
                        <p><strong>Phone Number</strong> = {PhoneNumber}</p>
                        <hr />

                        <h3>Your Booking</h3>
                        <p><strong>Aiport</strong> = {Airport}</p>
                        <p><strong>Airline</strong> = {Airline}</p>
                        <p><strong>Flight Number</strong> = {FlightNumber}</p>
                        <p><strong>Pick up Date</strong> = {moment(PickupDate).format('Do MMMM YYYY')}</p>
                        <p><strong>Estimated Time of Arrival</strong> = {moment(ArrivalTime, ["HH:mm"]).format("hh:mm a")}</p>
                        <hr />

                        <p><strong>Hotel Drop Off</strong> = {Hotel}</p>
                        <p><strong>Hotel Booking Reference</strong> = {HotelBookingRef}</p>
                        <p><strong>Name under Hotel Reservation</strong> = {NameUnderHotelRsv}</p>
                        {
                            OvernightStorage === true ?
                                <p><strong>Overnight Storage</strong> = Yes</p>
                                :
                                <p><strong>Overnight Storage</strong> = No</p>
                        }
                        <p><strong>Drop off Date</strong> = {moment(DropoffDate).format('Do MMMM YYYY')}</p>
                        <hr />
                        <h3>Payment Method</h3>
                        with {PaymentMethod}
                    </div>

                    <div align="center">
                        <button type="button" class="btn btn-danger btn-lg" onClick={this.backToPayment} style={{ width: '160px' }}>Back</button>
                        {
                            !this.state.isLoading ?
                                <button type="button" class="btn btn-primary btn-lg"
                                    onClick={this.Submit}
                                    style={{ width: '160px', marginLeft: '1em' }}>Submit Data
                                 </button>
                                :
                                <button
                                    className="btn btn-lg btn-primary"
                                    type="button"
                                    style={{ width: '160px', marginLeft: '1em' }}
                                    disabled={true}
                                >
                                    <i className="fa fa-spinner fa-spin"></i> Submitting...
                                </button>
                        }

                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { BookData, payment } = state;
    return {
        BookData,
        payment
    }
}

export default connect(mapStateToProps, null)(ATHFinalReview);