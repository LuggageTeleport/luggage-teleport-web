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
                name: "Cash"
            }
        ]

        return Payment;
    }

    render() {
        console.log('payment method', this.props.BookData[0]);
        return (
            <div align="center">
                <div class="containerProgressBar" style={{ marginTop: '1em' }}>
                    <ul class="progressbar">
                        <li class="active">Booking</li>
                        <li class="active">Booking Review</li>
                        <li>Payment Method</li>
                        <li>Booking/Payment Review &amp; Submit</li>
                    </ul>

                    <div style={{ backgroundColor: '#cdd8d9', padding: '10px' }}>
                        <form>
                            <FormGroup>
                                <InputGroup>
                                    <select
                                        className="form-control"
                                        style={{ height: '35px', width: '260px' }}
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
                        <button type="button" class="btn btn-primary" style={{ marginRight: '3px' }} onClick={this.toFinalReview}>Next</button>
                        <button type="button" class="btn btn-danger" onClick={this.backToReview}>Back</button>
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