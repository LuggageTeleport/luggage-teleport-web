import React, { Component } from 'react';
import { connect } from 'react-redux'
import '../App.css';


class BookingReview extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        console.log('props booking review',this.props)
        return (
            <div>
                <div class="containerProgressBar">
                    <ul class="progressbar">
                        <li class="active">Booking</li>
                        <li>Review</li>
                        <li>Submit Data</li>
                        {/* <li>View map</li> */}
                    </ul>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    const { booksData } = state;
    return {
        booksData
    }
}

export default BookingReview;