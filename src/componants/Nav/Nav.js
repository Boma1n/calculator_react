import React, {Component} from 'react';
import './Nav.css';

class Nav extends Component {
    render() {
        return (
           <div className="containerNav">
              <ul>
                 <li>
                    <a href="#">Accueil</a>
                 </li>
                 <li>
                    <a href="#">Menu</a>
                 </li>
                 <li>
                    <a href="#">A propos</a>
                 </li>
                 <li>
                    <a href="#">Profil</a>
                 </li>
              </ul>
           </div>
        );
    }
}

export default Nav;