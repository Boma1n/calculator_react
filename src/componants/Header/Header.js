import React, {Component} from 'react';
import Nav from '../Nav/Nav.js';

import './Header.css';

class Header extends Component {
    render() {
        return (
            < div className="blockContainer" >
                <div className="containerTitleNav">
                    <div className="containerTitle">
                        <h1>Logo</h1>
                    </div>
                    <Nav></Nav>
                </div>
            </ div >
        );
    }
}

export default Header;