import React, { Component } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import Card from '../../card/card'

class Activities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listofactivities: [],
            stateflag: false
        };
    }

    getActivities = () => {
        axios.get('http://localhost:8000/api/assetmanagment/activity')
            .then((response) => {
                let data = [];
                console.log('[ACTicity]', response)
                response.data.data.activity.forEach(element => {
                    data.push(element);
                });
                this.setState({
                    listofactivities: data
                });
                console.log('[ACTIVITY] :' + JSON.stringify(this.state.listofactivities));
            })
            .catch(error => {
                console.log(error);
            })
    }
    componentDidMount() {
        this.loading = true;
        this.getActivities();
        this.loading = false;
    }


    render() {
        console.log('Activities', this.state.listofactivities)
        if ((this.state.listofactivities).length > 0) {
            return (
                <div className="container">
                    <Link to={{ pathname: '/createactivity' }} className="btn-floating btn-large waves-effect waves-light red" >
                        <i className="material-icons">add</i>
                    </Link>
                    {
                        this.state.listofactivities.map((value, i) => {
                            return <div key={i}><div>
                                {
                                    <Card index={i} program={value} cardtitle="Activities" linktitle="Activity Details" pathname="/activitydetails">{i}</Card>
                                }
                            </div></div>
                        })
                    }
                </div>
            );
        }
        else {
            return (
                <div className="container">
                    <Link to={{ pathname: '/createactivity' }} className="btn-floating btn-large waves-effect waves-light red" >
                        <i className="material-icons">add</i>
                    </Link>
                </div>
            );
        }
    }
}

export default Activities;