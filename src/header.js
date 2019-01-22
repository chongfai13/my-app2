import React from 'react';
import logo from './images/logo.svg';



class Header extends React.Component {
    render (){
        return (

            <header id="header">
                <div className="inner">

                    <a href="index.html" className="logo">
                        <span className="symbol"><img src={logo} alt="" /></span><span className="title">Phantom</span>
                    </a>

                    <nav>
                        <ul>
                            <li><a href="#menu">Menu</a></li>
                        </ul>
                    </nav>

                </div>
            </header>




        );
    }
}

export default Header;

