import React from 'react';
import ReactDOM from 'react-dom';
import './css/font-awesome.min.css';


import './main.css';

import Header from './header.js';
import Menu from './menu.js';
import Mainpage from './main-page.js';
import Footer from './footer.js';
//import $ from 'jquery';


class AppContainer extends React.Component {

    render (){
        return (
                <div id="wrapper">
                   <Header/>
                    <Menu/>
                    <Mainpage/>
                    <Footer/>
                </div>

        );
    }
}



let target = document.getElementById('root');
ReactDOM.render(<AppContainer />, target);

