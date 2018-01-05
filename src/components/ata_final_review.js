import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';

class ATAFinalReview extends Component {

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
        console.log('this.props', this.props.BookData[0]);
        const { AirlineDropoff, AirlinePickup, AirportDropoff, AirportPickup, ArrivalTime, DepartureTime,
            DropoffFlightNumber, PickupFlightNumber, Email, PhoneNumber, PickupDate } = this.props.BookData[0];
        const { PaymentMethod } = this.props.payment;
        return (
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
                    <p><strong>Airport for Pick up</strong> = {AirportPickup}</p>
                    <p><strong>Airline</strong> = {AirlinePickup}</p>
                    <p><strong>Flight Number</strong> = {PickupFlightNumber}</p>
                    <p><strong>Pick up Date</strong> = {moment(PickupDate).format('Do MMMM YYYY')}</p>
                    <p><strong>Estimated Time of Arrival</strong> = {moment(ArrivalTime, ["HH:mm"]).format("hh:mm a")}</p>
                    <hr />

                    <p><strong>Airport for Dropoff</strong> = {AirportDropoff}</p>
                    <p><strong>Airline</strong> = {AirlineDropoff}</p>
                    <p><strong>Flight Number</strong> = {DropoffFlightNumber}</p>
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

export default connect(mapStateToProps, null)(ATAFinalReview);