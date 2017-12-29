import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';

class HTAReview extends Component {


    constructor(props){
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

    render(){
        console.log('this.props', this.props.BookData[0])
        const { Airline, Airport, DepartureTime, Email, FlightNumber, Hotel, HotelBookingRef, NameUnderHotelRsv, 
            PhoneNumber, PickupDatetime } = this.props.BookData[0];
        return(
            <div>
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
                        <p>Hotel for Pickup = {Hotel}</p>
                        <p>Hotel Booking Reference = {HotelBookingRef}</p>
                        <p>Name under Hotel Reservation = {NameUnderHotelRsv}</p>
                        <p>Pick up Date &amp; Time = {moment(PickupDatetime).format('Do MMMM YYYY | hh:mm a')}</p>
                        <hr />
                        
                        <p>Airport for Dropoff = {Airport}</p>
                        <p>Airline = {Airline}</p>
                        <p>Flight Number = {FlightNumber}</p>
                        <p>Departure Time = {moment(DepartureTime, ["HH:mm"]).format("hh:mm a")}</p>
                    </div>
                    <div align="center">
                    <button type="button" class="btn btn-danger btn-lg" style={{ marginRight: '3px' }} onClick={this.backToMainMenu}>Back</button>
                        <button type="button" class="btn btn-primary btn-lg" onClick={this.toPaymentMethod}>Next</button>
                    </div>
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

export default connect(mapStateToProps, { PassBookData })(HTAReview);