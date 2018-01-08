import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';
import axios from 'axios';
import SquarePaymentForm from './square_payment_form';
import { SQUARE_APP_ID } from '../config';

class HTAFinalReview extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isLoading: false,
            TotalCost: 0,
            Luggage: 0
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
        this.paymentForm.generateNonce();
    }

    handleNonce = async (nonce, cardData) => {

        const { Airline, Airport, DepartureTime, Email, FlightNumber, Hotel, HotelBookingRef, NameUnderHotelRsv,
          PhoneNumber, PickupDatetime } = this.props.BookData[0];
         const { PaymentMethod } = this.props.payment;
        const { Luggage, TotalCost } = this.state

        let data = JSON.stringify({
            airport: Airport,
            airline: Airline,
            flightNumber: FlightNumber,
            pickupDate: PickupDatetime,
            departureTime: DepartureTime,
            hotel: Hotel,
            hotelReference: HotelBookingRef,
            hotelReservationName: NameUnderHotelRsv,
            status: "Payment Complete",
            email: Email,
            phone: PhoneNumber,
            PaymentWith: PaymentMethod,
            LuggageQuantity: Luggage,
            TotalCost: TotalCost,
            cardNonce: nonce,
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

        axios.post('https://el3ceo7dwe.execute-api.us-west-1.amazonaws.com/dev/handler/HotelToAirport-create', data, config)
          .then((response) => {
              // console.log(response);
              alert('success booked!')
              this.props.history.push('/');
          }, (err) => {
              // console.log(err);
              this.setState({ isLoading: false })
          })


    }
    handleNonceError(errors) {
        console.log('handleNonceError', errors);
        alert(errors[0].message)
    }

    handleLuggage = async => {
        const { Luggage, TotalCost } = this.state
        // this.setState({Luggage})
        if (Luggage > 0 && Luggage <= 2) {
            this.setState({ TotalCost: 35 })
        } else if (Luggage > 2) {
            const TotalWithAdditional = 35 + ((Luggage - 2) * 10);
            this.setState({ TotalCost: TotalWithAdditional })
        }

    }

    render() {
        console.log('final review', this.props.BookData[0])
        console.log('final review', this.props.payment)
        const { Airline, Airport, DepartureTime, Email, FlightNumber, Hotel, HotelBookingRef, NameUnderHotelRsv,
            PhoneNumber, PickupDatetime } = this.props.BookData[0];
        const { PaymentMethod } = this.props.payment;

        const { Total } = this.state;
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

                        <h3>Your Luggage(s)</h3>
                        <input onChange={e => this.setState({ Luggage: e.target.value })} placeholder="you luggage quantity" />
                        <button onClick={this.handleLuggage} style={{ backgroundColor: '#00bfff' }} disabled={!this.state.Luggage}>Add</button>
                        <hr />

                        <h3>Payment Details</h3>
                        <p>with {PaymentMethod}</p>
                        <SquarePaymentForm appId={SQUARE_APP_ID} onNonceGenerated={this.handleNonce} onNonceError={this.handleNonceError} onRef={ref => (this.paymentForm = ref)} />
                        <p><strong>Total = ${this.state.TotalCost}</strong></p>

                        <p><strong>Notes! </strong>
                            <i className="registerNotes">
                                $35 fixed price up to 2 Luggages and $10 per additional</i>
                        </p>
                    </div>

                    <div align="center">
                        <button type="button" class="btn btn-danger btn-lg" style={{ width: '160px' }} onClick={this.backToPayment}>Back</button>
                        {
                            !this.state.isLoading ?
                                <button type="button" class="btn btn-primary btn-lg"
                                    onClick={this.Submit}
                                    style={{ width: '160px', marginLeft: '1em' }}
                                    disabled={!this.state.TotalCost}
                                >Submit Data
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

export default connect(mapStateToProps, null)(HTAFinalReview);