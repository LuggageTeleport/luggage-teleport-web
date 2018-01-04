import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';

class HTAFinalReview extends Component {

    constructor(props) {
        super(props);
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
        alert('Under Development :)');
        console.log('final submit', this.props.BookData[0])
    }

    render() {
        console.log('final review', this.props.BookData[0])
        console.log('final review', this.props.payment)
        const { Airline, Airport, DepartureTime, Email, FlightNumber, Hotel, HotelBookingRef, NameUnderHotelRsv, 
            PhoneNumber, PickupDatetime } = this.props.BookData[0];
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
                        <p><strong>Hotel for Pickup</strong> = {Hotel}</p>
                        <p><strong>Hotel Booking Reference</strong> = {HotelBookingRef}</p>
                        <p><strong>Name under Hotel Reservation</strong> = {NameUnderHotelRsv}</p>
                        <p><strong>Pick up Date &amp; Time</strong> = {moment(PickupDatetime).format('Do MMMM YYYY | hh:mm a')}</p>
                        <hr />

                        <p><strong>Airport for Dropoff</strong> = {Airport}</p>
                        <p><strong>Airline</strong> = {Airline}</p>
                        <p><strong>Flight Number</strong> = {FlightNumber}</p>
                        <p><strong>Departure Time</strong> = {moment(DepartureTime, ["HH:mm"]).format("hh:mm a")}</p>
                        <hr />
                        <h3>Payment Method</h3>
                        with {PaymentMethod}
                    </div>

                    <div align="center">
                        <button type="button" class="btn btn-danger btn-lg" style={{ marginRight: '3px' }} onClick={this.backToPayment}>Back</button>
                        <button type="button" class="btn btn-primary btn-lg" onClick={this.Submit}>Submit Data</button>
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

export default connect(mapStateToProps, null)(HTAFinalReview);