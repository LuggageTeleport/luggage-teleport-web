import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';
import * as moment from 'moment';
import axios from 'axios';
import SquarePaymentForm from './square_payment_form';
import { SQUARE_APP_ID } from '../config';

class ATHFinalReview extends Component {
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
        const { Airline, Airport, ArrivalTime, DropoffDate, Email, FlightNumber, Hotel, HotelBookingRef,
          NameUnderHotelRsv, OvernightStorage, PhoneNumber, PickupDate } = this.props.BookData[0]
        const { PaymentMethod } = this.props.payment;
        const { Luggage, TotalCost } = this.state
        let data = JSON.stringify({
         flightNumber: FlightNumber,
         status: 'Payment Complete',
         hotelReservationName: NameUnderHotelRsv,
         airport: Airport,
         hotel: Hotel,
         pickupDate: PickupDate,
         airline: Airline,
         estimatedArrival: ArrivalTime,
         dropoffDate: DropoffDate,
         hotelReference: HotelBookingRef,
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

         axios.post('https://el3ceo7dwe.execute-api.us-west-1.amazonaws.com/dev/handler/AirportToHotel-create', data, config)
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
        const { Airline, Airport, ArrivalTime, DropoffDate, Email, FlightNumber, Hotel, HotelBookingRef,
            NameUnderHotelRsv, OvernightStorage, PhoneNumber, PickupDate } = this.props.BookData[0]

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
                        <p><strong>Aiport</strong> = {Airport}</p>
                        <p><strong>Airline</strong> = {Airline}</p>
                        <p><strong>Flight Number</strong> = {FlightNumber}</p>
                        <p><strong>Pick up Date</strong> = {moment(PickupDate).format('Do MMMM YYYY')}</p>
                        <p><strong>Estimated Time of Arrival</strong> = {moment(ArrivalTime, ["HH:mm"]).format("hh:mm a")}</p>
                        <hr />

                        <p><strong>Hotel Drop Off</strong> = {Hotel}</p>
                        <p><strong>Hotel Booking Reference</strong> = {HotelBookingRef}</p>
                        <p><strong>Name under Hotel Reservation</strong> = {NameUnderHotelRsv}</p>
                        {/* {
                            OvernightStorage === true ?
                                <p><strong>Overnight Storage</strong> = Yes</p>
                                :
                                <p><strong>Overnight Storage</strong> = No</p>
                        } */}
                        <p><strong>Drop off Date</strong> = {moment(DropoffDate).format('Do MMMM YYYY')}</p>
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
                        <button type="button" className="btn btn-danger btn-lg" onClick={this.backToPayment} style={{ width: '160px' }}>Back</button>
                        {
                            !this.state.isLoading ?
                                <button type="button" className="btn btn-primary btn-lg"
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
export default connect(mapStateToProps, null)(ATHFinalReview);