import React, { Component } from 'react';

import HeaderBottom from '../components/headers/headerBottom';
import HeaderTop from '../components/headers/headerTop';

class LayoutDefault extends Component {
    render() {
        return (
            <div>
                <div className="dunnio-header">
                    <HeaderTop />
                    <HeaderBottom onUpdate={this.props.onUpdate} />
                </div>
            </div>
        );
    }
}
export default LayoutDefault;
