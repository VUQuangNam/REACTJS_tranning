import React, { Component } from 'react';
import {
    Route,
    NavLink
} from "react-router-dom";

const MenuLink = ({ lable, to }) => {
    return (
        <Route path={to} children={({ match }, index) => {
            return (
                <li className="dunnio-menu__item  dunnio-menu__item--submenu dunnio-menu__item--rel"
                    data-ktmenu-submenu-toggle="hover" aria-haspopup="true" key={index}>
                    <NavLink to={to} activeClassName="active"
                        className="dunnio-menu__link dunnio-menu__toggle">
                        <span className="dunnio-menu__link-text">{lable}</span>
                        <i className="dunnio-menu__ver-arrow la la-angle-right"></i>
                    </NavLink>
                </li>
            )
        }} />
    )
}


class HeaderBottom extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    onUpdate = () => {
        this.props.onUpdate(false);
    }

    render() {
        return (
            <div className="dunnio-header__bottom">
                <div className="dunnio-container-fuild">
                    <div className="dunnio-header-menu-wrapper" id="dunnio_header_menu_wrapper">
                        <div id="dunnio_header_menu" className="dunnio-header-menu dunnio-header-menu-mobile ">
                            <ul className="dunnio-menu__nav ">
                                <MenuLink lable="Dashboard" to="/dashboard" />
                                <MenuLink lable="Users" to="/users" />
                                <MenuLink lable="Settings" to="/settings" />
                                <MenuLink lable="Login" to="/login" />
                            </ul>
                        </div>
                    </div>
                </div>
                <button
                    onClick={this.onUpdate}>onClick</button>
            </div >
        );
    }
}

export default HeaderBottom;
