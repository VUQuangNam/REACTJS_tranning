import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LayoutDefault from './layouts/layoutdefault';
import './App.scss';
// import demo from './tranning/demo';

import router from './Routers';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isStatus: true,
        }
    }

    onUpdate = (value) => {
        console.log(value);
    }

    render() {
        const eml = router.map((data) => {
            return (
                <Route path={data.path} exact component={data.component} key={data.name} />
            )
        })
        return (
            <Router>
                <div>
                    <LayoutDefault onUpdate={this.onUpdate} />
                    <Switch>
                        {eml}
                    </Switch>
                </div>
            </Router >
        );
    }
}
export default App;
