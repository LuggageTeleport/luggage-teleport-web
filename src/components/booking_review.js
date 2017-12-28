import React, { Component } from 'react';
import { connect } from 'react-redux';
import { PassBookData } from '../actions';
import '../App.css';


class BookingReview extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        console.log('props booking review', this.props.BookData)
        return (
            <div>
                <div class="containerProgressBar">
                    <ul class="progressbar">
                        <li class="active">Booking</li>
                        <li>Booking Review</li>
                        <li>Payment Method</li>
                        <li>Booking/Payment Review &amp; Submit</li>
                    </ul>

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

export default connect(mapStateToProps, null)(BookingReview);