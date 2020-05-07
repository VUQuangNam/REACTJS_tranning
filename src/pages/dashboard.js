import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Dashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: []
        }
    }

    componentDidMount() {
        axios.get('http://api-ssstutter.csell.com.vn/api/v0/collections')
            .then(response => {
                this.setState({ items: response.data.data });
            })
            .catch(function (ex) {
                console.log(ex);
            })
    }

    render() {
        const elm = this.state.items.map((item) => {
            return (
                <div key={item.id}>
                    {item.id}
                </div>
            )
        });

        return (
            <div>
                {elm}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.tasks
    }
}
export default connect(mapStateToProps, null)(Dashboard);
