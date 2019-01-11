import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class ShoppingList extends React.Component {
    render(){
        return(
            <div className="shopping-list">
                <h1>Shopping list for {this.props.name}</h1>
                <ul>
                    <li>Veggies Egg Tart</li>
                    <li>Meats</li>
                    <li>Banana</li>
                </ul>
            </div>

        );
    }
}


ReactDOM.render(
    <ShoppingList name="Taylor" />,
    document.getElementById('root')
);