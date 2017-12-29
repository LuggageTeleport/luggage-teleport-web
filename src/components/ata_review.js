import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';

class ATAReview extends Component {

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
        console.log('this.props', this.props.BookData[0]);
        const { AirlineDropoff, AirlinePickup, AirportDropoff, AirportPickup, ArrivalTime, DepartureTime,
        DropoffFlightNumber, PickupFlightNumber, Email, PhoneNumber, PickupDate } = this.props.BookData[0];
        return (
            <div>
                <div class="containerProgressBar" style={{ marginTop: '1em' }}>
                    <ul class="progressbar">
                        <li class="active">Booking</li>
                        <li>Booking Review</li>
                        <li>Payment Method</li>
                        <li>Booking/Payment Review &amp; Submit</li>
                    </ul>
                    <div style={{ backgroundColor: '#cdd8d9', padding: '10px' }}>
                        <h3>Contact Info</h3>
                        <p>Email = {Email}</p>
                        <p>Phone Number = {PhoneNumber}</p>
                        <hr />

                        <h3>Your Booking</h3>
                        <p>Airport for Pick up = {AirportPickup}</p>
                        <p>Airline = {AirlinePickup}</p>
                        <p>Flight Number = {PickupFlightNumber}</p>
                        <p>Pick up Date = {PickupDate}</p>
                        <p>Estimated Time of Arrival = {ArrivalTime}</p>
                        <hr />

                        <p>Airport for Dropoff = {AirportDropoff}</p>
                        <p>Airline = {AirlineDropoff}</p>
                        <p>Flight Number = {DropoffFlightNumber}</p>
                        <p>Departure Time = {DepartureTime}</p>
                    </div>
                    <div align="center">
                        <button type="button" class="btn btn-primary" style={{ marginRight: '3px' }} onClick={this.toPaymentMethod}>Next</button>
                        <button type="button" class="btn btn-danger" onClick={this.backToMainMenu}>Back</button>
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

export default connect(mapStateToProps, { PassBookData })(ATAReview);