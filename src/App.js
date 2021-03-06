import React, { Component } from 'react';
import './App.css';
import * as firebase from 'firebase'
import Archives from './components/Archives'
import Project from './components/Project'
import { DefaultRoute, RouteHandler, Router, Route, Link, IndexRoute, hashHistory, browserHistory } from 'react-router'


var config = {
    apiKey: "AIzaSyDGf6Nm2OoONeW9Mi3d0T869abk-QTMCjM",
    authDomain: "honorcode-7e07a.firebaseapp.com",
    databaseURL: "https://honorcode-7e07a.firebaseio.com",
    storageBucket: "honorcode-7e07a.appspot.com",
    messagingSenderId: "275879917724"
};
firebase.initializeApp(config);

// let routes = (
//     <Route name="app" path="/" handler={App}>
//     <Route name="archives" path="/archives" handler={Archives}/>
//     </Route>
// );


class App extends Component {
    constructor(props, context){
        super(props,context)
        this.state = {
            loggedIn: (null !== firebase.auth().currentUser),
            userName: null
        }
    }
    componentWillMount() {
        firebase.auth().onAuthStateChanged(firebaseUser => {

            this.setState({
            loggedIn: (null !== firebaseUser)
        })

        if (firebaseUser) {
            console.log("Logged IN", firebaseUser);
            var user = firebase.auth().currentUser;
            this.setState({
                loggedIn: (null !== firebaseUser),
                userName:  user.displayName
            })
        } else {
            console.log('Not logged in');
        }
    });

    }
    render(){
        var loginOrOut;
        var loginOrOutLi;
        var register;
        var registerLi;
        var userName;
        if (this.state.loggedIn) {
            if(this.state.userName !=null)
                userName = <li><a> Hello {this.state.userName} </a></li>;
        else
            userName=null
            loginOrOut = <li><a>
            <Link to="/logout" className="navbar-brand" className="scroll" >Logout</Link>
                </a></li>;
            register = null
            loginOrOutLi = <li><a><Link to="/logout" className="navbar-brand" className="scroll">Logout</Link> </a></li>;
            registerLi = null

        } else {
            loginOrOut = <li><a>
            <Link to="/login" className="navbar-brand" className="scroll">Login</Link> </a></li>;
            register = <li><a>
            <Link to="/register" className="navbar-brand" className="scroll">
                Register
                </Link>
                </a></li>;
            userName = null
            loginOrOutLi = <li><a><Link to="/login">Login</Link> </a></li>;
            registerLi = <li><a> <Link to="/register"> Register </Link> </a></li>;
        }
        return(
            <div>
            <div className="navbar-top " role="navigation">
            <div className="container">
            <div className="navbar-header">
            <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#top-nav">
            <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" href="#">StudyScope</a>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse" id="top-nav">
            <ul className="nav navbar-nav navbar-right">
            {userName}
            <li><a><Link to="/archives"> Explore </Link> </a></li>
            {loginOrOut}
            {register}
            <li className="dropdown">
            <a href="#" className="dropdown-toggle profile-image" data-toggle="dropdown">
            <img src="http://placehold.it/30x30" className="img-circle"/> Test <b className="caret"></b></a>
            <ul className="dropdown-menu">
            <li><a href="#"><i className="fa fa-cog"></i> Account</a></li>
            <li className="divider"></li>
            <li><a href="#"><i className="fa fa-sign-out"></i> Sign-out</a></li>
            </ul>
            </li>
            </ul>
            </div>
            </div>
            </div>
            {this.props.children}
        </div>

    )}

}

export default App;