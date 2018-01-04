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
                        <p><strong>Email</strong> = {Email}</p>
                        <p><strong>Phone Number</strong> = {PhoneNumber}</p>
                        <hr />

                        <h3>Your Booking</h3>
                        <p><strong>Hotel for Pickup</strong> = {HotelPickup}</p>
                        <p><strong>Hotel Booking Reference</strong> = {HotelPickupBookingRef}</p>
                        <p><strong>Name under Hotel Reservation</strong> = {RsvpNameHotelPickup}</p>
                        <p><strong>Pick up Date</strong> = {moment(HotelPickupDate).format('Do MMMM YYYY')}</p>
                        <hr />

                        <p><strong>Hotel for Dropoff</strong> = {HotelDropoff}</p>
                        <p><strong>Hotel Booking Reference</strong> = {HotelDropoffBookingRef}</p>
                        <p><strong>Name under Hotel Reservation</strong> = {RsvpNameHotelDropoff}</p>
                        {
                            OvernightStorage === true ?
                                <p><strong>Overnight Storage</strong> = Yes</p>
                                :
                                <p><strong>Overnight Storage</strong> = No</p>
                        }
                        <p><strong>Drop off Date</strong> = {moment(HotelDropoffDate).format('Do MMMM YYYY')}</p>
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