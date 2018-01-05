import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import '../App.css';
import axios from 'axios';
import * as moment from 'moment';


class ATHHistory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            data: [],
            isLoading: false
        }
    }

    componentWillMount() {
        this.GetATHData()
    }

    GetATHData() {
        let token = localStorage.getItem('token')
        // console.log('token', token)
        let config = {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        }

        const { Email } = this.props.user
        axios.get(`https://el3ceo7dwe.execute-api.us-west-1.amazonaws.com/dev/handler/AirportToHotel-get/${Email}`)
            .then((res) => {
                this.setState({ data: res.data.result, isLoading: true })
            }).catch((err) => {
                console.log(err);
            })
    }


    render() {
        console.log('booking data', this.state.data)
        const { data, isLoading } = this.state;
        return (
            <div align="center">
                <div>
                    {
                        isLoading ?
                            data.map((res, k) => {
                                return (
                                    <div key={k} style={{ margin: 3 }}>
                                        <div className="card">
                                            <div className="containerCard">
                                                <p>From <strong>{res.airport}</strong></p>
                                                <p>to <strong>{res.hotel}</strong></p>
                                                <p>Booked at <strong>{moment(res.createdAt).format('DD MMM YYYY, hh:mm a')}</strong></p>
                                                <p>Total Cost: <span style={{ color: 'blue' }}>${res.TotalCost}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div class="sk-folding-cube" style={{ marginTop: '10em' }}>
                                Loading...
                                <div class="sk-cube1 sk-cube"></div>
                                <div class="sk-cube2 sk-cube"></div>
                                <div class="sk-cube4 sk-cube"></div>
                                <div class="sk-cube3 sk-cube"></div>
                            </div>
                    }
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(ATHHistory);