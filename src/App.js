import React, { Component } from 'react';
import MenuBar from './layout-defaut/menu-bar';
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
        // const eml = router.map((data) => (<Route path={data.path} exact component={data.component} key={data.name} />))
        return (
            <div>
                <MenuBar />
            </div>
        );
    }
}

export default App;
