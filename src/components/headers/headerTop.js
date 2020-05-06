import React, { Component } from 'react';
import logo from '../../media/logos/logo-2.png';

class HeaderTop extends Component {
    render() {
        return (
            <div className="dunnio-header__top">
                <div className="dunnio-container">
                    <div className="dunnio-header__brand   dunnio-grid__item" id="dunnio_header_brand">
                        <div className="dunnio-header__brand-logo">
                            <a href="/">
                                <img alt="Logo" src={logo} className="dunnio-header__brand-logo-default" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HeaderTop;
