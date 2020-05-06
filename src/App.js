import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import LayoutDefault from './layouts/layoutdefault';
import './App.scss';
import router from './Routers';
import HeaderTop from './components/headers/headerTop';
import HeaderBottom from './components/headers/headerBottom';
import Footer from './components/footers/footer';

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
        const eml = router.map((data) => (<Route path={data.path} exact component={data.component} key={data.name} />))
        return (
            <div>
                <Router>
                    <div className="dunnio-header">
                        <HeaderTop />
                        <HeaderBottom onUpdate={this.onUpdate} />
                    </div>
                    <Switch>
                        {eml}
                    </Switch>
                    <div className="dunnio-footer">
                        <Footer />
                    </div>
                </Router>
            </div>
        );
    }
}

export default App;
