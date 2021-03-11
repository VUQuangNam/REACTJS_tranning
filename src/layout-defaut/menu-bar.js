import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import logo from '../media/logos/logo.png';
import router from '../Routers';

class MenuBar extends Component {
    render() {
        var ItemMenuBar = [
            {
                title: 'Trang chủ',
                elementOnUrl: 'home'
            },
            {
                title: 'Danh sách xe',
                elementOnUrl: 'route-bus'
            },
            {
                title: 'Học sinh',
                elementOnUrl: 'student'
            },
            {
                title: 'Đánh giá',
                elementOnUrl: 'evaluate'
            }
        ]

        var listItem = ItemMenuBar.map(x => {
            return <li key={x.title}>
                <Link to={x.elementOnUrl}> {x.title}</Link>
            </li>
        })

        const eml = router.map((data) => (<Route path={data.path} exact component={data.component} key={data.name} />))

        return (
            <div className="menubar">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <Router>
                    <nav>
                        <ul>
                            {listItem}
                        </ul>
                    </nav>
                    <Switch>
                        {eml}
                    </Switch>
                </Router>
            </div>
        )
    }
}

export default MenuBar;
