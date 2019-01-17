import React from 'react';
import ReactDOM from 'react-dom';
import './css/font-awesome.min.css';
//import 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,700,900'; T.89
import './index.css';



class AppContainer extends React.Component {
   /* constructor (props){
        super ();
    } */
    render (){
        return (
            <div>
                <AppJumbotron title="Stuff" />
                <ItemList />


                <ItemCount count={allTheThings.length} chong={"my chong chong"}/>
                <hr />
                <AppFooter />

            </div>
        );
    }
}

class Item extends React.Component {
    constructor (props){
        super ();

        this.state = {
            checked: false
        };

        this.handleClick = this.handleClick.bind(this);
    }
    handleClick (e){
        this.setState({
            checked: !this.state.checked
        });

    }
    render (){
        let text = this.state.checked ? <strike>{this.props.message}</strike> : this.props.message;
        return (
            <div className="row">
                <div className="col-md-12">
                    <input type="checkbox" onClick={this.handleClick} />&nbsp;{text}
                    <hr />
                </div>
            </div>
        );
    }
}

let item2 = <Item message="a new message YONGPIN" />;
let item3 = <Item message="another message" />;
let item4 = <Item message="one more task" />;
let item5 = <Item message="Time it baby" />;

let allTheThings = [item2, item3, item4, item5];

class ItemList extends React.Component {
    /*constructor (props){
        super ();
    }*/
    render (){
        let items = allTheThings.map(thing => thing);
        return (
            <h3>{items}</h3>
        );
    }
}

class AppFooter extends React.Component {
    render (){
        return (
            <div className="text-muted">
                <small>&copy; {new Date().getFullYear()}</small>
            </div>
        );
    }
}

class ItemCount extends React.Component {
    constructor (props){
        super (); //default
        console.log(props);
        this.zin = "min";
        this.mycount = props.count * 2;
    }

    render (){
        return (
            //<h4>There are {this.props.count} items on your list</h4>
            <h4> hello, {this.props.chong} </h4>
        );
    }
}



class AppJumbotron extends React.Component {
    render (){
        return (
            <div className="jumbotron">
                <h2>{this.props.title}</h2>
            </div>
        );
    }
}

function Person(){
    return(
        <div className="person">
            <h2>AH PING GE</h2>
            <p>Age: 30</p>
        </div>
    )
}


ReactDOM.render(
    <Person />,
    document.querySelector('#root')
)

/*

let target = document.getElementById('root');
ReactDOM.render(<AppContainer />, target);


/*
ReactDOM.render(
    <ShoppingList name="Taylor" />,
    document.getElementById('root')
);

*/