import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { Route, Switch, Redirect, withRouter } from 'react-router-dom'
import Header from './Layout/Header';
import Main from './Main';
import Login from './Login/Login';
import { Row, Col } from 'reactstrap'
import Footer from './Layout/Footer';

class App extends React.Component{
	render(){
		return(
				<Fragment>
					{!this.props.isLoggedIn && <Login/>}
					{this.props.isLoggedIn && <Fragment><Header/><Main/></Fragment>}
					<Footer/>
				</Fragment>
			);
	}
}
const mapStateToProps = (state)=>{
	let user = state.user;
	let isLoggedIn = Object.keys(user).length > 0;
	return{
		isLoggedIn
	}
}
export default withRouter(connect(mapStateToProps)(App));
