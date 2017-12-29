import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';


class ATHReview extends Component {

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
        console.log('props booking review', this.props.BookData[0])
        const { Airline, Airport, ArrivalTime, DropoffDate, Email, FlightNumber, Hotel, HotelBookingRef,
            NameUnderHotelRsv, OvernightStorage, PhoneNumber, PickupDate } = this.props.BookData[0];
            console.log(moment(ArrivalTime, ["HH:mm"]).format("hh:mm A"))
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
                        <p>Aiport = {Airport}</p>
                        <p>Airline = {Airline}</p>
                        <p>Flight Number = {FlightNumber}</p>
                        <p>Pick up Date = {moment(PickupDate).format('Do MMMM YYYY')}</p>
                        <p>Estimated Time of Arrival = {moment(ArrivalTime, ["HH:mm"]).format("hh:mm a")}</p>
                        <hr />

                        <p>Hotel Drop Off = {Hotel}</p>
                        <p>Hotel Booking Reference = {HotelBookingRef}</p>
                        <p>Name under Hotel Reservation = {NameUnderHotelRsv}</p>
                        {
                            OvernightStorage === true ?
                                <p>Overnight Storage = Yes</p>
                                :
                                <p>Overnight Storage = No</p>
                        }
                        <p>Drop off Date = {moment(DropoffDate).format('Do MMMM YYYY')}</p>
                    </div>
                    <div align="center">
                        <button type="button" class="btn btn-danger btn-lg" style={{ marginRight: '3px' }}  onClick={this.backToMainMenu}>Back</button>
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

export default connect(mapStateToProps, { PassBookData })(ATHReview);