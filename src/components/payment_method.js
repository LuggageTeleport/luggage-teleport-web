import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData, GetPaymentMethod } from '../actions';
import { FormGroup, InputGroup } from 'react-bootstrap';
import '../App.css';


class PaymentMethod extends Component {

    constructor(props) {
        super(props);

        this.state = {
            PaymentMethod: ''
        }
    }

    PushData() {
        this.props.PassBookData(this.props.BookData)
    }

    setPayment() {
        this.props.GetPaymentMethod(this.state.PaymentMethod);
    }

    backToReview = async => {
        this.PushData()
        const { BookingType } = this.props.BookData[0];
        if (BookingType === 'ATH') {
            this.props.history.push('/athreview');
        } else if (BookingType === 'HTA') {
            this.props.history.push('/htareview');
        } else if (BookingType === 'HTH') {
            this.props.history.push('/hthreview');
        } else if (BookingType === 'ATA') {
            this.props.history.push('/atareview');
        } else {
            alert('Ooops Something wrong :(')
        }
    }


    toFinalReview = async => {
        this.PushData()
        this.setPayment()
        const { BookingType } = this.props.BookData[0];
        if (BookingType === 'ATH') {
            this.props.history.push('/athfinalreview')
        } else if (BookingType === 'HTA') {
            this.props.history.push('/htafinalreview')
        } else if (BookingType === 'HTH') {
            this.props.history.push('/hthfinalreview');
        } else if (BookingType === 'ATA') {
            this.props.history.push('/atafinalreview');
        } else {
            alert('Ooops Something wrong :(')
        }

    }

    GetPayment() {
        const Payment = [
            {
                id: 1,
                name: "Credit Card"
            }
        ]

        return Payment;
    }

    ValidatePayment() {
        return (this.state.PaymentMethod.length > 0)
    }

    render() {
        console.log('payment method', this.props.BookData[0]);
        return (
            <div>
                <div className="containerProgressBar" style={{ marginTop: '1em' }}>
                    <ul className="progressbar">
                        <li className="active">Booking</li>
                        <li className="active">Booking Review</li>
                        <li>Payment Method</li>
                        <li>Booking/Payment Review &amp; Submit</li>
                    </ul>

                    <div className="receipt">
                        <form >
                            <FormGroup>
                                <InputGroup>
                                    <select
                                        className="form-control"
                                        style={{ height: '35px', width: '260px', marginTop: '4em', marginLeft: '10em' }}
                                        onChange={event => this.setState({ PaymentMethod: event.target.value })}>
                                        <option value="" selected disabled>Choose Your Payment</option>
                                        {
                                            this.GetPayment().map((payment) => {
                                                return <option key={payment.id} value={payment.name}>{payment.name}</option>
                                            })
                                        }
                                    </select>
                                </InputGroup>
                            </FormGroup>
                        </form>
                    </div>
                    <div align="center">
                        <button type="button" class="btn btn-danger btn-lg" style={{ marginRight: '3px' }} onClick={this.backToReview}>Back</button>
                        <button type="button" class="btn btn-primary btn-lg" onClick={this.toFinalReview} disabled={!this.ValidatePayment()}>Next</button>
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

export default connect(mapStateToProps, { PassBookData, GetPaymentMethod })(PaymentMethod)