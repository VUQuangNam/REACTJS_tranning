import React, { Component } from 'react';

class Footer extends Component {
    render() {
        return (
            <div className="dunnio-footer dunnio-footer--extended  dunnio-grid__item" id="dunnio_footer">
                <div className="dunnio-footer__top">
                    <div className="dunnio-container">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="dunnio-footer__section">
                                    <h3 className="dunnio-footer__title">About</h3>
                                    <div className="dunnio-footer__content">
                                        Whatever method you chosse,these nine will
                                        make you re-think theway you craft healines
                                        Why? Because they all have points in that are
                                        worth from a point of view.
            </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dunnio-footer__section">
                                    <h3 className="dunnio-footer__title">Quick Links</h3>
                                    <div className="dunnio-footer__content">
                                        <div className="dunnio-footer__nav">
                                            <div className="dunnio-footer__nav-section">
                                                <a href="/"> General Reports</a>
                                                <a href="/"> Dashboart Widgets</a>
                                                <a href="/"> Custom Pages</a>
                                            </div>
                                            <div className="dunnio-footer__nav-section">
                                                <a href="/"> User Setting</a>
                                                <a href="/"> Custom Pages</a>
                                                <a href="/"> Intranet Settings</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="dunnio-footer__section">
                                    <h3 className="dunnio-footer__title">Get In Touch</h3>
                                    <div className="dunnio-footer__content">
                                        <form action="#" className="dunnio-footer__subscribe">
                                            <div className="input-group">
                                                <input type="text" className="form-control" placeholder="Enter Your Email" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-brand" type="button">Join</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="dunnio-footer__bottom">
                    <div className="dunnio-container">
                        <div className="dunnio-footer__wrapper">
                            <div className="dunnio-footer__logo">
                                <a href="/trang-chu">
                                    <img alt="Logo" src="/assets/media/logos/logo-2.png" />
                                </a>
                                <div className="dunnio-footer__copyright">
                                    2019
            <a href="http://keenthemes.com/metronic">Keenthemes</a>
                                </div>
                            </div>
                            <div className="dunnio-footer__menu">
                                <a href="http://keenthemes.com/metronic" >Purchase Lisence</a>
                                <a href="http://keenthemes.com/metronic" >Team</a>
                                <a href="http://keenthemes.com/metronic" >Contact</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Footer;
