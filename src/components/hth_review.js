import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';

class HTHReview extends Component {

    constructor(props) {
        super(props);
    }


    PushData() {
        this.props.PassBookData(this.props.BookData);
    }

    toPaymentMethod = async => {
        this.PushData()
        this.props.history.push('/payment')
    }

    backToMainMenu = async => {
        this.props.history.push('/');
    }

    render() {
        console.log('this.props', this.props.BookData[0])
        const { HotelDropoff, HotelDropoffBookingRef, HotelDropoffDate, Email, HotelPickup, HotelPickupBookingRef,
            HotelPickupDate, OvernightStorage, PhoneNumber, RsvpNameHotelDropoff, RsvpNameHotelPickup } = this.props.BookData[0];
        return (
            <div>
                <div className="containerProgressBar" style={{ marginTop: '1em' }}>
                    <ul className="progressbar">
                        <li className="active">Booking</li>
                        <li>Booking Review</li>
                        <li>Payment Method</li>
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
                    </div>
                    <div align="center">
                        <button type="button" class="btn btn-danger btn-lg" style={{ marginRight: '3px' }} onClick={this.backToMainMenu}>Back</button>
                        <button type="button" class="btn btn-primary btn-lg" onClick={this.toPaymentMethod}>Next</button>
                    </div>
                </div>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { BookData } = state;
    return {
        BookData
    }
}

export default connect(mapStateToProps, { PassBookData })(HTHReview);