import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';

class HTHFInalReview extends Component {

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
        console.log('final submit', this.props.BookData[0])
    }

    render() {
        console.log('this.props', this.props.BookData[0])
        const { HotelDropoff, HotelDropoffBookingRef, HotelDropoffDate, Email, HotelPickup, HotelPickupBookingRef,
            HotelPickupDate, OvernightStorage, PhoneNumber, RsvpNameHotelDropoff, RsvpNameHotelPickup } = this.props.BookData[0];
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
                        <p>Email = {Email}</p>
                        <p>Phone Number = {PhoneNumber}</p>
                        <hr />

                        <h3>Your Booking</h3>
                        <p>Hotel for Pickup = {HotelPickup}</p>
                        <p>Hotel Booking Reference = {HotelPickupBookingRef}</p>
                        <p>Name under Hotel Reservation = {RsvpNameHotelPickup}</p>
                        <p>Pick up Date = {moment(HotelPickupDate).format('Do MMMM YYYY')}</p>
                        <hr />

                        <p>Hotel for Dropoff = {HotelDropoff}</p>
                        <p>Hotel Booking Reference = {HotelDropoffBookingRef}</p>
                        <p>Name under Hotel Reservation = {RsvpNameHotelDropoff}</p>
                        {
                            OvernightStorage === true ?
                                <p>Overnight Storage = Yes</p>
                                :
                                <p>Overnight Storage = No</p>
                        }
                        <p>Drop off Date = {moment(HotelDropoffDate).format('Do MMMM YYYY')}</p>
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

export default connect(mapStateToProps, null)(HTHFInalReview);