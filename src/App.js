import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MenuBar from './layout-defaut/menu-bar';
import router from './Routers';
class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isStatus: true,
        }
    }

    render() {
        const eml = router.map((data) => (<Route path={data.path} exact component={data.component} key={data.name} />))
        return (
            <div>
                <div className="row">
                    <div className="col-2">
                        <MenuBar />
                    </div>
                    <div className="col-10">
                        <Router>
                            <Switch>
                                {eml}
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
